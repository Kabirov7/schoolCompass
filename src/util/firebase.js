import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyADuNBmOC6WQ9ON-CLTZeTDyaLA1J27IsA",
  authDomain: "schoolcompasste.firebaseapp.com",
  databaseURL: "https://schoolcompasste.firebaseio.com",
  projectId: "schoolcompasste",
  storageBucket: "schoolcompasste.appspot.com",
  messagingSenderId: "241085209563",
  appId: "1:241085209563:web:7fca7ce98e24d9a150e5fe",
  measurementId: "G-ZM7XRNRQN0"
}
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
	firebase.auth().signInWithPopup(provider);
};

export const signInAnonymously = () => {
	firebase.auth().signInAnonymously()
}

export default firebase;