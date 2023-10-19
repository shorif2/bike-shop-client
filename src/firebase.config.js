// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6yUYA3J4XuIQIKuo5_Kmv8Sb37RKgDqU",
  authDomain: "technology-today-90fc0.firebaseapp.com",
  projectId: "technology-today-90fc0",
  storageBucket: "technology-today-90fc0.appspot.com",
  messagingSenderId: "447695776033",
  appId: "1:447695776033:web:d1d4261804f4036bc3f660"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth