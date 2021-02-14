import firebase from "firebase/app"
import "firebase/auth"
import { usersCollection, postsCollection } from '../../db/index'

const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp


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


// AutoSign In User
export const autoSignIn = () => (
    new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(async (user) => {
          if (user) {
              const userProfile = await getUserProfile(user.uid)
              resolve({ isAuth: true, user: userProfile })

          } else {
            resolve({ isAuth: false, user: null })
          }
        })
    })
)


// AutoSign In User
// export const autoSignIn = () => (
//     new Promise((resolve, reject) => {
//         firebase.auth().onAuthStateChanged(user => {
//             if (user) {
//                 usersCollection.doc(user.uid).get()
//                     .then(snapshot => {
//                        resolve({ isAuth: true, user: snapshot.data() }) 
//                 })
//             } else {
//                 resolve({ isAuth: false, user: null })
//             }
//         })
//     })
// )


export const logoutUser = () => (
    firebase.auth().signOut()
)


// Add Message
export const addMessage = (data, user) =>
    postsCollection.add({
        ...data,
        createdAt: serverTimestamp(),
        author: { ownerId: user.uid, ownerName: user.username, email: user.email }
    }).then(docRef => {
        return docRef.id
    }).catch(err => {
        return err
    })