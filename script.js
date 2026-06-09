import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
setDoc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// REGISTER (MARKETER ONLY)
window.register = async () => {

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const userCred = await createUserWithEmailAndPassword(auth, email, password);

await setDoc(doc(db, "users", userCred.user.uid), {
  name,
  email,
  role: "marketer"
});

alert("Registered Successfully");
window.location = "index.html";
};


// LOGIN (ADMIN + MARKETER ROLE BASED)
window.login = async () => {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const selectedRole = document.getElementById("role").value;

const userCred = await signInWithEmailAndPassword(auth, email, password);

const uid = userCred.user.uid;

const snap = await getDoc(doc(db, "users", uid));
const user = snap.data();

if(user.role === selectedRole){

  if(user.role === "admin"){
    window.location = "admin.html";
  } else {
    window.location = "marketer.html";
  }

} else {
  alert("Role mismatch!");
}

};