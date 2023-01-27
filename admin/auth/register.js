// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

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
const db = getDatabase();

element.addEventListener("click", register);
function register() {

  // Show AutoClose Alert
    let timerInterval
    Swal.fire({
  title: 'ඔබව පද්ධතියට ලියාපදිංචි කරමින් පවතී...',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}); // End of AutoClose Alert


// Get Values
var name = document.getElementById('name').value;
var number = document.getElementById('number').value;
var id = document.getElementById('id').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var date = Date()

//Start of Register Function

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    set(ref(db, 'Teachers/' + id),{
      name: name,
      number: number,
      id: id,
      email: email,
      last_login: date
    }).then(() => {
      // Data saved successfully!
      displayName();
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
}

function displayName() {
  if (firebase.auth().currentUser != null) {
    firebase.auth().currentUser.updateProfile({
        displayName: document.getElementById("name").value
    }).then(function () {
        console.log("Updated");
    }, function (error) {
        console.log(error);
    });
}
}