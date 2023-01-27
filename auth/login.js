// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, update, ref, onValue } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

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

element.addEventListener("click", login);
function login() {

  // Show AutoClose Alert
    let timerInterval
    Swal.fire({
  title: 'ඔබව පද්ධතියට ඇතුළත් කරමින් පවතී...',
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
var password = document.getElementById('password').value;
var date = Date()
//Get User email
const db = getDatabase();
const starCountRef = ref(db, 'Teachers/' + id + '/email');
onValue(starCountRef, (snapshot) => {
  var email = snapshot.val();
  console.log(email);
  //Start of Login Function

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
  update(ref(db, 'Teachers/' + id),{
    last_login: date
  }).then(() => {
    // Data saved successfully!
    window.location.replace('index.html');
  })
  .catch((error) => {
    // The write failed...
    console.log(error);
    window.location.replace('index.html');
  });
})

.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  Swal.fire({
      icon: 'warning',
      title: 'Error!' + '<br>' + errorCode,
      text: errorMessage,
    })
});
});
}