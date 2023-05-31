import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingPage from "../BookingPage";
import { fetchBookingData, submitData } from "../scripts/BookingApi";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import * as router from "react-router";
import { getFormFields } from "../scripts/testCommon";

jest.mock("../scripts/BookingApi");

describe("BookingPage", () => {
	const renderComponent = () => {
		fetchBookingData.mockReturnValueOnce(["17:30", "18:30", "20:00", "21:30"]);
		render(
			<MemoryRouter>
				<BookingPage />
			</MemoryRouter>
		);
		expect(fetchBookingData).toBeCalledTimes(1);
	};

	const testTimeOptionsInDocument = (times) => {
		for (const time of times) {
			const option = screen.getByRole("option", { name: time });
			expect(option).toBeInTheDocument();
		}
	};

	const navigate = jest.fn();

	beforeEach(() => {
		jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
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

	test("Submit correctly filled form", async () => {
		renderComponent();
		const [
			firstName,
			surname,
			email,
			phoneNumber,
			numberOfPeople,
			selectDate,
			selectTime,
			ocasion,
			submit,
		] = getFormFields();
		const event = userEvent.setup();

		await event.type(firstName, "John");
		await event.type(surname, "Doe");
		await event.type(email, "john.doe@someemail.com");
		await event.type(phoneNumber, "123 123 123");
		await event.type(numberOfPeople, "{backspace}2");
		fetchBookingData.mockReturnValue(["17:00"]);
		fireEvent.change(selectDate, { target: { value: "2023-05-27" } });
		expect(fetchBookingData).toBeCalledTimes(3);
		await event.selectOptions(selectTime, ["17:00"]);
		await event.selectOptions(ocasion, ["None"]);
		await waitFor(() => {
			expect(submit).not.toBeDisabled();
		});
		submitData.mockReturnValueOnce(true);
		await event.click(submit);
		expect(submitData).toHaveBeenCalledWith({
			date: "2023-05-27",
			email: "john.doe@someemail.com",
			name: "John",
			numberOfPeople: 2,
			ocasion: "None",
			phoneNumber: "123 123 123",
			surname: "Doe",
			time: "17:00",
		});
		expect(navigate).toHaveBeenCalledWith("/booking/confirmation");
	});
});
