import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const auth = getAuth(app);

window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registration Successful");
      window.location = "index.html";
    })
    .catch(error => {
      alert(error.message);
    });
};

window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful");
      window.location = "dashboard.html";
    })
    .catch(error => {
      alert(error.message);
    });
};