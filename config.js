import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAAXSYnk7Q-xDWBj8UoE1r1gwfJjqx588E",
  authDomain: "tvapp-aec7d.firebaseapp.com",
  projectId: "tvapp-aec7d",
  storageBucket: "tvapp-aec7d.appspot.com",
  messagingSenderId: "1015109606311",
  appId: "1:1015109606311:web:d9ff50b7c1a093291ff482"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
