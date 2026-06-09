import { auth, db }
from "./firebase-config.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
setDoc,
getDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// REGISTER

const registerBtn =
document.getElementById("registerBtn");

if(registerBtn){

registerBtn.addEventListener("click", async ()=>{

try{

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const role =
document.getElementById("role").value;

if(
name === "" ||
email === "" ||
password === ""
){
alert("Please fill all fields");
return;
}

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

const uid =
userCredential.user.uid;

await setDoc(
doc(db,"users",uid),
{
name:name,
email:email,
role:role,
createdAt:new Date()
}
);

alert("Registration Successful");

window.location.href =
"login.html";

}
catch(error){

alert(error.message);

}

});

}


// LOGIN

const loginBtn =
document.getElementById("loginBtn");

if(loginBtn){

loginBtn.addEventListener("click", async ()=>{

try{

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const userCredential =
await signInWithEmailAndPassword(
auth,
email,
password
);

const uid =
userCredential.user.uid;

const userRef =
doc(db,"users",uid);

const userSnap =
await getDoc(userRef);

if(userSnap.exists()){

const userData =
userSnap.data();

if(userData.role === "admin"){

window.location.href =
"admin-dashboard.html";

}
else{

window.location.href =
"marketer-dashboard.html";

}

}

}
catch(error){

alert(error.message);

}

});

}



// LOGOUT FUNCTION

window.logoutUser =
async function(){

try{

await signOut(auth);

alert("Logged Out");

window.location.href =
"login.html";

}
catch(error){

alert(error.message);

}

}