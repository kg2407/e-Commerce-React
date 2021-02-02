import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAug1SApoiiaTUNcZILgU34eCHm7LhiHws',
  authDomain: 'crwn-db-aa039.firebaseapp.com',
  projectId: 'crwn-db-aa039',
  storageBucket: 'crwn-db-aa039.appspot.com',
  messagingSenderId: '584226522115',
  appId: '1:584226522115:web:8ac8c30ef9770c382b7a36',
}

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
