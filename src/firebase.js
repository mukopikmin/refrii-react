import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCsSFbY-T6WWc8hfhsugqJt4E1kCSR7fdE',
  authDomain: 'refrii-169906.firebaseapp.com',
  databaseURL: 'https://refrii-169906.firebaseio.com',
  projectId: 'refrii-169906',
  storageBucket: 'refrii-169906.appspot.com',
  messagingSenderId: '943106981480',
};

firebase.initializeApp(config);

export default firebase;
