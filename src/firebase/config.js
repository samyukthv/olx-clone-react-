
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxxkmvG1On4FfgCFQiuniHWptOuaxk9zY",
    authDomain: "olx-clone-e2f58.firebaseapp.com",
    projectId: "olx-clone-e2f58",
    storageBucket: "olx-clone-e2f58.appspot.com",
    messagingSenderId: "498751707554",
    appId: "1:498751707554:web:2f1deeff0cd50fe5dfbafb",
    measurementId: "G-C2GFB5CYFD"
  };



  export default  firebase.initializeApp(firebaseConfig)


