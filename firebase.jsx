import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDn6lZ-IUCpV1oAfnKlruuViB2MmASzMu8",
  authDomain: "ecommerce-34b10.firebaseapp.com",
  projectId: "ecommerce-34b10",
  storageBucket: "ecommerce-34b10.appspot.com",
  messagingSenderId: "1062322954014",
  appId: "1:1062322954014:web:b55a0055e657285f4a730f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage);

const imagesref = ref(storage, 'images')
const sneaker1 = ref(storage,"images/sneaker.jpg")
