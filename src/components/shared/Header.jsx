// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider&Routes/AuthProvider";
import Logo from "../logo/Logo";

const Header = () => {
	const { currentUser, logoutUser } = useContext(AuthContext);
	const [showMenu, setShowMenu] = useState(false);
	const [showProfileMenu, setShowProfileMenu] = useState(false);

	// menu handler
	const showMenuHandler = () => setShowMenu(true);
	const hideMenuHandler = () => setShowMenu(false);

	// profile menu handler
	const showProfileMenuHandler = () => setShowProfileMenu(!showProfileMenu);

	const menuItems = (
		<>
			<NavLink
				to={"/"}
				className={({ isActive }) =>
					`mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200 ${
						isActive
							? "text-amber-200 border-b-2 outline-offset-1 border-amber-200"
							: "text-white"
					}`
				}
			>
				Home
			</NavLink>
			<NavLink
				to={"/all-jewellery"}
				className={({ isActive }) =>
					`mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200 ${
						isActive
							? "text-amber-200 border-b-2 outline-offset-1 border-amber-200"
							: "text-white"
					}`
				}
			>
				All Jewellery
			</NavLink>
			<NavLink
				to={"/my-jewellery"}
				className={({ isActive }) =>
					`mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200 ${
						isActive
							? "text-amber-200 border-b-2 outline-offset-1 border-amber-200"
							: "text-white"
					}`
				}
			>
				My Jewellery
			</NavLink>
			<NavLink
				to={"/add-jewellery"}
				className={({ isActive }) =>
					`mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200 ${
						isActive
							? "text-amber-200 border-b-2 outline-offset-1 border-amber-200"
							: "text-white"
					}`
				}
			>
				Add Jewellery
			</NavLink>
			<NavLink
				to={"/blogs"}
				className={({ isActive }) =>
					`mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200 ${
						isActive
							? "text-amber-200 border-b-2 outline-offset-1 border-amber-200"
							: "text-white"
					}`
				}
			>
				Blogs
			</NavLink>
			{/* User Profile */}
			<div className="relative">
				<div
					onClick={showProfileMenuHandler}
					className="flex items-center gap-2 cursor-pointer"
				>
					{currentUser?.photoURL ? (
						<img
							className="rounded-full w-9 h-9 object-cover"
							src={currentUser?.photoURL}
						/>
					) : (
						<FaUserCircle className="text-white h-9 w-9" />
					)}
					<span className="text-white lg:hidden">Profile</span>
				</div>
				{showProfileMenu && (
					<div className="absolute top-10 left-0 p-4 border border-zinc-400 rounded-md bg-black">
						<div className="flex flex-col gap-2">
							{currentUser ? (
								<>
									<NavLink
										to={"/user"}
										className={({ isActive }) =>
											`mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200 ${
												isActive
													? "text-amber-200 border-b-2 outline-offset-1 border-amber-200"
													: "text-white"
											}`
										}
									>
										Profile
									</NavLink>
									<button
										onClick={logoutUser}
										className="flex-shrink-0 flex-grow min-w-max mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200 text-white"
									>
										Log Out
									</button>
								</>
							) : (
								<>
									<NavLink
										to={"/authentication/login"}
										className={({ isActive }) =>
											`mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200 ${
												isActive
													? "text-amber-200 border-b-2 outline-offset-1 border-amber-200"
													: "text-white"
											}`
										}
									>
										Login
									</NavLink>
									<NavLink
										to={"/authentication/register"}
										className={({ isActive }) =>
											`mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200 ${
												isActive
													? "text-amber-200 border-b-2 outline-offset-1 border-amber-200"
													: "text-white"
											}`
										}
									>
										Register
									</NavLink>
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);

	return (
		<section className="bg-black border-b border-zinc-700">
			<div className="container py-3 px-2 mx-auto flex items-center justify-between">
				<div>
					<Logo />
				</div>
				<div className="hidden lg:flex items-center justify-center gap-3">
					{menuItems}
				</div>
				<div className="lg:hidden">
					{showMenu ? (
						<button
							onClick={hideMenuHandler}
							className="text-amber-200"
						>
							<HiX className="text-2xl" />
						</button>
					) : (
						<button
							onClick={showMenuHandler}
							className="text-amber-200"
						>
							<HiMenuAlt3 className="text-2xl" />
						</button>
					)}
					{showMenu && (
						<div className="absolute top-16 right-1 bg-black p-4 rounded-md border border-zinc-400">
							<div className="flex flex-col gap-2">
								{menuItems}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Header;
