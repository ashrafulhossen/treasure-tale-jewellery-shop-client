// eslint-disable-next-line no-unused-vars
import React from "react";
import LogoWithName from "./LogoWithName";
import OnlyLogo from "./OnlyLogo";

const Logo = () => {
	return (
		<div>
			<div className="md:hidden">
				<OnlyLogo />
			</div>
			<div className="hidden md:block">
				<LogoWithName />
			</div>
		</div>
	);
};

export default Logo;
