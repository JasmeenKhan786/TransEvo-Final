import * as firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyCjeJCbDf1wYfRIwCvRCWgnOjQ5MilDEjE",
    authDomain: "trans-evo.firebaseapp.com",
    projectId: "trans-evo",
    storageBucket: "trans-evo.appspot.com",
    messagingSenderId: "431363923756",
    appId: "1:431363923756:web:e2e1e734cba9f1c7b55689"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();