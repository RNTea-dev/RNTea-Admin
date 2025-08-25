// src/pages/AdminDashboard.jsx
import React, { useContext, useEffect, useMemo, useState, useCallback } from "react";
import { collection, collectionGroup, doc, getDoc, getDocs, updateDoc, setDoc, addDoc, deleteDoc, serverTimestamp, query, where, orderBy, limit} from "firebase/firestore";
import { FirebaseContext } from "../admin.jsx";
import { trackEvent } from "../lib/trackEvent.js"; // adjust path if needed
import { serverTimestamp } from "firebase/firestore";

import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  Timestamp,
} from "firebase/firestore";

/* ========== CONFIG: Add your admin email(s) here ========== */
const ADMIN_EMAILS = ["rnteallc@gmail.com"]; // <= PUT YOUR EMAIL HERE (you can list multiple)

/* =======================
   Small UI primitives (Tailwind)
   ======================= */
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 ${className}`}>{children}</div>
);
const SectionTitle = ({ children, right }) => (
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
    {right}
  </div>
);
const Button = ({ children, onClick, type = "button", className = "", disabled }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-xl shadow-sm border border-transparent transition
      bg-gray-900 text-white hover:shadow disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);
const GhostButton = ({ children, onClick, className = "", disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-3 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-50 ${className}`}
  >
    {children}
  </button>
);
const DangerButton = ({ children, onClick, className = "", disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-3 py-2 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 disabled:opacity-50 ${className}`}
  >
    {children}
  </button>
);
const Input = (props) => (
  <input
    {...props}
    className={`w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 ${props.className || ""}`}
  />
);
const Select = (props) => (
  <select
    {...props}
    className={`w-full px-3 py-2 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10 ${props.className || ""}`}
  />
);
const Textarea = (props) => (
  <textarea
    {...props}
    className={`w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 ${props.className || ""}`}
  />
);

const fmtDate = (ts) => {
  if (!ts) return "-";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleString();
};

/* =======================
   Dashboard
   ======================= */
const TABS_ALL = [
  { key: "stats", label: "Stats" },
  { key: "hospitals", label: "Hospitals" }, // admin-only
  { key: "doctors", label: "Doctors" },     // admin-only
  { key: "posts", label: "Posts" },
  { key: "activity", label: "Activity Log" }, // admin-only (writes)
  { key: "dedupe", label: "Review Duplicates" }, // admin-only
];

export default function AdminDashboard() {
  const { db, appId, auth, userId } = useContext(FirebaseContext);
  const email = auth?.currentUser?.email || "";
  const isAdmin = ADMIN_EMAILS.includes(email);

  // Base path for your nested structure
  const baseHospitalsPath = useMemo(
    () => `artifacts/${appId}/public/data/hospitals`,
    [appId]
  );

  const tabs = useMemo(
    () => TABS_ALL.filter(t => (["stats", "posts"].includes(t.key) ? true : isAdmin)),
    [isAdmin]
  );

  const [tab, setTab] = useState("stats");

  // Data
  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]); // each doctor includes {hospitalId}
  const [posts, setPosts] = useState([]); // supports merged (nested + top-level)

  // UI state
  const [loading, setLoading] = useState(false);
  const [busyId, setBusyId] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // Forms
  const [hospitalForm, setHospitalForm] = useState({ name: "", location: "" });
  const [doctorForm, setDoctorForm] = useState({ name: "", specialty: "", hospitalId: "" });
  const [postForm, setPostForm] = useState({ text: "", hospitalId: "", doctorId: "", status: "active" });

  // Stats
  const [stats, setStats] = useState({ totalHospitals: 0, totalDoctors: 0, totalPosts: 0, last7: 0 });

  const loadHospitals = useCallback(async () => {
  console.log("[Admin] baseHospitalsPath =", baseHospitalsPath);

  // 1) Direct path (no orderBy while debugging)
  try {
    const snap = await getDocs(collection(db, baseHospitalsPath));
    const docs = snap.docs.map(d => ({ id: d.id, ...d.data(), _path: baseHospitalsPath }));
    console.log("[Admin] Direct path count:", docs.length);
    if (docs[0]) console.log("[Admin] First (direct):", docs[0].id, docs[0]);
    if (docs.length) return docs;
  } catch (e) {
    console.warn("[Admin] Direct hospitals path error:", e?.message);
  }

  // 2) Fallback: ANY subcollection named "hospitals" (no orderBy while debugging)
  const cgSnap = await getDocs(collectionGroup(db, "hospitals"));
  const docs2 = cgSnap.docs.map(d => ({ id: d.id, ...d.data(), _fullPath: d.ref.path }));
  console.warn("[Admin] collectionGroup('hospitals') count:", docs2.length);
  if (docs2[0]) console.warn("[Admin] Example hospitals full path:", docs2[0]._fullPath);
  return docs2;
}, [db, baseHospitalsPath]);

  const loadDoctors = useCallback(async (hospitalId) => {
  // If a hospital is selected, read its subcollection directly
  if (hospitalId) {
    const snap = await getDocs(
      query(
        collection(db, `${baseHospitalsPath}/${hospitalId}/doctors`),
        orderBy("name")
      )
    );
    return snap.docs.map(d => ({ id: d.id, hospitalId, ...d.data() }));
  }

  // Otherwise, read ALL doctors across all hospitals via collectionGroup
  const snap = await getDocs(
    query(collectionGroup(db, "doctors"), orderBy("name"))
  );

  return snap.docs.map(d => {
    // Extract the hospitalId from the full path:
    // artifacts/<appId>/public/data/hospitals/<hid>/doctors/<did>
    const parts = d.ref.path.split("/");
    const hIndex = parts.indexOf("hospitals");
    const hid = hIndex >= 0 ? parts[hIndex + 1] : "";
    return { id: d.id, hospitalId: hid, ...d.data() };
  });
}, [db, baseHospitalsPath]);


  const loadPostsMerged = useCallback(async () => {
    const results = [];

    const nestedSnap = await getDocs(
      query(collectionGroup(db, "posts"), orderBy("createdAt", "desc"))
    );
    nestedSnap.forEach((d) => {
      const parts = d.ref.path.split("/");
      const hIndex = parts.indexOf("hospitals");
      const dIndex = parts.indexOf("doctors");
      const hid = hIndex >= 0 ? parts[hIndex + 1] : "";
      const did = dIndex >= 0 ? parts[dIndex + 1] : "";
      results.push({ id: d.id, hospitalId: hid, doctorId: did, nested: true, ...d.data() });
    });

    try {
      const topSnap = await getDocs(query(collection(db, "posts"), orderBy("createdAt", "desc")));
      topSnap.forEach((d) => results.push({ id: d.id, nested: false, ...d.data() }));
    } catch {}

    const seen = new Set();
    const unique = [];
    for (const p of results) {
      const key = `${p.id}:${p.nested ? "n" : "t"}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(p);
      }
    }
    return unique.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
  }, [db]);

  const loadAll = useCallback(async () => {
  setLoading(true);
  try {
    const [hsR, dsR, psR] = await Promise.allSettled([
      loadHospitals(),
      loadDoctors(),      // if this or posts fails on rules, hospitals still render
      loadPostsMerged(),
    ]);

    const hs = hsR.status === "fulfilled" ? hsR.value : [];
    const ds = dsR.status === "fulfilled" ? dsR.value : [];
    const ps = psR.status === "fulfilled" ? psR.value : [];

    if (hsR.status === "rejected") console.warn("[Admin] hospitals load failed:", hsR.reason);
    if (dsR.status === "rejected") console.warn("[Admin] doctors load failed:", dsR.reason);
    if (psR.status === "rejected") console.warn("[Admin] posts load failed:", psR.reason);

    setHospitals(hs);
    setDoctors(ds);
    setPosts(ps);

    setStats({
      totalHospitals: hs.length,
      totalDoctors: ds.length,
      totalPosts: ps.length,
      last7: ps.filter((p) => {
        const d = p.createdAt?.toDate?.() || new Date(0);
        return Date.now() - d.getTime() <= 7 * 24 * 60 * 60 * 1000;
      }).length,
    });
  } finally {
    setLoading(false);
  }
}, [loadHospitals, loadDoctors, loadPostsMerged]);

