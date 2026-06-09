import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_wPvyNitrXT55sBoEbl9t40jPME0ZXd0",
  authDomain: "reporttrack-e6fa8.firebaseapp.com",
  projectId: "reporttrack-e6fa8",
  storageBucket: "reporttrack-e6fa8.firebasestorage.app",
  messagingSenderId: "737341518076",
  appId: "1:737341518076:web:fc0110cafb380c15986779",
  measurementId: "G-4DVW6BTN5W"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);