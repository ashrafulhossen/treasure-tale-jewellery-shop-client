import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import SingleProduct from "../home/SingleProduct";

const AllProducts = () => {
	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const response = await axios.get("/src/data/--test/products.json");
			setAllProducts(response?.data);
		};
		loadData();
	}, []);

	return (
		<section className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
			{allProducts.length > 0 &&
				allProducts.map((product) => (
					<SingleProduct key={product.name} product={product} />
				))}
		</section>
	);
};

export default AllProducts;
