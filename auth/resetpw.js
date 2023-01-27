// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

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

element.addEventListener("click", resetpw);
function resetpw() {

  // Show AutoClose Alert
    let timerInterval
    Swal.fire({
  title: 'පද්ධතිය හා සම්බන්ධ වෙමින් පවතී...',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}) // End of AutoClose Alert


// Get Values
var id = document.getElementById('id').value;

const db = getDatabase();
const starCountRef = ref(db, 'Teachers/' + id + '/email');
onValue(starCountRef, (snapshot) => {
  var email = snapshot.val();
  console.log(email);
  //Start of Password Resetting Function

  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    Swal.fire(
        'මුරපදය නැවත් පිහිටුවන ලදි!',
        'මුරපදය යළි පිහිටුවීමේ විද්‍යුත් තැපෑල ඔබගේ ඊ-මේල් ගිණුම වෙත යවා ඇත',
        'success'
      )
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
})};