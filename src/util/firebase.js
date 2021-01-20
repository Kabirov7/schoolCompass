import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyADuNBmOC6WQ9ON-CLTZeTDyaLA1J27IsA",
	authDomain: "schoolcompasste.firebaseapp.com",
	databaseURL: "https://schoolcompasste.firebaseio.com",
	projectId: "schoolcompasste",
	storageBucket: "schoolcompasste.appspot.com",
	messagingSenderId: "241085209563",
	appId: "1:241085209563:web:a538cc6ef38f2fe550e5fe",
	measurementId: "G-9W8J6Y2863"
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