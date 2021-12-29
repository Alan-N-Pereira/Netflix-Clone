import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

// seed the database

// config
const config = {
	// apiKey: REACT_APP_API_KEY,
	// authDomain: REACT_APP_AUTH_DOMAIN,
	// projectId: REACT_APP_PROJECT_ID,
	// storageBucket: REACT_APP_STORAGE_BUCKET,
	// messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
	// appId: REACT_APP_APP_ID
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
