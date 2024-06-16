import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBoKdDdNHL-ij56pBmIbdzXDNy2QoZMNEE",
    authDomain: "imageuploading-ef4fa.firebaseapp.com",
    databaseURL: "https://imageuploading-ef4fa-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "imageuploading-ef4fa",
    storageBucket: "imageuploading-ef4fa.appspot.com",
    messagingSenderId: "701806532775",
    appId: "1:701806532775:web:ce3574955dc47268922382",
    measurementId: "G-Y2PM0FMC60"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const imageDb = getStorage(app)