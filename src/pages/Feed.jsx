import React, { useState, useEffect, useContext, useRef } from "react"; // Import useRef
import { FirebaseContext } from "../context/FirebaseContext";
import HIPAAThermometer from "../components/HIPAAThermometer";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  getDocs,
  query,
  onSnapshot,
  serverTimestamp,
  setDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { normalizeHospitalName } from "../Variation"; // ✅ Import normalization logic
import { httpsCallable } from "firebase/functions";
import { functions } from "../utils/firebaseConfig"; // Make sure your firebase.js exports this


// ✅ **FIX: Define the callable function outside the component.**
// This ensures it's created only once and doesn't trigger re-renders.
const checkHIPAAFunction = httpsCallable(functions, "checkHIPAA");

// --- Build typed detections for display (NAME / DOB / EMAIL / SSN / PHONE) ---
const buildDetections = (text, flagged = []) => {
  const t = String(text || "");
  const out = new Map(); // type -> Set(values)
  const add = (type, v) => {
    if (!v) return;
    if (!out.has(type)) out.set(type, new Set());
    out.get(type).add(v);
  };

  const emailRe = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
  const ssnRe = /\b\d{3}-\d{2}-\d{4}\b/g;
  const phoneRe = /\b(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]\d{4}\b/g;
  const dobRe = /\b\d{1,2}[\/-]\d{1,2}[\/-](?:\d{2}|\d{4})\b/g;
  const nameRe = /\b[A-Z][a-z]{2,}\s+[A-Z][a-z]{2,}(?:\s+[A-Z][a-z]{2,})*\b/g;

  t.match(emailRe)?.forEach(v => add("EMAIL", v));
  t.match(ssnRe)?.forEach(v => add("SSN", v));
  t.match(phoneRe)?.forEach(v => add("PHONE", v));
  t.match(dobRe)?.forEach(v => add("DOB", v));
  t.match(nameRe)?.forEach(v => add("NAME", v));

  // also sweep LLM phrases for exact substrings we care about
  flagged.forEach(p => {
    if (typeof p !== "string") return;
    const s = p.trim();
    if (s.match(emailRe)) add("EMAIL", s);
    else if (/\b\d{3}-\d{2}-\d{4}\b/.test(s)) add("SSN", s);
    else if (/\b\d{1,2}[\/-]\d{1,2}[\/-](?:\d{2}|\d{4})\b/.test(s)) add("DOB", s);
    else if (/\b(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]\d{4}\b/.test(s)) add("PHONE", s);
    else if (/^[A-Z][a-z]{2,}(?:\s+[A-Z][a-z]{2,})+$/.test(s)) add("NAME", s);
  });

  // order by severity
  const order = ["SSN", "MRN", "EMAIL", "PHONE", "ADDRESS", "NAME", "DOB", "ZIP"];
  const entries = Array.from(out.entries())
    .sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]));

  return entries.map(([type, set]) => ({ type, values: Array.from(set) }));
};


