import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { HiMiniFolder, HiMiniSquare3Stack3D, HiTrash } from "react-icons/hi2";

const DragImage = ({ register, productImage, setProductImage }) => {
	const onImageDrop = (e) => {
		setProductImage(e.target.files[0]);
	};

	const removeImage = () => {
		setProductImage(null);
	};

	return (
		<>
			{productImage ? (
				<div className="w-full flex items-center gap-2 border-2 border-amber-200 rounded-md p-3">
					<HiMiniFolder className="text-amber-200 w-6 h-6" />
					<p className="text-amber-200 text-lg">
						{productImage?.name}
					</p>
					<button
						onClick={removeImage}
						className="ml-auto p-1 text-amber-200 hover:text-light-red transition-colors duration-300"
					>
						<HiTrash className="w-5 h-5" />
					</button>
				</div>
			) : (
				<div className="w-full relative overflow-hidden p-4 rounded-md outline-dashed outline-amber-200 cursor-pointer">
					<div className="flex items-center justify-center gap-2 w-full">
						<HiMiniSquare3Stack3D className="h-6 w-6 text-amber-200" />
						<p className="text-amber-200 font-semibold">
							Drag & Drop Image Here
						</p>
					</div>
					<input
						className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
						type="file"
						{...register}
						onChange={onImageDrop}
					/>
				</div>
			)}
		</>
	);
};

DragImage.propTypes = {
	register: PropTypes.object.isRequired,
	productImage: PropTypes.object,
	setProductImage: PropTypes.func.isRequired
};

export default DragImage;
