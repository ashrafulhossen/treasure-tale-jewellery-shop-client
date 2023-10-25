import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
	const { image, name, price, category } = product;
	console.log(product);
	return (
		<div className="bg-light-black border border-amber-200 p-4 rounded-md relative overflow-hidden group">
			<div className="group-hover:opacity-10 transition-all duration-300">
				<img
					className="w-full h-56 object-contain"
					src={image}
					alt={name}
				/>
				<div className="text-center space-y-1 mt-2">
					<h3 className="text-amber-200 font-bold capitalize">
						{name}
					</h3>
					<p className="text-lg text-zinc-400 uppercase">
						{category}
					</p>
					<p className="text-white font-semibold">${price}</p>
				</div>
			</div>
			{/* add to car and view Details button section */}
			<div className="hidden opacity-0 bg-amber-200 bg-opacity-20 absolute top-0 left-0 h-full w-full hover:flex hover:opacity-100 group-hover:flex flex-col items-center justify-end transition-all duration-300">
				<div className="h-full w-full">
					<Link
						// to={`/products/${_id}`}
						className="w-full h-full flex items-center justify-center"
					>
						<button className="bg-amber-200 font-semibold uppercase px-4 py-2 rounded-md hover:bg-amber-300 transition-all">
							view Details
						</button>
					</Link>
				</div>
				<button className="bg-amber-200 w-full font-semibold uppercase py-2 hover:bg-amber-300 transition-all">
					Add to cart
				</button>
			</div>
		</div>
	);
};

SingleProduct.propTypes = {
	product: PropTypes.object.isRequired,
};

export default SingleProduct;
