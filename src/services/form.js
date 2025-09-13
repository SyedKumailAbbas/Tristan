// src/services/forms.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config.js";
import { serverTimestamp } from "firebase/firestore";
export async function submitForm(data) {
  const ref = collection(db, "Form");
  const docRef = await addDoc(ref, { ...data, createdAt: Date.now() });
  return docRef.id;
}

export async function submitNewsletter(data) {
  // Trim & normalize before sending
  const payload = {
    fname: data.fname?.trim(),
    lname: data.lname?.trim(),
    email: data.email?.trim().toLowerCase(),
    createdAt: serverTimestamp(),
  };

  // Basic guard (all fields required)
  if (!payload.fname || !payload.lname || !payload.email) {
    throw new Error("All fields are required.");
  }

  const ref = collection(db, "NewsLetter");
  try {
    const docRef = await addDoc(ref, payload);
  } catch (e) {
    console.error("Firestore write failed:", e.code, e.message);
  }
  return docRef.id;
}
