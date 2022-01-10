import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Browse, Signin, Signup } from './pages/index';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
	const { user } = useAuthListener();
	console.log(user);
	return (
		<Router>
			<Routes>
				<Route
					path={ROUTES.HOME}
					element={
						<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
							<Home />
						</IsUserRedirect>
					}
				/>
				<Route
					path={ROUTES.BROWSE}
					element={
						<ProtectedRoute user={user} path={ROUTES.SIGN_IN}>
							<Browse />
						</ProtectedRoute>
					}
				/>
				<Route
					path={ROUTES.SIGN_UP}
					element={
						<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
							<Signup />
						</IsUserRedirect>
					}
				/>
				<Route
					path={ROUTES.SIGN_IN}
					element={
						<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
							<Signin />
						</IsUserRedirect>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
