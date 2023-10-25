import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from "firebase/auth";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loddingOnSetCurrentUser, setLoddingOnSetCurrentUser] =
		useState(false);
	const googleAuthProvider = new GoogleAuthProvider();

	useEffect(() => {
		const getCurrentUser = () => {
			onAuthStateChanged(auth, (user) => {
				setLoddingOnSetCurrentUser(true);
				if (user) {
					setCurrentUser(user);
				}
				setLoddingOnSetCurrentUser(false);
			});
		};
		return () => {
			getCurrentUser();
		};
	});

	// Register a new user
	const registerUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	// Login an user
	const loginUser = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	// Logout an existing user
	const logoutUser = () => {
		signOut(auth)
			.then(() => {
				setCurrentUser(null);
				Swal.fire({
					icon: "success",
					title: "Successful",
					text: "You are now logged out successfully.",
					timer: 1500
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: err.code.replace("auth/", ""),
					text: err.message
				});
				console.log(err.message);
			});
	};

	// Register or Login an user with google
	const loginWithGoogle = () => {
		signInWithPopup(auth, googleAuthProvider)
			.then((userCredential) => {
				if (userCredential?.user) {
					Swal.fire({
						icon: "success",
						title: "Successful",
						text: "You logged in successfully.",
						timer: 1500
					});
				}
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: err.code.replace("auth/", ""),
					text: "Something went wrong. Please try again."
				});
				console.log(err.message);
			});
	};

	const authObj = {
		currentUser,
		loddingOnSetCurrentUser,
		registerUser,
		loginUser,
		logoutUser,
		loginWithGoogle
	};

	return (
		<AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.element
};

export default AuthProvider;
