// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Navbar = () => {
	const [categoryArray, setCategoryArray] = useState([
		"ring",
		"earrings",
		"bracelet",
		"pendant",
		"necklace",
	]);

	// useEffect(() => {
	// 	const loadData = async () => {
	// 		const data = await axios.get("/src/data/--test/category.json");
	// 		setCategoryArray(data.data);
	// 	};
	// 	return () => {
	// 		loadData();
	// 	};
	// }, []);

	return (
		<div className="bg-zinc-900 text-amber-200 py-2">
			<div className="container mx-auto px-3 flex items-center gap-3">
				{categoryArray.map((category, index) => (
					<button
						className="capitalize border-b-2 border-transparent hover:border-amber-200 mx-1 transition"
						key={index}
					>
						{category}
					</button>
				))}
			</div>
		</div>
	);
};

export default Navbar;
