import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function useAuthListener() {
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('authUser')));

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
