// Import the functions you need from the SDKs you need;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth, signOut  } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

signOut(auth).then(() => {
  // Sign-out successful.
  window.location.replace('login.html');
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
        icon: 'warning',
        title: 'Error!' + '<br>' + errorCode,
        text: errorMessage,
      })
  });

