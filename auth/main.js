import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8BVDvqS5pnoic3OJiJqlPte7jMRYRO2Q",
  authDomain: "login-app-f29fc.firebaseapp.com",
  databaseURL: "https://login-app-f29fc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-app-f29fc",
  storageBucket: "login-app-f29fc.appspot.com",
  messagingSenderId: "538893914347",
  appId: "1:538893914347:web:84cabbb5ae73f7e3cbeeae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const user = auth.currentUser;
if (user == null) {
    console.log('Hi')
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}