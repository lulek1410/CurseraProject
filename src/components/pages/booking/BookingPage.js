import "@booking_s/BookingPage.css";

import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { fetchBookingData, submitData } from "./scripts/BookingApi";
import BookingForm from "./sections/BookingForm";

export default function BookingPage() {
	const navigate = useNavigate();

	const handleSubmit = (data) => {
		if (submitData(data)) {
			navigate("/booking/confirmation");
		}
	};

	const [availableTime, dispatch] = useReducer(
		fetchBookingData,
		fetchBookingData()
	);

	return (
		<main>
			<div id="booking-title">
				<h1>Reserve a table</h1>
			</div>
			<BookingForm
				availableTime={availableTime}
				updateTime={dispatch}
				handleSubmit={handleSubmit}
			/>
		</main>
	);
}
