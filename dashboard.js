import { db } from "./firebase-config.js";
import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Load dashboard stats
async function loadStats() {

const reportsSnap = await getDocs(collection(db, "reports"));

let total = 0;
let pending = 0;
let approved = 0;

reportsSnap.forEach(doc => {
const data = doc.data();
total++;

if (data.status === "Pending") pending++;
if (data.status === "Approved") approved++;
});

document.getElementById("totalReports").innerText = total;
document.getElementById("pendingReports").innerText = pending;
document.getElementById("approvedReports").innerText = approved;
}

// Load recent reports (Admin)
async function loadRecentReports() {

const snap = await getDocs(collection(db, "reports"));

let html = "";

snap.forEach(doc => {
const d = doc.data();

html += `
<tr class="border-b">
<td class="p-2">${d.title}</td>
<td class="p-2">${d.status}</td>
<td class="p-2">${new Date().toLocaleDateString()}</td>
</tr>
`;
});

document.getElementById("recentReports").innerHTML = html;
}

// Logout
window.logoutUser = async function () {
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { auth } from "./firebase-config.js";

await signOut(auth);
window.location.href = "login.html";
};

// Run
loadStats();
loadRecentReports();