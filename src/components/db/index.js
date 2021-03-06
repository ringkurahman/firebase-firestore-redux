import firebase from "firebase/app"
import "firebase/firestore"


  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  }

  export const { Timestamp } = firebase.firestore

  // Initialize Firebase
    const db = firebase.initializeApp(config).firestore()

export default db

// Create firestore collection
export const usersCollection = db.collection('users')
export const postsCollection = db.collection("posts")