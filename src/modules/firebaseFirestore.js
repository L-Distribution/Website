import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBlcNmx6qftyeT_fDsdBl8bo19HWrCxKTE",
  authDomain: "l-distribution.firebaseapp.com",
  databaseURL: "https://l-distribution.firebaseio.com",
  projectId: "l-distribution",
  storageBucket: "l-distribution.appspot.com",
  messagingSenderId: "689851075301"
}

firebase.initializeApp(config)

export default firebase
