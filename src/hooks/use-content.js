import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase.prod';
export default function useContent(target) {
	const [ content, setContent ] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const allData = await getDocs(collection(db, target));

			setContent(
				allData.docs.map((doc) => ({
					...doc.data(),
					docId: doc.id
				}))
			);
		};
		getData();
	}, []);

	return { [target]: content };
}
