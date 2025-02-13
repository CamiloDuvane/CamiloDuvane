// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgR2dt428kGYnlVeDFhzDfL7aDrPvd2_s",
  authDomain: "cwd2025-a050d.firebaseapp.com",
  databaseURL: "https://cwd2025-a050d-default-rtdb.firebaseio.com",
  projectId: "cwd2025-a050d",
  storageBucket: "cwd2025-a050d.firebasestorage.app",
  messagingSenderId: "187470777488",
  appId: "1:187470777488:web:1964c6c3a40b053c119c15",
  measurementId: "G-TDLMHMHB3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
