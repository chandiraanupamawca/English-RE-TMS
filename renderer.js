// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var firebase = require("firebase-admin");
var serviceAccount = require(__dirname+"/private/cre.json");
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://english-re-learning-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "english-re-learning.appspot.com"
  });
;