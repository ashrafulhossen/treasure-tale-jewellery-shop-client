import { createBrowserRouter } from "react-router-dom";
import AddJwewllery from "../Pages/AddJwewllery";
import AllJewellery from "../Pages/AllJewellery";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyJewellery from "../Pages/MyJewellery";
import Register from "../Pages/Register";
import Authentication from "../layouts/Authentication";
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
	{
		path: "/authentication",
		element: <Authentication />,
		children: [
			{ path: "login", element: <Login /> },
			{ path: "register", element: <Register /> },
		],
	},
]);

export default router;
