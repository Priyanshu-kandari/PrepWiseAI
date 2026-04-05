import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "prepwiseai-43c51.firebaseapp.com",
  projectId: "prepwiseai-43c51",
  storageBucket: "prepwiseai-43c51.firebasestorage.app",
  messagingSenderId: "582241750002",
  appId: "1:582241750002:web:59d9a90ea59d4b90d7796b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}