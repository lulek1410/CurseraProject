import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingPage from "../BookingPage";
import { fetchBookingData } from "../scripts/BookingApi";

jest.mock("../scripts/BookingApi");

describe("BookingPage", () => {
	const renderComponent = () => {
		fetchBookingData.mockReturnValueOnce(["17:30", "18:30", "20:00", "21:30"]);
		render(<BookingPage />);
		expect(fetchBookingData).toBeCalledTimes(1);
	};

	const testTimeOptionsInDocument = (times) => {
		for (const time of times) {
			const option = screen.getByRole("option", { name: time });
			expect(option).toBeInTheDocument();
		}
	};

	beforeEach(() => {
		fetchBookingData.mockClear();
	});

	test("header in document", () => {
		renderComponent();
		const header = screen.getByRole("heading", { name: "Reserve a table" });
		expect(header).toBeInTheDocument();
	});

	test("Available time update", async () => {
		renderComponent();
		const selectDate = screen.getByLabelText("Select Date");
		testTimeOptionsInDocument(["17:30", "18:30", "20:00", "21:30"]);
		fetchBookingData.mockReturnValue(["17:00"]);
		fireEvent.change(selectDate, { target: { value: "2023-11-30" } });
		expect(fetchBookingData).toBeCalledTimes(3);
		await waitFor(() => {
			testTimeOptionsInDocument(["17:00"]);
		});
	});
});
