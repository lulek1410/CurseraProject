import { Routes, Route, Outlet, Link } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/home/HomePage";
import BookingPage from "./components/pages/booking/BookingPage";

function App() {
	return (
		<div className="App">
			<Header />
			<HomePage />
			{/* <Routes>
				<Route path="/" element={<HomePage />}>
					<Route path="/booking" element={<BookingPage />} />
				</Route>
			</Routes> */}
			<Footer />
		</div>
	);
}

export default App;
