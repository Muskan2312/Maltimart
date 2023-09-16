
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDD-oCT3ABRt5F3vOajetXjDQRpse2_xWI",
  authDomain: "maltimart-17a48.firebaseapp.com",
  projectId: "maltimart-17a48",
  storageBucket: "maltimart-17a48.appspot.com",
  messagingSenderId: "235795307961",
  appId: "1:235795307961:web:c529cc235272240a246a68"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;