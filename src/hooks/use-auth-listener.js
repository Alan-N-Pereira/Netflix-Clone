import { useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('authUser')));
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		const listener = getAuth(firebase);
		onAuthStateChanged(listener, (authUser) => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser));
				setUser(authUser);
			} else {
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});
	}, []);
	return { user };
}
