// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI_j6_5LqsH4trYn0ejGXmCZklLXMQ8hQ",
  authDomain: "reactapp-b4694.firebaseapp.com",
  projectId: "reactapp-b4694",
  storageBucket: "reactapp-b4694.appspot.com",
  messagingSenderId: "464239629633",
  appId: "1:464239629633:web:2f3fe365451b7d367e7dc0"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
 app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const auth = firebase.auth()


export {auth};