const Feed = () => {

  const { db, currentUser, appId } = useContext(FirebaseContext);
  const hospitalsPath = `artifacts/${appId}/public/data/hospitals`;

  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [newHospital, setNewHospital] = useState("");
  const [newDoctor, setNewDoctor] = useState("");
  const [likes, setLikes] = useState({});
  const [commentInput, setCommentInput] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddHospital, setShowAddHospital] = useState(false);
  const [showAddDoctor, setShowAddDoctor] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);
  const [loadingHospitals, setLoadingHospitals] = useState(true);
  const [loadingDoctors, setLoadingDoctors] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false); // New state for review form visibility

  // ✅ HIPAA state
  const [hipaaScore, setHipaaScore] = useState(0);
  const [hipaaStatus, setHipaaStatus] = useState("Safe");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });
  const [flaggedPhrases, setFlaggedPhrases] = useState([]);

  // Refs for scrolling
  const doctorSectionRef = useRef(null);
  const reviewsSectionRef = useRef(null);

  useEffect(() => {
  console.log("Feed mounted");
  return () => console.log("Feed unmounted");
}, []);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        setLoadingHospitals(true);
        const q = query(collection(db, hospitalsPath));
        const querySnapshot = await getDocs(q);
        const hospitalList = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          hospitalList.push({
            id: doc.id,
            // Store both original and normalized names
            originalName: data.originalName || data.name || '', // Use originalName, or name, or empty string as fallback
            name: normalizeHospitalName(data.name || ''), // This is the normalized name for internal use/sorting
            ...data,
          });
        });
        const sortedList = hospitalList
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort by normalized name
        setHospitals(sortedList);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      } finally {
        setLoadingHospitals(false);
      }
    };
    fetchHospitals();
  }, [db, hospitalsPath]);

  useEffect(() => {
    if (selectedHospital && selectedDoctor) {
      const reviewsRef = collection(
        db,
        hospitalsPath,
        selectedHospital.id,
        "doctors",
        selectedDoctor.id,
        "reviews"
      );
      const unsubscribe = onSnapshot(reviewsRef, (snapshot) => {
        const reviewsData = [];
        snapshot.forEach((doc) => {
          reviewsData.push({ id: doc.id, ...doc.data() });
        });
        setReviews(
          reviewsData.sort(
            (a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0)
          )
        );
      });
      return () => unsubscribe();
    }
  }, [db, selectedHospital, selectedDoctor, hospitalsPath]);

  const handleAddHospital = async () => {
    if (!newHospital.trim()) return;
    try {
      const original = newHospital.trim();
      const normalized = normalizeHospitalName(original);
      const docRef = await addDoc(collection(db, hospitalsPath), {
        name: normalized, // Store normalized name for consistent querying/internal logic
        originalName: original, // Store original name for display
        createdAt: serverTimestamp(),
      });
      setHospitals([
        ...hospitals,
        { id: docRef.id, name: normalized, originalName: original },
      ]);
      setNewHospital("");
      setShowAddHospital(false);
    } catch (error) {
      console.error("Error adding hospital:", error);
    }
  };

  const handleAddDoctor = async () => {
    if (!newDoctor.trim() || !selectedHospital) return;
    try {
      // Prepend "Dr." to the original name
      const originalDoctorName = `Dr. ${newDoctor.trim()}`;
      const normalizedDoctorName = normalizeHospitalName(originalDoctorName); // Normalize for consistency
      const doctorRef = doc(
        db,
        hospitalsPath,
        selectedHospital.id,
        "doctors",
        uuidv4()
      );
      await setDoc(doctorRef, {
        name: normalizedDoctorName, // Store normalized name for internal use
        originalName: originalDoctorName, // Store original name for display
        createdAt: serverTimestamp(),
      });
      setDoctors([...doctors, { id: doctorRef.id, name: normalizedDoctorName, originalName: originalDoctorName }]);
      setNewDoctor("");
      setShowAddDoctor(false);
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  const handleSelectHospital = async (hospital) => {
  setSelectedHospital(hospital);
  setSelectedDoctor(null);
  setDoctors([]);
  try {
    setLoadingDoctors(true);
    const q = query(collection(db, hospitalsPath, hospital.id, "doctors"));
    const querySnapshot = await getDocs(q);
    const doctorList = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      doctorList.push({
        id: doc.id,
        originalName: data.originalName || data.name || '', // Use originalName, or name, or empty string as fallback
        name: normalizeHospitalName(data.name || ''), // Normalized name for internal use
        ...data,
      });
    });
    setDoctors(doctorList);

    // ✅ Scroll to doctor section after render
    requestAnimationFrame(() => {
      if (doctorSectionRef.current) {
        doctorSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // ✅ Add mobile-only reveal animation
        if (window.innerWidth <= 768) {
          doctorSectionRef.current.classList.add('show');
        }
      }
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);
  } finally {
    setLoadingDoctors(false);
  }
};

const handleSelectDoctor = (doctor) => {
  setSelectedDoctor(doctor);

  // ✅ Scroll to reviews section after render
  requestAnimationFrame(() => {
    if (reviewsSectionRef.current) {
      reviewsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // ✅ Add mobile-only reveal animation
      if (window.innerWidth <= 768) {
        reviewsSectionRef.current.classList.add('show');
      }
    }
  });
};

// ✅ **FIX: Added robust response handling**
useEffect(() => {
  const text = newReview.trim();

  // Skip empty/very short input
  if (text.length < 3) {
    setHipaaScore(0);
    setHipaaStatus("Safe");
    setFlaggedPhrases([]);
    return;
  }

  const ctrl = new AbortController();
  const timer = setTimeout(async () => {
    try {
      if (ctrl.signal.aborted) return;

      // --- ADD: log what you're sending (no PHI content, just length) ---
      console.log("[HIPAA FE] calling checkHIPAA", { len: text.length });

      const res = await checkHIPAAFunction({ text });

      // --- ADD: log raw callable result wrapper ---
      console.log("[HIPAA FE] raw callable result:", res);

      let data = res?.data;
      if (typeof data === "string") {
        try { data = JSON.parse(data); } catch { data = null; }
      }

      // --- ADD: log server-side debug info (version, path, timings, regex types) ---
      console.log("[HIPAA FE] server debug:", data?.debug);

      const score = Number(data?.score ?? 0);
      const status = typeof data?.status === "string" ? data.status : "Error";
      const flagged = Array.isArray(data?.flagged_phrases) ? data.flagged_phrases : [];

      setHipaaScore(score);
      setHipaaStatus(status);
      setFlaggedPhrases(flagged);
    } catch (err) {
      if (err?.name === "AbortError") return;
      console.error("HIPAA check error:", err);
      setHipaaScore(0);
      setHipaaStatus("Error");
      setFlaggedPhrases([]);
    }
  }, 700);

  return () => {
    ctrl.abort();
    clearTimeout(timer);
  };
}, [newReview]);



  const handleAddReview = async () => {
    if (!newReview.trim() || !selectedDoctor || !selectedHospital) return;
    try {
      const reviewsRef = collection(
        db,
        hospitalsPath,
        selectedHospital.id,
        "doctors",
        selectedDoctor.id,
        "reviews"
      );
      await addDoc(reviewsRef, {
        text: newReview.trim(),
        user: currentUser ? currentUser.displayName || "Anonymous" : "Anonymous",
        userId: currentUser?.uid || null,
        timestamp: serverTimestamp(),
        likes: [],
        comments: [],
      });
      setNewReview("");
      setShowReviewForm(false); // Collapse form after submission
      // Scroll to reviews section after adding review
      if (reviewsSectionRef.current) {
        reviewsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleLikeReview = async (reviewId) => {
    try {
      const reviewDoc = doc(
        db,
        hospitalsPath,
        selectedHospital.id,
        "doctors",
        selectedDoctor.id,
        "reviews",
        reviewId
      );
      const hasLiked = likes[reviewId];
      await updateDoc(reviewDoc, {
        likes: hasLiked ? arrayRemove(currentUser.uid) : arrayUnion(currentUser.uid),
      });
      setLikes({ ...likes, [reviewId]: !hasLiked });
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  const handleAddComment = async (reviewId) => {
    const commentText = commentInput[reviewId];
    if (!commentText || !commentText.trim()) return;
    try {
      const reviewDoc = doc(
        db,
        hospitalsPath,
        selectedHospital.id,
        "doctors",
        selectedDoctor.id,
        "reviews",
        reviewId
      );
      await updateDoc(reviewDoc, {
        comments: arrayUnion({
          text: commentText.trim(),
          user: currentUser ? currentUser.displayName || "Anonymous" : "Anonymous",
          timestamp: new Date().toISOString(),
        }),
      });
      setCommentInput({ ...commentInput, [reviewId]: "" });
      // Removed scroll to reviews section after adding comment
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const filteredHospitals = hospitals
    .filter((h) => (h.name ?? '').toLowerCase().includes(searchTerm.toLowerCase())) // Filter by normalized name
    .slice(0, visibleCount);

  return (
    <div className="feed-container">
      {/* Hospital Section */}
      <div className="feed-card">
        <h1 className="feed-title">Find Your Hospital</h1>
        <div className="search-row">
          <input
            type="text"
            placeholder="Search for a hospital..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">Search Hospital</button>
        </div>
        {/* Updated Add Hospital Button */}
        <div className="text-center mt-4"> {/* Added a div for centering */}
          <button
            onClick={() => setShowAddHospital(!showAddHospital)}
            className="search-btn w-fit mx-auto block"
            style={{ backgroundColor: 'white', color: '#CC5500' }}
          >
            Add Hospital
          </button>
        </div>
        {showAddHospital && (
          <div className="add-hospital-form">
            <input
              type="text"
              placeholder="Enter hospital name"
              value={newHospital}
              onChange={(e) => setNewHospital(e.target.value)}
              className="search-input flex-grow"
            />
            <button onClick={handleAddHospital} className="orange-btn">
              Save
            </button>
          </div>
        )}
        <div className="hospital-box">
          <p className="hospital-label">Hospitals with reviews:</p>
          {loadingHospitals ? (
            <div className="spinner"></div>
          ) : (
            <>
              <div className="hospital-tags">
                {filteredHospitals.map((hospital) => (
                  <button
                    key={hospital.id}
                    onClick={() => handleSelectHospital(hospital)}
                    className="hospital-pill"
                  >
                    {hospital.name} {/* Display normalized name */}
                  </button>
                ))}
              </div>
              {visibleCount < hospitals.length && (
                <button
                  className="load-more-btn"
                  onClick={() => setVisibleCount((prev) => prev + 20)}
                >
                  Load More Hospitals
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Doctor Section */}
      {selectedHospital && (
        <div className="feed-card" ref={doctorSectionRef}> {/* Attach ref here */}
          <h2 className="feed-title">Select a Doctor</h2>
          {/* Updated Add Doctor Button */}
          <div className="text-center mt-4"> {/* Added a div for centering */}
            <button
              onClick={() => setShowAddDoctor(!showAddDoctor)}
              className="search-btn w-fit mx-auto block"
              style={{ backgroundColor: 'white', color: '#CC5500' }}
            >
              Add Doctor
            </button>
          </div>
          {showAddDoctor && (
            <div className="add-hospital-form">
              <input
                type="text"
                placeholder="Enter doctor name"
                value={newDoctor}
                onChange={(e) => setNewDoctor(e.target.value)}
                className="search-input flex-grow"
              />
              <button onClick={handleAddDoctor} className="orange-btn">
                Save
              </button>
            </div>
          )}
          <div className="hospital-box">
            <p className="hospital-label">Doctors:</p>
            {loadingDoctors ? (
              <div className="spinner"></div>
            ) : (
              <div className="hospital-tags">
                {doctors.map((doctor) => (
                  <button
                    key={doctor.id}
                    onClick={() => handleSelectDoctor(doctor)}
                    className="hospital-pill"
                  >
                    {doctor.name} {/* Display normalized doctor name */}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reviews Section (combined) */}
      {selectedDoctor && (
        <div className="feed-card space-y-6" ref={reviewsSectionRef}> {/* Attach ref here */}
          <h2 className="feed-title">
            Here's The Tea on <span style={{ color: '#CC5500' }}>{selectedDoctor.name}</span>
          </h2>
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="search-btn w-fit mx-auto block" // Applied search-btn style, reduced width, and centered
            style={{ backgroundColor: 'white', color: '#CC5500' }} // Inline style for white background and burnt orange text
          >
            {showReviewForm ? "Hide Review Form" : "Psss... Click Me To Spill Some Tea!"}
          </button>

          {showReviewForm && (
            <div className="mt-6"> {/* Added margin-top for spacing */}
                <h3 className="feed-title" style={{ color: '#CC5500', fontSize: '1.5rem' }}>
                Spill The Tea On <span style={{ color: '#CC5500' }}>{selectedDoctor.name}</span>
                </h3>
                <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Share your thoughts..."
                className="search-input w-full h-32 mb-4"
                />
                
                {/* ✅ Insert HIPAA Thermometer here */}
                <HIPAAThermometer score={hipaaScore} status={hipaaStatus} />

                {(() => {
                  const detections = buildDetections(newReview, flaggedPhrases);
                  if (detections.length === 0) return null;
                  return (
                    <div className="p-4 rounded-md bg-red-50 border border-red-300 text-red-800 mb-6">
                      <p className="font-semibold mb-2">⚠️ Potential PHI Detected</p>
                      <ul className="space-y-1">
                        {detections.flatMap(({ type, values }) =>
                          values.map((v, i) => (
                            <li key={`${type}-${i}`}>
                              <span className="font-semibold uppercase">{type}:</span>{" "}
                              <span className="font-mono break-all">{v}</span>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  );
                })()}

                
                <button 
                  onClick={handleAddReview} 
                  className="orange-btn mx-auto block mt-6"> {/* Centered button */}
                Submit Tea
                </button>
            </div>
            )}

          {reviews.length > 0 && (
            <div className="mt-6"> {/* Added margin-top for spacing */}
              {reviews.map((review) => (
                <div key={review.id} className="feed-card">
                  <p className="text-lg mb-3">{review.text}</p>
                  <button
                    onClick={() => handleLikeReview(review.id)}
                    className="add-hospital-btn mb-4"
                  >
                    {likes[review.id] ? "Unlike" : "Like"} ({review.likes?.length || 0})
                  </button>
                  <div>
                    <h4 className="font-semibold mb-2">Comments</h4>
                    <ul className="mb-3 space-y-1">
                      {review.comments?.map((c, idx) => (
                        <li key={idx} className="comment-bubble"> {/* Added class for styling */}
                          {c.text} {/* Removed username */}
                        </li>
                      ))}
                    </ul>
                    <div className="add-hospital-form">
                      <input
                        type="text"
                        placeholder="Add a comment"
                        value={commentInput[review.id] || ""}
                        onChange={(e) =>
                          setCommentInput({
                            ...commentInput,
                            [review.id]: e.target.value,
                          })
                        }
                        className="search-input flex-grow"
                      />
                      <button
                        onClick={() => handleAddComment(review.id)}
                        className="orange-btn"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
<style>{`
  .feed-container { max-width: 1125px; margin: 2rem auto; padding: 0 1rem; }
  .feed-card { background: #fff; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 10px rgba(0,0,0,0.05); margin-bottom: 2rem; }
  .feed-title { font-size: 1.8rem; font-weight: 700; color: #222; text-align: center; margin-bottom: 1.5rem; }
  .search-row { display: flex; gap: 0.75rem; margin-bottom: 0.5rem; }
  .search-input { flex: 1; padding: 0.75rem 1rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem; }
  .search-btn { background-color: #FFDEB5; color: #333; font-weight: 600; padding: 0.75rem 1.25rem; border-radius: 16px; box-shadow: 0 3px 6px rgba(0,0,0,0.1); transition: all 0.3s ease; }
  .search-btn:hover { background-color: #f5cda0; transform: scale(1.05); }
  .add-link { text-align: center; color: #555; margin: 0.5rem 0 1rem; }
  .add-hospital-btn { color: #CC5500; font-weight: 600; background: none; border: none; cursor: pointer; }
  .add-hospital-form { display: flex; gap: 0.75rem; margin-top: 1rem; }
  .hospital-box { margin-top: 1.5rem; padding: 1rem; border: 1px solid #e5e5e5; border-radius: 8px; background: #fafafa; }
  .hospital-label { font-weight: 600; color: #333; margin-bottom: 0.75rem; }
  .hospital-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .hospital-pill { background: #f1f1f1; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.9rem; color: #333; border: none; cursor: pointer; transition: all 0.3s ease; }
  .hospital-pill:hover { background: #CC5500; color: #fff; transform: scale(1.05); }
  .orange-btn { background-color: #CC5500; color: white; font-weight: 600; padding: 0.75rem 1.25rem; border-radius: 8px; box-shadow: 0 3px 6px rgba(204,85,0,0.3); transition: background 0.3s ease; }
  .orange-btn:hover { background-color: #a84400; }
  .load-more-btn { margin-top: 1rem; background: #eee; border: none; padding: 0.75rem; width: 100%; border-radius: 8px; font-weight: 600; color: #333; cursor: pointer; transition: background 0.3s ease; }
  .load-more-btn:hover { background: #ddd; }
  .spinner {
      width: 32px;
      height: 32px;
      border: 4px solid #ccc;
      border-top-color: #CC5500;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 1rem auto;
  }
  @keyframes spin {
      to { transform: rotate(360deg); }
  }
  .comment-bubble {
      background-color: white;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      margin-bottom: 0.5rem;
  }
  .feed-card {
      scroll-margin-top: 100px;
  }

  /* ✅ Mobile smooth reveal animation */
  @media (max-width: 768px) {
      .smooth-reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .smooth-reveal.show {
      opacity: 1;
      transform: translateY(0);
      }
  }

  /* ✅ Mobile Responsive Overrides */
  @media (max-width: 768px) {
    .feed-container {
      padding: 0 0.75rem;
    }
    .feed-card {
      width: 95%;
      margin: 1rem auto;
      padding: 1.25rem;
    }
    .feed-title {
      font-size: clamp(1.3rem, 5vw, 1.8rem);
      line-height: 1.3;
    }
    .search-input {
      font-size: 0.95rem;
      padding: 0.6rem 0.8rem;
    }
    .search-row {
      flex-direction: column;
      gap: 0.5rem;
    }
    .search-btn {
      width: 100%;
      text-align: center;
      padding: 0.65rem;
    }
    .hospital-tags {
      justify-content: center;
      gap: 0.4rem;
    }
    .hospital-pill {
      font-size: 0.85rem;
      padding: 0.4rem 0.8rem;
    }
    .feed-card p {
      font-size: clamp(0.9rem, 4vw, 1rem);
      line-height: 1.5;
    }
  }
`}</style>

    </div>
  );
};

export default Feed;
