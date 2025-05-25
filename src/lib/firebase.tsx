import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Don't import analytics directly here

const firebaseConfig = {
  apiKey: "AIzaSyD5oJoi9muwrn9c96MLkVrLv-M7G--kkLk",
  authDomain: "auth-e9325.firebaseapp.com",
  projectId: "auth-e9325",
  storageBucket: "auth-e9325.firebasestorage.app",
  messagingSenderId: "33472507836",
  appId: "1:33472507836:web:c153a7e7d65689a6bf45b9",
  measurementId: "G-N0JPMDLLLY",
};

const app = initializeApp(firebaseConfig);

// Only call getAnalytics if window is defined (client-side)
if (typeof window !== 'undefined') {
  import("firebase/analytics").then(({ getAnalytics }) => {
    getAnalytics(app);
  });
}


const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { db };
