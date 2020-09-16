import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBqd_BELHBB9RJQ8A9QVkjhYReoHwPpgMs",
    authDomain: "fb-clone-98ed4.firebaseapp.com",
    databaseURL: "https://fb-clone-98ed4.firebaseio.com",
    projectId: "fb-clone-98ed4",
    storageBucket: "fb-clone-98ed4.appspot.com",
    messagingSenderId: "914364376265",
    appId: "1:914364376265:web:98f3b2e48eada7fab15918",
    measurementId: "G-2D3C6807FX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;