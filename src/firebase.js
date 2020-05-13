import * as firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBFXQ0YiPB-NAGJae7o61yFZTTPa0eIVdQ",
  authDomain: "kemi-54495.firebaseapp.com",
  databaseURL: "https://kemi-54495.firebaseio.com",
  projectId: "kemi-54495",
  storageBucket: "kemi-54495.appspot.com",
  messagingSenderId: "966958643821",
  appId: "1:966958643821:web:3483a708cdf467af49dd64",
  measurementId: "G-PZK5WF6TGE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
