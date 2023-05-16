// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzoE95iXbL7U9LtktKe1FHrRAJm0TnE6E",
  authDomain: "booking-project-2a95a.firebaseapp.com",
  projectId: "booking-project-2a95a",
  storageBucket: "booking-project-2a95a.appspot.com",
  messagingSenderId: "683506517827",
  appId: "1:683506517827:web:6c3d99680fbea5601c11f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};

