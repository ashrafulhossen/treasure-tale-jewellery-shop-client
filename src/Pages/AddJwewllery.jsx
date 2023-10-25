// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DragImage from "../components/shared/DragImage";
import TagsInput from "react-tagsinput";

const AddJwewllery = () => {
	// const { currentUser } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		control
		// formState: { errors }
	} = useForm();

	const [jewelleryImage, setJewelleryImage] = useState(null);

	// const uploadImage = async () => {
	// 	const formData = new FormData();
	// 	formData.append("productImage", productImage);
	// 	try {
	// 		const res = await secureAxios.post(
	// 			"/uploads/productImage",
	// 			formData,
	// 			{
	// 				headers: {
	// 					"content-type": "multipart/form-data"
	// 				}
	// 			}
	// 		);
	// 		return res.data;
	// 	} catch (error) {
	// 		console.error("Error uploading image:", error);
	// 	}
	// };

	const uploadJewellery = async (formData) => {
		console.log(formData);
		// const productImagePath = await uploadImage();
		// formData.productImage = productImagePath?.imagePath;

		// formData.reviews = [];
		// formData.isApproved = false;
		// formData.sellerUid = currentUser?.uid;

		// try {
		// 	const res = await secureAxios.post("/uploads/product", formData, {
		// 		headers: {
		// 			"content-type": "application/json"
		// 		}
		// 	});
		// 	console.log(res.data);
		// } catch (error) {
		// 	console.error("Error uploading product:", error);
		// }
	};

	return (
		<section className="bg-black">
			<div className="container mx-auto flex items-center justify-center py-20">
				<div className="w-full p-8 rounded-xl overflow-hidden flex items-center justify-center flex-col">
					<h3 className="text-center text-3xl font-bold text-amber-200 mb-3">
						Add Product
					</h3>
					<form
						className="w-[700px] space-y-4 gap-8"
						onSubmit={handleSubmit(uploadJewellery)}
						encType="multipart/form-data"
					>
						<div className="grid grid-cols-2 gap-4 w-full mt-6">
							{/* Jewellery Name */}
							<input
								className="px-3 py-[6px] rounded-md col-span-2"
								type="text"
								placeholder="Jewellery Name"
								{...register("name", { required: true })}
							/>
							{/* Jewellery Image */}
							<div className="flex col-span-2">
								<DragImage
									register={{
										...register("image", {
											required: true
										})
									}}
									productImage={jewelleryImage}
									setProductImage={setJewelleryImage}
								/>
							</div>
							{/* Jewellery Category */}
							<input
								className="px-3 py-[6px] rounded-md"
								type="text"
								placeholder="Jewellery Category"
								{...register("category", {
									required: true
								})}
							/>
							{/* Jewellery Brand */}
							<input
								className="px-3 py-[6px] rounded-md"
								type="text"
								placeholder="Jewellery Brand"
								{...register("brand", {
									required: true
								})}
							/>
							{/* Jewellery Quantity */}
							<input
								className="px-3 py-[6px] rounded-md"
								type="number"
								placeholder="Jewellery Quantity"
								{...register("quantity", {
									required: true
								})}
							/>
							{/* Jewellery Price */}
							<input
								className="px-3 py-[6px] rounded-md"
								type="number"
								placeholder="Jewellery Price"
								{...register("price", { required: true })}
							/>
							{/* Jewellery Tags */}
							<TagsInput value={[]}/>
							<input
								className="px-3 py-[6px] rounded-md col-span-2"
								type="text"
								placeholder="Jewellery Tags"
								{...register("tags", { required: true })}
							/>
							{/* Short Product Description */}
							<textarea
								className="px-3 py-[6px] rounded-md col-span-2"
								placeholder="Jewellery Short description"
								cols="30"
								rows="2"
								{...register("short_description", { required: true })}
							></textarea>
							{/* Full Product Description */}
							<textarea
								className="px-3 py-[6px] rounded-md col-span-2"
								placeholder="Jewellery Full description"
								cols="30"
								rows="5"
								{...register("full_description", { required: true })}
							></textarea>
						</div>
						<input
							className="w-full col-span-2 text-center text-black bg-amber-200 hover:bg-amber-300 text-lg font-bold rounded-md py-1 transition-colors duration-300 capitalize cursor-pointer"
							type="submit"
							value="Submit"
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default AddJwewllery;
