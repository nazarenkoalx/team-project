// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBlT3PCJKNz7bKvDXs1sgoLfwKQnTnmWnk',
  authDomain: 'test-database-8b199.firebaseapp.com',
  databaseURL:
    'https://test-database-8b199-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'test-database-8b199',
  storageBucket: 'test-database-8b199.appspot.com',
  messagingSenderId: '170659577290',
  appId: '1:170659577290:web:f35989ac6b3a1361156333',
  measurementId: 'G-5C9RYVHRE8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
