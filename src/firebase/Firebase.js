import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
} from "firebase/auth";
import { setUser } from "../redux/google-slice";
//import { firebaseConfig } from "./firebaseConfig";

const firebaseConfig = {
  apiKey: "AIzaSyAphIaC60oNR94M1SX0LUAd1SnxxFOwc08",
  authDomain: "tibo-e1c6d.firebaseapp.com",
  projectId: "tibo-e1c6d",
  storageBucket: "tibo-e1c6d.appspot.com",
  messagingSenderId: "784329066367",
  appId: "1:784329066367:web:58d6e0e6c04e60a89d3c4a",
  measurementId: "G-VSPWTJWSH8"
};

//const envValue = process.env.REACT_APP_FIREBASE_CONFIG;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const SignInWithGoogle = (dispatch) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setUser(user));
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

export const SignInAnonymously = (dispatch) => {
  signInAnonymously(auth)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setUser(user));
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};
