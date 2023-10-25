import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const response = await axios.get("/src/data/--test/products.json");
			setProducts(response?.data);
		};
		loadData();
	}, []);

	console.log(products);

	return (
		<section className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
			{products.length > 0 &&
				products.map((product) => (
					<SingleProduct key={product.name} product={product} />
				))}
		</section>
	);
};

export default Products;
