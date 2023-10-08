import { createBrowserRouter } from "react-router-dom";
import AddJwewllery from "../Pages/AddJwewllery";
import AllJewellery from "../Pages/AllJewellery";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import MyJewellery from "../Pages/MyJewellery";
import Main from "../layouts/Main";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/all-jewellery", element: <AllJewellery /> },
			{ path: "/my-jewellery", element: <MyJewellery /> },
			{ path: "/add-jewellery", element: <AddJwewllery /> },
			{ path: "/blogs", element: <Blogs /> },
		],
	},
]);

export default router;
