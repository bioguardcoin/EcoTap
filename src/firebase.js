import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAS0xNgdRCHgAS-c1KAkGf_G-RuLHCJV4I",
  authDomain: "ecotaptestapp.firebaseapp.com",
  projectId: "ecotaptestapp",
  storageBucket: "ecotaptestapp.firebasestorage.app",
  messagingSenderId: "185544000979",
  appId: "1:185544000979:web:c6804dd382379af530db26"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
