import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "tu apiKey generada por firebase",
  authDomain: "tu authDomain generada por firebase",
  projectId: "tu projectId generada por firebase",
  storageBucket: "tu storageBucket generada por firebase",
  messagingSenderId: "tu messagingSenderId generada por firebase",
  appId: "tu appId generada por firebase"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );