// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWyb8vE2p7jHm7s502slDEOsqscaauL7s",
  authDomain: "aimentor-59b08.firebaseapp.com",
  projectId: "aimentor-59b08",
  storageBucket: "aimentor-59b08.appspot.com",
  messagingSenderId: "79783555551",
  appId: "1:79783555551:web:82d18ade760b7c79c3d46a",
  measurementId: "G-RP7HKSPVJX",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const analytics = getAnalytics(app);

export { messaging, getToken, onMessage, analytics };
