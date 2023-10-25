import { updateProfile } from "firebase/auth";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider&Routes/AuthProvider";

const Register = () => {
	const { registerUser, loginWithGoogle } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();

	const [showPassword, setShowPassword] = useState(false);
	const showPasswordHandler = () => setShowPassword(!showPassword);

	const registerHandler = (newUser) => {
		const { email, password, name } = newUser;
		registerUser(email, password)
			.then((userCredential) => {
				const user = userCredential?.user;
				updateProfile(user, {
					displayName: name
				})
					.then(() => {
						Swal.fire({
							icon: "success",
							title: "Successful",
							text: "Your registration is successful.",
							timer: 1500
						});
						reset();
					})
					.catch((err) => {
						Swal.fire({
							icon: "error",
							title: err.code.replace("auth/", ""),
							text: "Something went wrong. Please try again."
						});
						console.log(err.message);
					});
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

	return (
		<div className="bg-black py-10">
			<div className="container mx-auto h-[calc(100vh-250px)] flex items-center justify-center">
				<div>
					<h2 className="text-amber-200 text-4xl font-bold text-center mb-6">
						Register
					</h2>
					<div>
						<form
							onSubmit={handleSubmit(registerHandler)}
							className="flex flex-col w-96 gap-3"
						>
							<input
								className="py-2 px-4 rounded-md w-full"
								type="text"
								placeholder="Enter your name"
								{...register("name", {
									required: true
								})}
							/>
							<input
								className="py-2 px-4 rounded-md w-full"
								type="text"
								placeholder="Enter your email"
								{...register("email", {
									required: true
								})}
							/>
							<div className="relative">
								<input
									className="py-2 px-4 rounded-md w-full"
									type={showPassword ? "text" : "password"}
									placeholder="Enter your password"
									{...register("password", {
										required: true,
										pattern:
											/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
									})}
								/>
								<button
									type="button"
									onClick={showPasswordHandler}
									className="absolute top-[13px] right-2 text-xl"
								>
									{showPassword ? <HiEye /> : <HiEyeOff />}
								</button>
								{errors.email && (
									<p className="text-red-500 text-xs mt-2">
										Please enter your valid email.
									</p>
								)}
								{errors.password && (
									<p className="text-red-500 text-xs mt-2">
										Password must contain at least one
										capital letter, small letter, number and
										special character.
									</p>
								)}
							</div>
							<input
								type="submit"
								value="Login"
								className="bg-amber-200 py-2 rounded-md font-bold"
							/>
						</form>
					</div>
					<div className="mt-2">
						<div className="text-white w-full flex items-center gap-2">
							<p className="h-[2px] w-full bg-white"></p>
							<p className="flex-shrink-0 font-semibold">
								Or Login With
							</p>
							<p className="h-[2px] w-full bg-white"></p>
						</div>
						<button
							onClick={loginWithGoogle}
							className="mt-3 flex items-center justify-center gap-2 w-full py-1 text-xl font-bold text-amber-200 border border-amber-200 rounded md hover:bg-amber-200 hover:text-black transition-all duration-300"
						>
							<FaGoogle />
							<span>Google</span>
						</button>
					</div>
					<div className="mt-3">
						<p className="text-white text-center">
							Already have an account?{" "}
							<Link
								to={"/authentication/login"}
								className="hover:text-amber-200 border-b-2 border-transparent hover:border-amber-200 pb-[2px] ms-1 transition-all duration-300"
							>
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
