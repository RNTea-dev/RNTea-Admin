// src/lib/trackEvent.js
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

/**
 * Append an event to /events. Never throws (so product UX isn't blocked).
 *
 * @param {Firestore} db
 * @param {{
 *   type: string,                      // e.g. "post.created", "doctor.updated"
 *   actorId?: string|null,
 *   actorEmail?: string|null,
 *   target: {
 *     collection: "hospitals"|"doctors"|"posts"|"comments"|"likes"|"merge"|"reinstate"|"other",
 *     id?: string|null,
 *     path?: string,                   // full Firestore path of the primary doc
 *     hospitalId?: string|null,
 *     doctorId?: string|null,
 *     postId?: string|null,
 *   },
 *   meta?: Record<string, any>         // small extra fields (numbers/short strings)
 * }} payload
 */
export async function trackEvent(db, payload) {
  try {
    await addDoc(collection(db, "events"), {
      ts: serverTimestamp(),
      ...payload,
    });
  } catch (e) {
    // swallow errors – logging only
    if (import.meta?.env?.DEV) console.warn("[trackEvent] failed:", e);
  }
}
