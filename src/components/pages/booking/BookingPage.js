import "../../../styles/components/pages/booking/BookingPage.css";

import BookingForm from "./sections/BookingForm";

export default function BookingPage() {
	return (
		<main>
			<div id="booking-title">
				<h1>Reserve a table</h1>
			</div>
			<BookingForm />
		</main>
	);
}
