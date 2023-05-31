import { useReducer } from "react";
import "@booking_s/BookingPage.css";
import { fetchBookingData, submitData } from "./scripts/BookingApi";

import BookingForm from "./sections/BookingForm";

export default function BookingPage() {
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
				handleSubmit={submitData}
			/>
		</main>
	);
}
