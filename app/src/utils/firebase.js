import { initializeApp } from "firebase/app";
import { addDoc, doc, getFirestore, setDoc } from "firebase/firestore";
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

export const firebaseBaseAddStory = async (title, coverImage, desc, category, matureBool, chapters, author_address) => {
  try {
    await addDoc(collection(db, "stories"), {
      title : title,
      desc : desc,
      category : category,
      mature : matureBool,
      coverImage : coverImage,
      chapters : chapters,
      author : author_address,
    }); 
  } catch (error) {
    console.log(error);
  }
}

export const firebaseAddChapter = async (story, option1, option2, option3) => {
  try {
    const docRef = await addDoc(collection(db, "chapters"), {
      story : story,
      option1 : option1,
      option2 : option2,
      option3 : option3
    }); 
    return docRef.id;
  } catch (error) {
    console.log(error);
  }
}