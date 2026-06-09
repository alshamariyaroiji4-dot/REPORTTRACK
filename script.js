import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
setDoc,
getDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* Register Marketer */

window.registerMarketer = async () => {

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try {

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

await setDoc(
doc(db,"users",userCredential.user.uid),
{
name:name,
email:email,
role:"marketer"
}
);

alert("Registration Successful");

window.location="index.html";

}
catch(error){

alert(error.message);

}

};

/* Login */

window.loginUser = async () => {

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const selectedRole =
document.getElementById("role").value;

try{

const userCredential =
await signInWithEmailAndPassword(
auth,
email,
password
);

const uid =
userCredential.user.uid;

const docSnap =
await getDoc(
doc(db,"users",uid)
);

const userData =
docSnap.data();

if(userData.role === selectedRole){

window.location =
"dashboard.html";

}else{

alert("Wrong Role Selected");

}

}
catch(error){

alert(error.message);

}

};