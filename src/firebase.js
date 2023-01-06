import { firebase,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDl4GQ_fxuyvOBIWdJYyfts9ItgU7cQeWk",
  authDomain: "activitymanager-80678.firebaseapp.com",
  projectId: "activitymanager-80678",
  storageBucket: "activitymanager-80678.appspot.com",
  messagingSenderId: "366232097865",
  appId: "1:366232097865:web:73ab6e147cd42c9479db98"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
// export const db=app.firestore()
export default app;
