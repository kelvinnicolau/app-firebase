// import firebase from 'firebase/app';
// import 'firebase/firestore';

// let firebaseConfig = {
//     apiKey: "AIzaSyANtIMU0bvipvNAWnoKs2xmq-q0Lvc8bdo",
//     authDomain: "curso-a4c82.firebaseapp.com",
//     projectId: "curso-a4c82",
//     storageBucket: "curso-a4c82.appspot.com",
//     messagingSenderId: "507580873185",
//     appId: "1:507580873185:web:65eb31695c92d2fcccfaa0",
//     measurementId: "G-6F43JH58RM"
//   };
  
// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }

//  export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANtIMU0bvipvNAWnoKs2xmq-q0Lvc8bdo",
  authDomain: "curso-a4c82.firebaseapp.com",
  projectId: "curso-a4c82",
  storageBucket: "curso-a4c82.appspot.com",
  messagingSenderId: "507580873185",
  appId: "1:507580873185:web:65eb31695c92d2fcccfaa0",
  measurementId: "G-6F43JH58RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);