import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export default function SignIn() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const loginEmail = async (e) => {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      await signInWithEmailAndPassword(auth, email.trim(), pw);
    } catch (e) {
      setErr(e.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  const loginGoogle = async () => {
    setBusy(true);
    setErr("");
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (e) {
      setErr(e.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Sign In</h1>
        {err && <div className="mb-3 text-sm text-red-600">{err}</div>}
        <form onSubmit={loginEmail} className="space-y-3">
          <input
            className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            type="email" placeholder="Email" autoComplete="username"
            value={email} onChange={e=>setEmail(e.target.value)}
          />
          <input
            className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            type="password" placeholder="Password" autoComplete="current-password"
            value={pw} onChange={e=>setPw(e.target.value)}
          />
          <button
            type="submit" disabled={busy}
            className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white hover:shadow disabled:opacity-50"
          >
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-500">or</div>

        <button
          onClick={loginGoogle} disabled={busy}
          className="w-full px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
        >
          Continue with Google
        </button>

        <div className="mt-4 text-xs text-gray-500">
          Trouble signing in? Ask an owner to add you in Firebase Auth and (optionally) give you the <code>admin</code> claim.
        </div>
      </div>
    </div>
  );
}
