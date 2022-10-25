// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf0_jfBQO3gRXHwr6ycATc79XY-NO_O-M",
  authDomain: "online-education-client.firebaseapp.com",
  projectId: "online-education-client",
  storageBucket: "online-education-client.appspot.com",
  messagingSenderId: "347805784315",
  appId: "1:347805784315:web:2198836dcec02a6d52b85e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;