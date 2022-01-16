import React from 'react';
import SelectProfileContainer from './profiles';
import { getAuth } from 'firebase/auth';

export default function BrowseContainer({ slides }) {
	const auth = getAuth();
	const user = auth.currentUser || {};
	return <SelectProfileContainer user={user} />;
}
