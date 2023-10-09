// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Authentication = () => {
	return (
		<div>
			<Header />
			<div className="min-h-[calc(100vh-300px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Authentication;
