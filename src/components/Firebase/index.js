import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDh5Y8Sx779sU6dI47QicutHMd9g9XoTj0",
    authDomain: "manipal-rentals.firebaseapp.com",
    projectId: "manipal-rentals",
    storageBucket: "manipal-rentals.appspot.com",
    messagingSenderId: "578801440385",
    appId: "1:578801440385:web:154c5c00db0dfe4b8adf80",
    measurementId: "G-KJJNSXV16P"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }