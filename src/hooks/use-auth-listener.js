import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function useAuthListener() {
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('authUser')));

	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		const listener = getAuth();
		onAuthStateChanged(listener, (authUser) => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser));
				setUser(authUser);
			} else {
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});
		return () => listener();
	}, []);
	return { user };
}
