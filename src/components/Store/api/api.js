import firebase from "firebase/app"
import "firebase/auth"
import { usersCollection } from '../../db/index'



// Create user profile on firestore
const createUserProfile = (userProfile) =>
    usersCollection.doc(userProfile.uid).set(userProfile)


// Get user profile
export const getUserProfile = (uid) =>
  usersCollection.doc(uid).get()
    .then((snapshot) => snapshot.data())


// Register User
export const registerUser = async ({ email, password, username }) => {
    try {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const userProfile = { uid: user.uid, username, email }

        await createUserProfile(userProfile)
        return { isAuth: true, user: userProfile }

  } catch (err) {
    return { error: err.message }
  }
}


// Login User
export const loginUser = async ({ email, password }) => {
  try {
     const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
    const userProfile = await getUserProfile(user.uid)
      return { isAuth: true, user: userProfile }
      
  } catch (err) {
    return { error: err.message }
  }
}
