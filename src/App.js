import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/home/HomePage";
import BookingPage from "./components/pages/booking/BookingPage";
import Confirmation from "./components/pages/booking/ConfirmationPage";
import ToDo from "./components/pages/todo/ToDo";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/booking",
				element: <BookingPage />,
			},
			{
				path: "/booking/confirmation",
				element: <Confirmation />,
			},
			{
				path: "/menu",
				element: <ToDo />,
			},
			{
				path: "/order",
				element: <ToDo />,
			},
			{
				path: "/login",
				element: <ToDo />,
			},
		],
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
