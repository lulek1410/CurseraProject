import { useReducer } from "react";
import "@booking_s/BookingPage.css";
import fetchBookingData from "./scripts/BookingApi";

import BookingForm from "./sections/BookingForm";

export default function BookingPage() {
	const handleSubmit = (values) => {
		alert(JSON.stringify(values, null, 2));
	};

	const updateAvailableTime = (state, action) => {
		const data = fetchBookingData(action.date);
		return data;
	};

	const [availableTime, dispatch] = useReducer(
		updateAvailableTime,
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
