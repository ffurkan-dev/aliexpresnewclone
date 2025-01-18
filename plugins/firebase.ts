// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUhmlqvvGR4T9IFTU6jWsNS2f_-NhLlow",
    authDomain: "aev5-4027e.firebaseapp.com",
    projectId: "aev5-4027e",
    storageBucket: "aev5-4027e.firebasestorage.app",
    messagingSenderId: "893495898710",
    appId: "1:893495898710:web:5c6b02e8a56a21d24881f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize users collection with sample data
const initializeUsers = async () => {
  const usersCollection = collection(db, "users");
  
  const sampleUsers = [
    {
      email: "john@example.com",
      password: "123456",
      name: "John Doe"
    },
    {
      email: "jane@example.com",
      password: "123456",
      name: "Jane Smith"
    },
    {
      email: "alice@example.com",
      password: "123456",
      name: "Alice Johnson"
    }
  ];

  try {
    for (const user of sampleUsers) {
      await addDoc(usersCollection, user);
    }
    console.log("Sample users added successfully");
  } catch (error) {
    console.error("Error adding sample users:", error);
  }
};

// Call initializeUsers function
initializeUsers();

export { auth, db };
export default app;
