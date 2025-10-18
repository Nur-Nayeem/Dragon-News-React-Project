// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBhK7Cf70-esfiZhhVA7REF6m810XzORFA",
//   authDomain: "dragon-news-with-auth-59167.firebaseapp.com",
//   projectId: "dragon-news-with-auth-59167",
//   storageBucket: "dragon-news-with-auth-59167.firebasestorage.app",
//   messagingSenderId: "812683595711",
//   appId: "1:812683595711:web:dc47742bbed29535e91b0a",
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
