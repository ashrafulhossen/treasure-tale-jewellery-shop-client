// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [showPassword, setShowPassword] = useState(false);
	const showPasswordHandler = () => setShowPassword(!showPassword);

	const loginHandler = (data) => {
		console.log(data);
	};

	return (
		<div className="bg-black py-10">
			<div className="container mx-auto h-[calc(100vh-250px)] flex items-center justify-center">
				<div>
					<h2 className="text-amber-200 text-4xl font-bold text-center mb-6">
						Login
					</h2>
					<div>
						<form
							onSubmit={handleSubmit(loginHandler)}
							className="flex flex-col w-96 gap-3"
						>
							<input
								className="py-2 px-4 rounded-md w-full"
								type="text"
								placeholder="Enter your email"
								{...register("email", {
									required: true,
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
											/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
									})}
								/>
								<button
									type="button"
									onClick={showPasswordHandler}
									className="absolute top-[7px] right-2 text-xl"
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
						<div className="mt-2">
							<div className="text-white w-full flex items-center gap-2">
								<p className="h-[2px] w-full bg-white"></p>
								<p className="flex-shrink-0 font-semibold">
									Or Login With
								</p>
								<p className="h-[2px] w-full bg-white"></p>
							</div>
							<button className="mt-3 flex items-center justify-center gap-2 w-full py-1 text-xl font-bold text-amber-200 border border-amber-200 rounded md hover:bg-amber-200 hover:text-black transition-all duration-300">
								<FaGoogle />
								<span>Google</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
