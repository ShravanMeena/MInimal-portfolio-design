import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC9t71dTb_RLQvwnfkJXt1wuDoSKKHNO8k",
  authDomain: "aamladke-8ac74.firebaseapp.com",
  databaseURL: "https://aamladke-8ac74.firebaseio.com",
  projectId: "aamladke-8ac74",
  storageBucket: "aamladke-8ac74.appspot.com",
  messagingSenderId: "816868421283",
  appId: "1:816868421283:web:410cf7547292054efed916",
  measurementId: "G-WC53G2SL85",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
export default db;
