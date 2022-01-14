import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function SelectProfileContainer({ user, setProfile }) {
	return (
		<div>
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
				</Header.Frame>
			</Header>
		</div>
	);
}
