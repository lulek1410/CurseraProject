import { useReducer } from "react";
import "../../../styles/components/pages/booking/BookingPage.css";
import fetchBookingData from "./scripts/BookingApi";

import BookingForm from "./sections/BookingForm";

export default function BookingPage() {
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
			<BookingForm availableTime={availableTime} updateTime={dispatch} />
		</main>
	);
}
