/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

const firebaseConfig = {
  apiKey: "AIzaSyCg716zYeuSWH8lOMnkJF1FankbYTTGtEg",
  authDomain: "english-re-learning.firebaseapp.com",
  databaseURL: "https://english-re-learning-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "english-re-learning",
  storageBucket: "english-re-learning.appspot.com",
  messagingSenderId: "1073532461163",
  appId: "1:1073532461163:web:c6965b2ca43cf0108e512e"
};

firebase.initializeApp(firebaseConfig);


// STDB
		
var   st =  firebase.initializeApp({
  apiKey: "AIzaSyDPCUg-hvQACCQHfZm0tdayoz90041bhUk",
  authDomain: "english-re-edu.firebaseapp.com",
  databaseURL: "https://english-re-edu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "english-re-edu",
  storageBucket: "english-re-edu.appspot.com",
  messagingSenderId: "914920752033",
  appId: "1:914920752033:web:c69653d09be6e057d401e0",
  measurementId: "G-W8JKX9LRXG"
}, 'secondary');
st.auth().onAuthStateChanged((user) => {
	if(user){

	} else {
		console.log('signOut')
		Swal.fire({
			icon:"warning",
			title:"Additional Verification Required!",
			html:'<button class="btn btn-dark" onclick="opengo()"> <span style="font-size:15px ;"><i class="bx bxl-google "></i></span> Sign with Google</button>',
			showConfirmButton:false,
			allowEscapeKey:false,
			allowOutsideClick:false,
			allowEnterKey:false
		})
	}
})

function opengo(){
	var provider = new firebase.auth.GoogleAuthProvider();
  st.auth().useDeviceLanguage();
  provider.setCustomParameters({
  'allow_signup': 'false'
});
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

  st.auth()
  .signInWithPopup(provider)
  .then((result) => {
location.reload()
    /** @type {firebase.auth.OAuthCredential} */

    
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;})
}
		

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID =
    'YOUR_OAUTH_CLIENT_ID';
