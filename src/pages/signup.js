import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function Signup() {
	const navigate = useNavigate();
	const { firebase } = useContext(FirebaseContext);

	const [ firstName, setFirstName ] = useState('');
	const [ emailAddress, setEmailAddress ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');

	const isInvalid = firstName === '' || password === '' || emailAddress === '';

	const handleSignUp = (event) => {
		event.preventDefault();

		const auth = getAuth(firebase);
		createUserWithEmailAndPassword(auth, emailAddress, password)
			.then((result) => {
				// Push to browse page
				const user = result.user;
				updateProfile(user, {
					displayName: firstName,
					photoURL: Math.floor(Math.random() * 5) + 1
				});
			})
			.then(() => {
				navigate(ROUTES.BROWSE);
			})
			.catch((error) => {
				setFirstName('');
				setEmailAddress('');
				setPassword('');
				setError(error.message);
			});
	};

	return (
		<div>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignUp} method="POST">
						<Form.Input
							placeholder="First Name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							autoComplete="off"
							placeholder="Password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign Up
						</Form.Submit>
					</Form.Base>

					<Form.Text>
						Already a user? <Form.Link to="/signin">Sign in now</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by google reCAPTCHA to ensure you're not a bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</div>
	);
}
