import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingPage from "../BookingPage";

jest.mock("../scripts/DateLimits");

describe("BookingPage", () => {
	const renderComponent = () => {
		render(<BookingPage />);
	};

	const testTimeOptionsInDocument = (times) => {
		for (const time of times) {
			const option = screen.getByRole("option", { name: time });
			expect(option).toBeInTheDocument();
		}
	};

	test("header in document", () => {
		renderComponent();
		const header = screen.getByRole("heading", { name: "Reserve a table" });
		expect(header).toBeInTheDocument();
	});

	test("Available time update", async () => {
		renderComponent();
		const selectDate = screen.getByLabelText("Select Date");
		testTimeOptionsInDocument(["17:30", "18:30", "20:00", "21:30"]);
		fireEvent.change(selectDate, { target: { value: "2023-11-30" } });
		await waitFor(() => {
			testTimeOptionsInDocument(["17:00"]);
		});
	});
});
