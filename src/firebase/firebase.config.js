// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAW7IpJn0O-A0RGvLCaDVMdvIsLsx-RjsA",
	authDomain: "treasure-tales-jewellery-shop.firebaseapp.com",
	projectId: "treasure-tales-jewellery-shop",
	storageBucket: "treasure-tales-jewellery-shop.appspot.com",
	messagingSenderId: "732178647327",
	appId: "1:732178647327:web:ce6bf25d22011596ee082a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
