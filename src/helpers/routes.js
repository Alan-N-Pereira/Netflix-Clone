import React from 'react';
import { Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
	return user ? <Navigate to={loggedInPath} /> : children;
}

export function ProtectedRoute({ user, path, children, ...restProps }) {
	return user ? children : <Navigate to={path} />;
}
