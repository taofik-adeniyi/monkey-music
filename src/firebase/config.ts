import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCS0IbASs5L0v2nyjMagdA4KLEWtjK14AA',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'monkey-music-c9841',
  storageBucket: 'gs://monkey-music-c9841.appspot.com',
  messagingSenderId: '589803057529',
  appId: '1:589803057529:ios:48043cc63e5b9773313fa8',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };