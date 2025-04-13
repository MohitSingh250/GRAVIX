import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAj-3wSCMdSx-4NxsxWkjIcxyXt_2ORl2Q",
  authDomain: "gravix-auth-df430.firebaseapp.com",
  projectId: "gravix-auth-df430",
  storageBucket: "gravix-auth-df430.firebasestorage.app",
  messagingSenderId: "628548221768",
  appId: "1:628548221768:web:fae92bbad556c8134f117d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);