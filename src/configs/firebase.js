// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDacnwz4JwznPSJY7FLC_RgjU5-Lg7SLAM",
  authDomain: "password-hackathon.firebaseapp.com",
  projectId: "password-hackathon",
  storageBucket: "password-hackathon.appspot.com",
  messagingSenderId: "975303955647",
  appId: "1:975303955647:web:fab143a999e2a2987fe20a",
  measurementId: "G-09ND8S9XJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
