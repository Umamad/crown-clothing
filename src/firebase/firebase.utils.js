import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDpWspNPfgk2eNXZuh8t-3SVt2q3TIDvUg",
    authDomain: "crown-clothing-377ca.firebaseapp.com",
    projectId: "crown-clothing-377ca",
    storageBucket: "crown-clothing-377ca.appspot.com",
    messagingSenderId: "45532013161",
    appId: "1:45532013161:web:2ddec1375be209ade538f8",
    measurementId: "G-77K43EY1VD"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName , email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error Creating User', error.message)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;