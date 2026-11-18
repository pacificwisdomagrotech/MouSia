import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Console > Project settings > Your apps > Web app se ye values paste karo
const app = initializeApp({
  apiKey:"AIzaSyBfz6vdbnoR8SpuDBAhP4_KScTY8glnaeo",
  authDomain: "mousia-b7f88.firebaseapp.com",
  projectId: "mousia-b7f88",
  appId: "1:1035506563318:web:003c539e0f9e881139d4d7"
});

export const db = getFirestore(app);
export const auth = getAuth(app);