useEffect(() => {
  if (db && appId) loadAll();
}, [db, appId, loadAll]);


  /* ---------- Derived ---------- */
  const doctorsByHospital = useMemo(() => {
    const map = {};
    doctors.forEach((d) => {
      if (!map[d.hospitalId]) map[d.hospitalId] = [];
      map[d.hospitalId].push(d);
    });
    return map;
  }, [doctors]);

  const filteredHospitals = useMemo(() => {
    const ql = search.trim().toLowerCase();
    return hospitals
      .filter((h) => (h.name || "").toLowerCase().includes(ql) || (h.location || "").toLowerCase().includes(ql))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [hospitals, search]);

  const filteredDoctors = useMemo(() => {
    const ql = search.trim().toLowerCase();
    let ds = doctors;
    if (selectedHospital) ds = ds.filter((d) => d.hospitalId === selectedHospital);
    if (ql) ds = ds.filter((d) => (d.name || "").toLowerCase().includes(ql) || (d.specialty || "").toLowerCase().includes(ql));
    return ds.sort((a, b) => a.name.localeCompare(b.name));
  }, [doctors, search, selectedHospital]);

  const filteredPosts = useMemo(() => {
    const ql = search.trim().toLowerCase();
    let ps = posts;
    if (selectedHospital) ps = ps.filter((p) => p.hospitalId === selectedHospital || !p.nested);
    if (selectedDoctor) ps = ps.filter((p) => p.doctorId === selectedDoctor || !p.nested);
    if (ql) ps = ps.filter((p) => (p.text || "").toLowerCase().includes(ql));
    return ps;
  }, [posts, search, selectedHospital, selectedDoctor]);

  /* ---------- Activity log (top-level) ---------- */
  const logActivity = async ({ type, entity, entityId, note }) => {
    try {
      await addDoc(collection(db, "activity_logs"), {
        type,
        entity,
        entityId,
        by: email || userId || "user",
        note: note || "",
        ts: Timestamp.now(),
      });
    } catch {}
  };
/* ---------- CRUD: Hospitals (admin-only in UI) ---------- */
const createHospital = async () => {
  if (!isAdmin || !hospitalForm.name.trim()) return;
  setBusyId("create-hospital");
  try {
    const payload = {
      ...hospitalForm,
      status: "active",
      createdAt: serverTimestamp(), // server time for consistency
    };
    const res = await addDoc(collection(db, baseHospitalsPath), payload);

    await logActivity({ type: "create", entity: "hospital", entityId: res.id, note: hospitalForm.name });
    await trackEvent(db, {
      type: "hospital.created",
      actorEmail: email || null,
      target: { collection: "hospitals", id: res.id, path: `${baseHospitalsPath}/${res.id}` },
      meta: { name: hospitalForm.name }
    });

    setHospitalForm({ name: "", location: "" });
    await loadAll();
  } finally {
    setBusyId(null);
  }
};

const updateHospital = async (h) => {
  if (!isAdmin) return;
  setBusyId(h.id);
  try {
    await setDoc(
      doc(db, baseHospitalsPath, h.id),
      { name: h.name ?? "", location: h.location ?? "" },
      { merge: true }
    );

    await logActivity({ type: "update", entity: "hospital", entityId: h.id, note: h.name });
    await trackEvent(db, {
      type: "hospital.updated",
      actorEmail: email || null,
      target: { collection: "hospitals", id: h.id, path: `${baseHospitalsPath}/${h.id}` },
      meta: { name: h.name ?? "" }
    });

    await loadAll();
  } finally {
    setBusyId(null);
  }
};

const removeHospital = async (id) => {
  if (!isAdmin) return;
  setBusyId(id);
  try {
    await deleteDoc(doc(db, baseHospitalsPath, id));

    await logActivity({ type: "delete", entity: "hospital", entityId: id });
    await trackEvent(db, {
      type: "hospital.deleted",
      actorEmail: email || null,
      target: { collection: "hospitals", id, path: `${baseHospitalsPath}/${id}` }
    });

    await loadAll();
  } finally {
    setBusyId(null);
  }
};


/* ---------- CRUD: Doctors (admin-only in UI) ---------- */
const createDoctor = async () => {
  if (!isAdmin || !doctorForm.name.trim() || !doctorForm.hospitalId) return;
  setBusyId("create-doctor");
  try {
    const payload = {
      name: doctorForm.name,
      specialty: doctorForm.specialty || "",
      status: "active",
      createdAt: serverTimestamp(),
    };
    const res = await addDoc(
      collection(db, `${baseHospitalsPath}/${doctorForm.hospitalId}/doctors`),
      payload
    );

    await logActivity({ type: "create", entity: "doctor", entityId: res.id, note: doctorForm.name });
    await trackEvent(db, {
      type: "doctor.created",
      actorEmail: email || null,
      target: {
        collection: "doctors",
        id: res.id,
        path: `${baseHospitalsPath}/${doctorForm.hospitalId}/doctors/${res.id}`,
        hospitalId: doctorForm.hospitalId
      },
      meta: { name: doctorForm.name }
    });

    setDoctorForm({ name: "", specialty: "", hospitalId: "" });
    await loadAll();
  } finally {
    setBusyId(null);
  }
};

const updateDoctor = async (d) => {
  if (!isAdmin) return;
  setBusyId(d.id);
  try {
    await setDoc(
      doc(db, `${baseHospitalsPath}/${d.hospitalId}/doctors/${d.id}`),
      { name: d.name ?? "", specialty: d.specialty || "" },
      { merge: true }
    );

    await logActivity({ type: "update", entity: "doctor", entityId: d.id, note: d.name });
    await trackEvent(db, {
      type: "doctor.updated",
      actorEmail: email || null,
      target: {
        collection: "doctors",
        id: d.id,
        path: `${baseHospitalsPath}/${d.hospitalId}/doctors/${d.id}`,
        hospitalId: d.hospitalId
      },
      meta: { name: d.name ?? "" }
    });

    await loadAll();
  } finally {
    setBusyId(null);
  }
};

const removeDoctor = async (d) => {
  if (!isAdmin) return;
  setBusyId(d.id);
  try {
    await deleteDoc(doc(db, `${baseHospitalsPath}/${d.hospitalId}/doctors/${d.id}`));

    await logActivity({ type: "delete", entity: "doctor", entityId: d.id });
    await trackEvent(db, {
      type: "doctor.deleted",
      actorEmail: email || null,
      target: {
        collection: "doctors",
        id: d.id,
        path: `${baseHospitalsPath}/${d.hospitalId}/doctors/${d.id}`,
        hospitalId: d.hospitalId
      }
    });

    await loadAll();
  } finally {
    setBusyId(null);
  }
};


/* ---------- Posts ---------- */
// Anyone can create (UI); your rules allow public create.
const createPost = async () => {
  if (!postForm.text.trim()) return;
  setBusyId("create-post");
  try {
    let ref, targetPath, targetMeta = {};

    if (postForm.hospitalId && postForm.doctorId) {
      targetPath = `${baseHospitalsPath}/${postForm.hospitalId}/doctors/${postForm.doctorId}/posts`;
      ref = await addDoc(collection(db, targetPath), {
        text: postForm.text,
        status: postForm.status || "active",
        createdAt: serverTimestamp()
      });
      targetMeta = { hospitalId: postForm.hospitalId, doctorId: postForm.doctorId };
    } else {
      targetPath = "posts";
      ref = await addDoc(collection(db, targetPath), {
        text: postForm.text,
        status: postForm.status || "active",
        hospitalId: postForm.hospitalId || null,
        doctorId: postForm.doctorId || null,
        createdAt: serverTimestamp()
      });
      targetMeta = { hospitalId: postForm.hospitalId || null, doctorId: postForm.doctorId || null };
    }

    await logActivity({ type: "create", entity: "post", entityId: ref.id });
    await trackEvent(db, {
      type: "post.created",
      actorEmail: email || null,
      target: {
        collection: "posts",
        id: ref.id,
        path: `${targetPath}/${ref.id}`,
        ...targetMeta
      },
      meta: { textLength: postForm.text.length, status: postForm.status || "active" }
    });

    setPostForm({ text: "", hospitalId: "", doctorId: "", status: "active" });
    await loadAll();
  } finally {
    setBusyId(null);
  }
};

const updatePost = async (p) => {
  if (!isAdmin) return; // UI gate
  setBusyId(p.id);
  try {
    let path, data;
    if (p.nested && p.hospitalId && p.doctorId) {
      path = `${baseHospitalsPath}/${p.hospitalId}/doctors/${p.doctorId}/posts/${p.id}`;
      data = { text: p.text, status: p.status || "active" };
    } else {
      path = `posts/${p.id}`;
      data = {
        text: p.text,
        status: p.status || "active",
        hospitalId: p.hospitalId || null,
        doctorId: p.doctorId || null
      };
    }

    await setDoc(docFromPath(path), data, { merge: true });

    await logActivity({ type: "update", entity: "post", entityId: p.id });
    await trackEvent(db, {
      type: "post.updated",
      actorEmail: email || null,
      target: {
        collection: "posts",
        id: p.id,
        path,
        hospitalId: p.hospitalId || null,
        doctorId: p.doctorId || null
      },
      meta: { status: p.status || "active" }
    });

    await loadAll();
  } finally {
    setBusyId(null);
  }
};

const softDeletePost = async (p) => {
  if (!isAdmin) return; // UI gate
  // reuse updatePost to set status
  await updatePost({ ...p, status: "deleted" });

  await trackEvent(db, {
    type: "post.soft_deleted",
    actorEmail: email || null,
    target: {
      collection: "posts",
      id: p.id,
      path: p.nested && p.hospitalId && p.doctorId
        ? `${baseHospitalsPath}/${p.hospitalId}/doctors/${p.doctorId}/posts/${p.id}`
        : `posts/${p.id}`,
      hospitalId: p.hospitalId || null,
      doctorId: p.doctorId || null
    }
  });
};

const hardDeletePost = async (p) => {
  if (!isAdmin) return; // UI gate
  setBusyId(p.id);
  try {
    let path;
    if (p.nested && p.hospitalId && p.doctorId) {
      path = `${baseHospitalsPath}/${p.hospitalId}/doctors/${p.doctorId}/posts/${p.id}`;
      await deleteDoc(doc(db, path));
    } else {
      path = `posts/${p.id}`;
      await deleteDoc(doc(db, "posts", p.id));
    }

    await logActivity({ type: "delete", entity: "post", entityId: p.id });
    await trackEvent(db, {
      type: "post.deleted",
      actorEmail: email || null,
      target: {
        collection: "posts",
        id: p.id,
        path,
        hospitalId: p.hospitalId || null,
        doctorId: p.doctorId || null
      }
    });

    await loadAll();
  } finally {
    setBusyId(null);
  }
};

// --- Reinstate a hospital (status: "active") ---
const reinstateHospital = async (id) => {
  if (!isAdmin) return;
  setBusyId(id);
  try {
    await setDoc(
      doc(db, baseHospitalsPath, id),
      { status: "active" },
      { merge: true }
    );

    await logActivity({ type: "reinstate", entity: "hospital", entityId: id, note: "status -> active" });
    await trackEvent(db, {
      type: "hospital.reinstated",
      actorEmail: email || null,
      target: { collection: "hospitals", id, path: `${baseHospitalsPath}/${id}` }
    });

    await loadAll();
  } finally {
    setBusyId(null);
  }
};

// --- Reinstate a doctor (status: "active") ---
const reinstateDoctor = async (d) => {
  if (!isAdmin) return;
  setBusyId(d.id);
  try {
    const path = `${baseHospitalsPath}/${d.hospitalId}/doctors/${d.id}`;
    await setDoc(doc(db, path), { status: "active" }, { merge: true });

    await logActivity({ type: "reinstate", entity: "doctor", entityId: d.id, note: "status -> active" });
    await trackEvent(db, {
      type: "doctor.reinstated",
      actorEmail: email || null,
      target: { collection: "doctors", id: d.id, path, hospitalId: d.hospitalId }
    });

    await loadAll();
  } finally {
    setBusyId(null);
  }
};

  /* ---------- Top bar ---------- */
  const TopBar = (
    <div className="px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-extrabold text-gray-900">Admin Dashboard</h1>
        <span className="text-sm text-gray-500">Manage and audit RNTea data</span>
        <div className="ml-auto text-sm text-gray-500">
          Signed in: {email || userId || "anonymous"} {isAdmin ? "· Admin" : ""}
        </div>
      </div>
    </div>
  );

  /* ---------- Render ---------- */
  return (
    <div className="min-h-screen bg-gray-50">
      {TopBar}

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <Card className="col-span-12 md:col-span-3 p-3 h-fit sticky top-20">
          <div className="flex flex-col gap-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`text-left px-3 py-2 rounded-xl hover:bg-gray-50 ${
                  tab === t.key ? "bg-gray-900 text-white hover:bg-gray-900" : ""
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <Input placeholder="Search…" value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="mt-3 grid grid-cols-1 gap-2">
              <Select
                value={selectedHospital}
                onChange={(e) => {
                  setSelectedHospital(e.target.value);
                  setSelectedDoctor("");
                }}
              >
                <option value="">All hospitals</option>
                {hospitals.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name}
                  </option>
                ))}
              </Select>
              <Select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                disabled={!selectedHospital}
              >
                <option value="">{selectedHospital ? "All doctors (selected hospital)" : "Pick a hospital first"}</option>
                {(doctorsByHospital[selectedHospital] || []).map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </Card>

        {/* Main column */}
        <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
          {/* Stats */}
          {tab === "stats" && (
            <Card className="p-6">
              <SectionTitle>Overview</SectionTitle>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4">
                  <div className="text-sm text-gray-500">Hospitals</div>
                  <div className="text-3xl font-bold">{stats.totalHospitals}</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm text-gray-500">Doctors</div>
                  <div className="text-3xl font-bold">{stats.totalDoctors}</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm text-gray-500">Posts</div>
                  <div className="text-3xl font-bold">{stats.totalPosts}</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm text-gray-500">Posts (7d)</div>
                  <div className="text-3xl font-bold">{stats.last7}</div>
                </Card>
              </div>
            </Card>
          )}

          {/* Hospitals (admin-only) */}
          {tab === "hospitals" && isAdmin && (
            <Card className="p-6">
              <SectionTitle
                right={<Button onClick={createHospital} disabled={busyId === "create-hospital"}>Add Hospital</Button>}
              >
                Hospitals
              </SectionTitle>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <Input
                  placeholder="Name"
                  value={hospitalForm.name}
                  onChange={(e) => setHospitalForm((f) => ({ ...f, name: e.target.value }))}
                />
                <Input
                  placeholder="Location"
                  value={hospitalForm.location}
                  onChange={(e) => setHospitalForm((f) => ({ ...f, location: e.target.value }))}
                />
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="p-2">Name</th>
                      <th className="p-2">Location</th>
                      <th className="p-2">Created</th>
                      <th className="p-2 w-40">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHospitals.map((h) => (
                      <tr key={h.id} className="border-t">
                        <td className="p-2">
                          <Input
                            value={h.name || ""}
                            onChange={(e) => {
                              h.name = e.target.value;
                              setHospitals([...hospitals]);
                            }}
                          />
                        </td>
                        <td className="p-2">
                          <Input
                            value={h.location || ""}
                            onChange={(e) => {
                              h.location = e.target.value;
                              setHospitals([...hospitals]);
                            }}
                          />
                        </td>
                        <td className="p-2">{fmtDate(h.createdAt)}</td>
                        <td className="p-2 flex gap-2">
                          <GhostButton onClick={() => updateHospital(h)} disabled={busyId === h.id}>
                            Save
                          </GhostButton>
                          <DangerButton onClick={() => removeHospital(h.id)} disabled={busyId === h.id}>
                            Delete
                          </DangerButton>
                        </td>
                      </tr>
                    ))}
                    {!filteredHospitals.length && (
                      <tr>
                        <td className="p-4 text-gray-500" colSpan={4}>
                          No hospitals found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* Doctors (admin-only) */}
          {tab === "doctors" && isAdmin && (
            <Card className="p-6">
              <SectionTitle
                right={<Button onClick={createDoctor} disabled={busyId === "create-doctor"}>Add Doctor</Button>}
              >
                Doctors
              </SectionTitle>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
                <Select
                  value={doctorForm.hospitalId}
                  onChange={(e) => setDoctorForm((f) => ({ ...f, hospitalId: e.target.value }))}
                >
                  <option value="">Select hospital</option>
                  {hospitals.map((h) => (
                    <option key={h.id} value={h.id}>
                      {h.name}
                    </option>
                  ))}
                </Select>
                <Input
                  placeholder="Name"
                  value={doctorForm.name}
                  onChange={(e) => setDoctorForm((f) => ({ ...f, name: e.target.value }))}
                />
                <Input
                  placeholder="Specialty"
                  value={doctorForm.specialty}
                  onChange={(e) => setDoctorForm((f) => ({ ...f, specialty: e.target.value }))}
                />
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="p-2">Hospital</th>
                      <th className="p-2">Name</th>
                      <th className="p-2">Specialty</th>
                      <th className="p-2">Created</th>
                      <th className="p-2 w-40">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDoctors.map((d) => (
                      <tr key={d.id} className="border-t">
                        <td className="p-2">
                          <Select
                            value={d.hospitalId}
                            onChange={(e) => {
                              d.hospitalId = e.target.value;
                              setDoctors([...doctors]);
                            }}
                          >
                            {hospitals.map((h) => (
                              <option key={h.id} value={h.id}>
                                {h.name}
                              </option>
                            ))}
                          </Select>
                        </td>
                        <td className="p-2">
                          <Input
                            value={d.name || ""}
                            onChange={(e) => {
                              d.name = e.target.value;
                              setDoctors([...doctors]);
                            }}
                          />
                        </td>
                        <td className="p-2">
                          <Input
                            value={d.specialty || ""}
                            onChange={(e) => {
                              d.specialty = e.target.value;
                              setDoctors([...doctors]);
                            }}
                          />
                        </td>
                        <td className="p-2">{fmtDate(d.createdAt)}</td>
                        <td className="p-2 flex gap-2">
                          <GhostButton onClick={() => updateDoctor(d)} disabled={busyId === d.id}>
                            Save
                          </GhostButton>
                          <DangerButton onClick={() => removeDoctor(d)} disabled={busyId === d.id}>
                            Delete
                          </DangerButton>
                        </td>
                      </tr>
                    ))}
                    {!filteredDoctors.length && (
                      <tr>
                        <td className="p-4 text-gray-500" colSpan={5}>
                          No doctors found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* Posts (everyone can create; only admin sees edit/delete) */}
          {tab === "posts" && (
            <Card className="p-6">
              <SectionTitle right={<Button onClick={createPost} disabled={busyId === "create-post"}>Add Post</Button>}>
                Posts
              </SectionTitle>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
                <Select
                  value={postForm.hospitalId}
                  onChange={(e) => {
                    const hospitalId = e.target.value;
                    setPostForm((f) => ({ ...f, hospitalId, doctorId: "" }));
                  }}
                >
                  <option value="">Select hospital</option>
                  {hospitals.map((h) => (
                    <option key={h.id} value={h.id}>
                      {h.name}
                    </option>
                  ))}
                </Select>

                <Select
                  value={postForm.doctorId}
                  onChange={(e) => setPostForm((f) => ({ ...f, doctorId: e.target.value }))}
                  disabled={!postForm.hospitalId}
                >
                  <option value="">{postForm.hospitalId ? "Select doctor" : "Pick hospital first"}</option>
                  {(doctorsByHospital[postForm.hospitalId] || []).map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </Select>

                <Select value={postForm.status} onChange={(e) => setPostForm((f) => ({ ...f, status: e.target.value }))}>
                  <option value="active">active</option>
                  <option value="hidden">hidden</option>
                  <option value="deleted">deleted</option>
                </Select>
              </div>

              <Textarea
                rows={3}
                placeholder="Post text…"
                value={postForm.text}
                onChange={(e) => setPostForm((f) => ({ ...f, text: e.target.value }))}
              />

              <div className="overflow-x-auto mt-6">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="p-2">Text</th>
                      <th className="p-2">Hospital</th>
                      <th className="p-2">Doctor</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Created</th>
                      <th className="p-2 w-56">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPosts.map((p) => (
                      <tr key={`${p.id}:${p.nested ? "n" : "t"}`} className="border-t align-top">
                        <td className="p-2">
                          <Textarea
                            rows={3}
                            value={p.text || ""}
                            onChange={(e) => {
                              p.text = e.target.value;
                              setPosts([...posts]);
                            }}
                            readOnly={!isAdmin}
                          />
                        </td>
                        <td className="p-2">
                          <Select
                            value={p.hospitalId || ""}
                            onChange={(e) => {
                              p.hospitalId = e.target.value || "";
                              p.doctorId = "";
                              setPosts([...posts]);
                            }}
                            disabled={!isAdmin}
                          >
                            <option value="">(none)</option>
                            {hospitals.map((h) => (
                              <option key={h.id} value={h.id}>
                                {h.name}
                              </option>
                            ))}
                          </Select>
                        </td>
                        <td className="p-2">
                          <Select
                            value={p.doctorId || ""}
                            onChange={(e) => {
                              p.doctorId = e.target.value || "";
                              setPosts([...posts]);
                            }}
                            disabled={!isAdmin || !p.hospitalId}
                          >
                            <option value="">(none)</option>
                            {(doctorsByHospital[p.hospitalId] || []).map((d) => (
                              <option key={d.id} value={d.id}>
                                {d.name}
                              </option>
                            ))}
                          </Select>
                        </td>
                        <td className="p-2">
                          <Select
                            value={p.status || "active"}
                            onChange={(e) => {
                              p.status = e.target.value;
                              setPosts([...posts]);
                            }}
                            disabled={!isAdmin}
                          >
                            <option value="active">active</option>
                            <option value="hidden">hidden</option>
                            <option value="deleted">deleted</option>
                          </Select>
                        </td>
                        <td className="p-2">{fmtDate(p.createdAt)}</td>
                        <td className="p-2 flex gap-2 flex-wrap">
                          {isAdmin ? (
                            <>
                              <GhostButton onClick={() => updatePost(p)} disabled={busyId === p.id}>
                                Save
                              </GhostButton>
                              {p.status !== "deleted" ? (
                                <DangerButton onClick={() => softDeletePost(p)} disabled={busyId === p.id}>
                                  Soft delete
                                </DangerButton>
                              ) : (
                                <DangerButton onClick={() => hardDeletePost(p)} disabled={busyId === p.id}>
                                  Hard delete
                                </DangerButton>
                              )}
                            </>
                          ) : (
                            <span className="text-xs text-gray-400">view-only</span>
                          )}
                        </td>
                      </tr>
                    ))}
                    {!filteredPosts.length && (
                      <tr>
                        <td className="p-4 text-gray-500" colSpan={6}>
                          No posts found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {tab === "dedupe" && isAdmin && (
            <DuplicatesPanel
              db={db}
              email={email}
              logActivity={logActivity}
            />
          )}


          {/* Activity log (viewable to all, but you’ll only create via the UI when you act) */}
          {tab === "activity" && isAdmin && <ActivityLogView db={db} />}
        </div>
      </div>
    </div>
  );
}

/* ============ Activity Log View ============ */
function ActivityLogView({ db }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(query(collection(db, "activity_logs"), orderBy("ts", "desc"), limit(200)));
      setRows(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (db) load();
  }, [db]);

  return (
    <Card className="p-6">
      <SectionTitle right={<GhostButton onClick={load}>Refresh</GhostButton>}>Activity Log</SectionTitle>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="p-2">Time</th>
              <th className="p-2">Type</th>
              <th className="p-2">Entity</th>
              <th className="p-2">Entity ID</th>
              <th className="p-2">By</th>
              <th className="p-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-2">{fmtDate(r.ts)}</td>
                <td className="p-2">{r.type}</td>
                <td className="p-2">{r.entity}</td>
                <td className="p-2">{r.entityId}</td>
                <td className="p-2">{r.by || "-"}</td>
                <td className="p-2">{r.note || ""}</td>
              </tr>
            ))}
            {!rows.length && (
              <tr>
                <td className="p-4 text-gray-500" colSpan={6}>
                  No activity yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

/* ============ Duplicates Panel (Hospitals / Doctors / Posts) with Merge + Reinstate ============ */
function DuplicatesPanel({ db, email, logActivity }) {
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(null);

  // grouped results
  const [hGroups, setHGroups] = useState([]); // hospitals
  const [dGroups, setDGroups] = useState([]); // doctors
  const [pGroups, setPGroups] = useState([]); // posts

  // recently deleted (soft)
  const [deletedHospitals, setDeletedHospitals] = useState([]);
  const [deletedDoctors, setDeletedDoctors] = useState([]);
  const [deletedPosts, setDeletedPosts] = useState([]);

  // ---- Normalizers / keys ----
  const norm = (s) => (s ?? "").toString().trim().toLowerCase().replace(/\s+/g, " ");
  const keyHospital = (h) => [norm(h.name), norm(h.city || h.location), norm(h.state || "")].join("|");
  const keyDoctor   = (d) => [norm(d.name), norm(d.specialty || ""), norm(d.hospitalId || "")].join("|");

  // Posts: group by normalized text + hospitalId + doctorId + day-bucket (same text/context/day)
  const dayBucket = (ts) => {
    const d = ts?.toDate?.() ? ts.toDate() : (ts ? new Date(ts) : null);
    if (!d) return "na";
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,"0")}-${String(d.getUTCDate()).padStart(2,"0")}`;
  };
  const keyPost = (p) => [norm(p.text), norm(p.hospitalId || ""), norm(p.doctorId || ""), dayBucket(p.createdAt)].join("|");

  // Build a doc ref from a full path string (works for nested posts/hosp/doctors)
  const docFromPath = (fullPath) => doc(db, ...fullPath.split("/").filter(Boolean));

  // --------- Small helpers (copy/move/merge) ----------
  const copyDocData = async (fromPath, toPath, { merge = true } = {}) => {
    const snap = await getDoc(docFromPath(fromPath));
    if (!snap.exists()) return;
    await setDoc(docFromPath(toPath), snap.data(), { merge });
  };

  const listSub = async (parentPath, sub) => {
    const parts = parentPath.split("/").filter(Boolean);
    const snap = await getDocs(collection(db, ...parts, sub));
    return snap.docs.map(d => ({ id: d.id, path: d.ref.path, data: d.data() }));
  };

  const moveSub = async (fromParentPath, toParentPath, sub) => {
    const items = await listSub(fromParentPath, sub);
    for (const { id, data, path } of items) {
      const toPath = `${toParentPath}/${sub}/${id}`;
      await setDoc(docFromPath(toPath), data, { merge: true });
      await deleteDoc(docFromPath(path));
    }
  };

  const mergeLikes = (a = {}, b = {}) => {
    const likeCount = (a.likeCount || 0) + (b.likeCount || 0);
    const likers = Array.from(new Set([...(a.likers || []), ...(b.likers || [])]));
    return { likeCount, likers };
  };

  // --------- Entity merges ----------
  // Merge HOSPITALS: copy hospital fields to keeper, move doctors (and each doctor's posts + likes), delete source hospital
  const mergeHospitalInto = async (srcHospitalPath, dstHospitalPath) => {
    // copy hospital fields
    await copyDocData(srcHospitalPath, dstHospitalPath, { merge: true });

    // move doctors (and their posts + likes)
    const doctors = await listSub(srcHospitalPath, "doctors");
    for (const d of doctors) {
      const docId = d.id;
      const srcDoctorPath = `${srcHospitalPath}/doctors/${docId}`;
      const dstDoctorPath = `${dstHospitalPath}/doctors/${docId}`;

      await copyDocData(srcDoctorPath, dstDoctorPath, { merge: true });

      const posts = await listSub(srcDoctorPath, "posts");
      for (const p of posts) {
        const srcPostPath = p.path;
        const dstPostPath = `${dstDoctorPath}/posts/${p.id}`;

        // merge counters/likers
        const srcSnap = await getDoc(docFromPath(srcPostPath));
        const dstSnap = await getDoc(docFromPath(dstPostPath));
        if (dstSnap.exists()) {
          const merged = mergeLikes(dstSnap.data(), srcSnap.data());
          await setDoc(docFromPath(dstPostPath), merged, { merge: true });
        } else {
          await setDoc(docFromPath(dstPostPath), srcSnap.data(), { merge: true });
        }

        // move likes subcollection
        await moveSub(srcPostPath, dstPostPath, "likes");

        // delete source post
        await deleteDoc(docFromPath(srcPostPath));
      }

      // delete source doctor
      await deleteDoc(docFromPath(srcDoctorPath));
    }

    // delete source hospital
    await deleteDoc(docFromPath(srcHospitalPath));
    await logActivity?.({ type: "merge", entity: "hospital", entityId: srcHospitalPath, by: email, note: `→ ${dstHospitalPath}` });
  };

  // Merge DOCTORS (same hospital): copy doctor fields to keeper, move posts (+likes), delete source doctor
  const mergeDoctorInto = async (srcDoctorPath, dstDoctorPath) => {
    await copyDocData(srcDoctorPath, dstDoctorPath, { merge: true });

    const posts = await listSub(srcDoctorPath, "posts");
    for (const p of posts) {
      const srcPostPath = p.path;
      const dstPostPath = `${dstDoctorPath}/posts/${p.id}`;

      const srcSnap = await getDoc(docFromPath(srcPostPath));
      const dstSnap = await getDoc(docFromPath(dstPostPath));
      if (dstSnap.exists()) {
        const merged = mergeLikes(dstSnap.data(), srcSnap.data());
        await setDoc(docFromPath(dstPostPath), merged, { merge: true });
      } else {
        await setDoc(docFromPath(dstPostPath), srcSnap.data(), { merge: true });
      }

      await moveSub(srcPostPath, dstPostPath, "likes");
      await deleteDoc(docFromPath(srcPostPath));
    }

    await deleteDoc(docFromPath(srcDoctorPath));
    await logActivity?.({ type: "merge", entity: "doctor", entityId: srcDoctorPath, by: email, note: `→ ${dstDoctorPath}` });
  };

  // Merge POSTS: combine likes; keep keeper text/status/ids; delete source post
  const mergePostInto = async (srcPostPath, dstPostPath) => {
    const srcSnap = await getDoc(docFromPath(srcPostPath));
    const dstSnap = await getDoc(docFromPath(dstPostPath));
    if (!srcSnap.exists() || !dstSnap.exists()) return;

    const merged = mergeLikes(dstSnap.data(), srcSnap.data());
    await setDoc(docFromPath(dstPostPath), merged, { merge: true });

    // union likes subcollection
    const likes = await listSub(srcPostPath, "likes");
    for (const { id, data } of likes) {
      await setDoc(docFromPath(`${dstPostPath}/likes/${id}`), data, { merge: true });
    }

    await deleteDoc(docFromPath(srcPostPath));
    await logActivity?.({ type: "merge", entity: "post", entityId: srcPostPath, by: email, note: `→ ${dstPostPath}` });
  };

  // ---- Reinstate (soft-deleted only) ----
  const reinstate = async (fullPath, label) => {
    setBusy(fullPath);
    try {
      await setDoc(docFromPath(fullPath), { status: "active" }, { merge: true });
      await logActivity?.({ type: "reinstate", entity: label, entityId: fullPath, by: email });
      await scan();
    } finally { setBusy(null); }
  };

  // ---- Scanner (resilient; no orderBy/index required) ----
  const scan = useCallback(async () => {
    setLoading(true);
    try {
      const [hR, dR, pR, hDelR, dDelR, pDelR] = await Promise.allSettled([
        getDocs(collectionGroup(db, "hospitals")),
        getDocs(collectionGroup(db, "doctors")),
        (async () => {
          const arr = [];
          try {
            const cg = await getDocs(collectionGroup(db, "posts"));
            cg.docs.forEach(d => arr.push({ id: d.id, path: d.ref.path, ...d.data() }));
          } catch (e) { console.warn("[Dedupe] posts CG failed:", e); }
          try {
            const top = await getDocs(collection(db, "posts"));
            top.docs.forEach(d => arr.push({ id: d.id, path: d.ref.path, ...d.data() }));
          } catch {}
          return arr;
        })(),
        // deleted (soft) queries
        getDocs(query(collectionGroup(db, "hospitals"), where("status", "==", "deleted"))),
        getDocs(query(collectionGroup(db, "doctors"),   where("status", "==", "deleted"))),
        (async () => {
          const arr = [];
          try {
            const cg = await getDocs(query(collectionGroup(db, "posts"), where("status", "==", "deleted")));
            cg.docs.forEach(d => arr.push({ id: d.id, path: d.ref.path, ...d.data() }));
          } catch {}
          try {
            const top = await getDocs(query(collection(db, "posts"), where("status", "==", "deleted")));
            top.docs.forEach(d => arr.push({ id: d.id, path: d.ref.path, ...d.data() }));
          } catch {}
          return arr;
        })(),
      ]);

      // Groups
      if (hR.status === "fulfilled") {
        const hospitals = hR.value.docs.map(d => ({ id: d.id, path: d.ref.path, ...d.data() }));
        const map = new Map();
        hospitals.forEach(h => {
          const k = keyHospital(h); if (!k) return;
          if (!map.has(k)) map.set(k, []);
          map.get(k).push(h);
        });
        setHGroups([...map.values()].filter(g => g.length > 1));
      } else { console.warn("[Dedupe] hospitals failed:", hR.reason); setHGroups([]); }

      if (dR.status === "fulfilled") {
        const doctors = dR.value.docs.map(d => ({ id: d.id, path: d.ref.path, ...d.data() }));
        const map = new Map();
        doctors.forEach(x => {
          const k = keyDoctor(x); if (!k) return;
          if (!map.has(k)) map.set(k, []);
          map.get(k).push(x);
        });
        setDGroups([...map.values()].filter(g => g.length > 1));
      } else { console.warn("[Dedupe] doctors failed:", dR.reason); setDGroups([]); }

      if (pR.status === "fulfilled") {
        const posts = pR.value;
        const map = new Map();
        posts.forEach(p => {
          const k = keyPost(p); if (!k) return;
          if (!map.has(k)) map.set(k, []);
          map.get(k).push(p);
        });
        setPGroups([...map.values()].filter(g => g.length > 1));
      } else { console.warn("[Dedupe] posts failed:", pR.reason); setPGroups([]); }

      // Deleted lists
      setDeletedHospitals(hDelR.status === "fulfilled" ? hDelR.value.docs.map(d => ({ id: d.id, path: d.ref.path, ...d.data() })) : []);
      setDeletedDoctors(  dDelR.status === "fulfilled" ? dDelR.value.docs.map(d => ({ id: d.id, path: d.ref.path, ...d.data() })) : []);
      setDeletedPosts(    pDelR.status === "fulfilled" ? pDelR.value : []);
    } finally {
      setLoading(false);
    }
  }, [db]);

  useEffect(() => { scan(); }, [scan]);

  // ---- UI ----
  const GroupMergeUI = ({ label, items, onMerge }) => {
    const [keeper, setKeeper] = useState(null);
    return (
      <div className="border rounded-xl p-3 space-y-3">
        <div className="text-xs text-gray-500 mb-1">Select a keeper, then merge each duplicate into it.</div>
        {items.map(x => (
          <div key={x.path} className="flex items-start gap-3 border rounded-xl p-3">
            <input
              type="radio"
              name={`keep-${label}-${items[0]?.path || ""}`}
              onChange={() => setKeeper(x)}
              checked={keeper?.path === x.path}
              className="mt-1"
            />
            <div className="flex-1">
              <div className="text-sm font-semibold">
                {label === "hospital" && (x.name || "(no name)")}
                {label === "doctor"   && (x.name || "(no name)")}
                {label === "post"     && (x.text ? x.text.slice(0, 160) : "(no text)")}
              </div>
              <div className="text-xs text-gray-500">
                {label === "hospital" && <>{(x.city || x.location || "")} {(x.state || "")}</>}
                {label === "doctor" && <>{(x.specialty || "")} {x.hospitalId ? `· hospitalId: ${x.hospitalId}` : ""}</>}
                {label === "post" && <>
                  {x.hospitalId ? `hospitalId: ${x.hospitalId}` : ""}
                  {x.doctorId ? ` · doctorId: ${x.doctorId}` : ""}
                  {x.createdAt ? ` · ${dayBucket(x.createdAt)}` : ""}
                </>}
              </div>
              <div className="text-[11px] text-gray-400 mt-1 break-all">{x.path}</div>
            </div>

            {keeper && keeper.path !== x.path && (
              <div className="flex gap-2">
                <GhostButton
                  onClick={async () => {
                    setBusy(x.path);
                    try {
                      if (label === "hospital")      await mergeHospitalInto(x.path, keeper.path);
                      else if (label === "doctor")    await mergeDoctorInto(x.path,   keeper.path);
                      else if (label === "post")      await mergePostInto(x.path,     keeper.path);
                      await scan();
                    } finally { setBusy(null); }
                  }}
                  disabled={busy === x.path}
                >
                  Merge → keep
                </GhostButton>
                <DangerButton
                  onClick={async () => {
                    setBusy(x.path);
                    try {
                      await deleteDoc(docFromPath(x.path));
                      await logActivity?.({ type: "delete", entity: label, entityId: x.path, by: email, note: "dedupe manual delete" });
                      await scan();
                    } finally { setBusy(null); }
                  }}
                  disabled={busy === x.path}
                >
                  Delete
                </DangerButton>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const Section = ({ title, groups, label }) => (
    <Card className="p-6">
      <SectionTitle
        right={<GhostButton onClick={scan} disabled={loading}>{loading ? "Scanning…" : "Rescan"}</GhostButton>}
      >
        {title} ({groups.length} groups)
      </SectionTitle>

      {groups.length === 0 ? (
        <div className="text-sm text-gray-500">No suspected duplicates.</div>
      ) : (
        <div className="space-y-4">
          {groups.map((grp, i) => (
            <div key={`${label}-${i}`} className="space-y-3">
              <GroupMergeUI
                label={label}
                items={grp}
                onMerge={async (entity, src, dst) => {
                  if (entity === "hospital") return mergeHospitalInto(src, dst);
                  if (entity === "doctor")   return mergeDoctorInto(src, dst);
                  if (entity === "post")     return mergePostInto(src, dst);
                }}
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );

  const DeletedSection = ({ title, items, label }) => (
    <Card className="p-6">
      <SectionTitle>{title}</SectionTitle>
      {items.length === 0 ? (
        <div className="text-sm text-gray-500">No deleted {label}s found.</div>
      ) : (
        <div className="space-y-2">
          {items.map(x => (
            <div key={x.path} className="flex items-start gap-3 border rounded-xl p-3">
              <div className="flex-1">
                <div className="text-sm font-semibold break-all">
                  {label === "hospital" && (x.name || "(no name)")}
                  {label === "doctor"   && (x.name || "(no name)")}
                  {label === "post"     && (x.text ? x.text.slice(0, 160) : "(no text)")}
                </div>
                <div className="text-[11px] text-gray-400 break-all">{x.path}</div>
              </div>
              <GhostButton onClick={() => reinstate(x.path, label)} disabled={busy === x.path}>
                Reinstate
              </GhostButton>
            </div>
          ))}
        </div>
      )}
    </Card>
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Duplicates */}
      <Section title="Hospitals" groups={hGroups} label="hospital" />
      <Section title="Doctors"   groups={dGroups} label="doctor" />
      <Section title="Posts"     groups={pGroups} label="post" />

      {/* Deleted (soft) */}
      <DeletedSection title="Deleted Hospitals" items={deletedHospitals} label="hospital" />
      <DeletedSection title="Deleted Doctors"   items={deletedDoctors}   label="doctor" />
      <DeletedSection title="Deleted Posts"     items={deletedPosts}     label="post" />

      <div className="text-xs text-gray-500">
        <b>Notes:</b> “Merge → keep” copies data into the selected keeper and deletes the source.  
        “Reinstate” only works for <i>soft</i>-deleted items (where we set <code>status: "deleted"</code>).  
        If a doc was hard-deleted, restore from backup or by re-creating it.
      </div>
    </div>
  );
}
