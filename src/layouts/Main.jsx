// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";

const Main = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<div className="min-h-[calc(100vh-540px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
