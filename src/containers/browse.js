import React, { useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { getAuth } from 'firebase/auth';

export default function BrowseContainer({ slides }) {
	const [ profile, setProfile ] = useState({});
	const [ loading, setLoading ] = useState(true);
	const auth = getAuth();
	const user = auth.currentUser || {};

	useEffect(
		() => {
			console.log('profile', profile);
			setTimeout(() => {
				setLoading(false);
			}, 3000);
		},
		[ profile.displayName ]
	);

	return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
