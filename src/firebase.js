import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: .env.YOUR_API_KEY,
  authDomain: .env.YOUR_AUTH_DOMAIN,
  projectId: .env.YOUR_PROJECT_ID,
  storageBucket: .env.YOUR_STORAGE_BUCKET,
  messagingSenderId: .env.YOUR_MESSAGING_SENDER_ID,
  appId: env.YOUR_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
