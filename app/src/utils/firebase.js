import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAUzaC1zQjh-IkLVpQYR8PbPEulhUGzvT4",
  authDomain: "storycraft-3b974.firebaseapp.com",
  projectId: "storycraft-3b974",
  storageBucket: "storycraft-3b974.appspot.com",
  messagingSenderId: "1092976214727",
  appId: "1:1092976214727:web:29c743e961bd1765dbf4e2",
  measurementId: "G-3XYLTCPHG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getStory = async () => {
  try {
    let output = [];
    const querySnapshot = await getDocs(collection(db, "stories"));
    querySnapshot.forEach((doc) => {
      output.push(doc.data());
    });
    return output;
  } catch (error) {
    console.log(error);
  }
}