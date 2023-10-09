// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const Footer = () => {
	return (
		<footer className="bg-black border-t border-zinc-700">
			<div className="container mx-auto flex justify-between px-4 py-10 gap-8 flex-wrap flex-col sm:flex-row">
				<aside>
					<Logo />
					<p className="text-white w-72 mt-3">
						Treasure Tales: A luxurious jewelry boutique offering
						exquisite gems, timeless designs, impeccable
						craftsmanship, and personalized service in a lavish,
						inviting atmosphere.
					</p>
				</aside>
				<nav className="text-white flex flex-col">
					<header className="text-2xl font-bold text-amber-200">
						Links
					</header>
					<div className="flex flex-col gap-1 mt-3">
						<Link
							to={"/"}
							className="
								mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200`"
						>
							Home
						</Link>
						<Link
							to={"/all-jewellery"}
							className="
								mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200`"
						>
							All Jewellery
						</Link>
						<Link
							to={"/my-jewellery"}
							className="
								mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200`"
						>
							My Jewellery
						</Link>
						<Link
							to={"/blogs"}
							className="
								mx-1 hover:px-1 hover:mx-0 hover:border-b-2 hover:border-amber-200 hover:text-amber-200 transition-all duration-200`"
						>
							Blogs
						</Link>
					</div>
				</nav>
				<nav className="text-white flex flex-col">
					<header className="text-2xl font-bold text-amber-200">
						Social Links
					</header>
					<div className="flex flex-col gap-1 mt-3">
						<a
							className="mx-1 hover:px-1 hover:mx-0 border-b-2 border-transparent hover:border-amber-200 hover:text-amber-200 transition-all duration-200"
							href="https://facebook.com"
						>
							Facebook
						</a>
						<a
							className="mx-1 hover:px-1 hover:mx-0 border-b-2 border-transparent hover:border-amber-200 hover:text-amber-200 transition-all duration-200"
							href="https://twitter.com"
						>
							Twitter
						</a>
						<a
							className="mx-1 hover:px-1 hover:mx-0 border-b-2 border-transparent hover:border-amber-200 hover:text-amber-200 transition-all duration-200"
							href="https://instagram.com"
						>
							Instagram
						</a>
						<a
							className="mx-1 hover:px-1 hover:mx-0 border-b-2 border-transparent hover:border-amber-200 hover:text-amber-200 transition-all duration-200"
							href="link link-hover"
						>
							Advertisement
						</a>
					</div>
				</nav>
				<form>
					<header className="text-2xl font-bold text-amber-200">
						Newsletter
					</header>
					<fieldset className="mt-2 w-80">
						<label className="text-white">
							<span className="label-text">
								Enter your email address
							</span>
						</label>
						<div className="mt-1 flex">
							<input
								type="text"
								placeholder="username@site.com"
								className="rounded-l-md py-1 px-4 text-xl w-4/6"
							/>
							<button
								className="bg-amber-200 px-2 font-semibold rounded-r-md"
								type="button"
							>
								Subscribe
							</button>
						</div>
					</fieldset>
				</form>
			</div>
			<aside className="border-t border-zinc-700">
				<p className="text-white text-center py-2">
					Copyright © 2023 - All right reserved by{" "}
					<span className="text-amber-200 font-semibold">
						Treasure Tales
					</span>
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
