import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqad5PywQh_3MDUXHb2jOTYpUv_KUy7Ao",
  authDomain: "react-project-aa0df.firebaseapp.com",
  projectId: "react-project-aa0df",
  storageBucket: "react-project-aa0df.appspot.com",
  messagingSenderId: "341147420664",
  appId: "1:341147420664:web:82e2123a54e88bec2c780d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
