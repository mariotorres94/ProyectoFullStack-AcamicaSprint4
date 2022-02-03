import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

//Module of Authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7klv5Ci3CLGniYrwk8Te3ko5YR8Znze4",
    authDomain: "proyecto-prueba-37473.firebaseapp.com",
    projectId: "proyecto-prueba-37473",
    storageBucket: "proyecto-prueba-37473.appspot.com",
    messagingSenderId: "725707270777",
    appId: "1:725707270777:web:3efad38556bab62d7ac2a8"
};

const app = initializeApp(firebaseConfig);

//Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//Obteniendo base de datos 
const db = getFirestore();

//Referencia a una coleccion
const getRefCollection = (collectionPath) => collection(db, collectionPath);

export { db, getRefCollection, auth, googleProvider };
export default app;