import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBeOm3atqj63aGXbPobLNYWl7BG0uN3UFE",
    authDomain: "massenger-55f59.firebaseapp.com",
    projectId: "massenger-55f59",
    storageBucket: "massenger-55f59.appspot.com",
    messagingSenderId: "856571822249",
    appId: "1:856571822249:web:1f706104bd9e464d59e9b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
