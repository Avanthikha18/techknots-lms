// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh-NqNTk4Xrn3DGuitP-56dzHXTAQo7ps",
  authDomain: "techknots-lms.firebaseapp.com",
  projectId: "techknots-lms",
  storageBucket: "techknots-lms.firebasestorage.app",
  messagingSenderId: "742713793921",
  appId: "1:742713793921:web:5b76be5e35ced1da6c9c80",
  measurementId: "G-85CP156SJB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Functions
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithGitHub = () => signInWithPopup(auth, githubProvider);
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export { auth };
