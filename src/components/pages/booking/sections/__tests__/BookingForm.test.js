import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BookingForm from "../BookingForm";
import { getFormFields } from "../../scripts/testCommon";

describe("BookingForm", () => {
	let availableTime = ["17:00", "19:00", "21:00"];
	const updateTime = jest.fn();
	const handleSubmitMock = jest.fn();

	const renderComponent = () => {
		render(
			<BookingForm
				availableTime={availableTime}
				updateTime={updateTime}
				handleSubmit={handleSubmitMock}
			/>
		);
	};

	test("everything displays", () => {
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

		expect(firstName).toBeInTheDocument();
		expect(surname).toBeInTheDocument();
		expect(email).toBeInTheDocument();
		expect(phoneNumber).toBeInTheDocument();
		expect(numberOfPeople).toBeInTheDocument();
		expect(selectDate).toBeInTheDocument();
		expect(selectTime).toBeInTheDocument();
		expect(ocasion).toBeInTheDocument();
		expect(submit).toBeInTheDocument();

		const time17 = screen.getByRole("option", { name: "17:00" });
		const time19 = screen.getByRole("option", { name: "19:00" });
		const time21 = screen.getByRole("option", { name: "21:00" });
		expect(time17).toBeInTheDocument();
		expect(time19).toBeInTheDocument();
		expect(time21).toBeInTheDocument();

		const ocasionNone = screen.getByRole("option", { name: "None" });
		const ocasionBirthday = screen.getByRole("option", { name: "Birthday" });
		const ocasionAnniversary = screen.getByRole("option", {
			name: "Anniversary",
		});
		expect(ocasionNone).toBeInTheDocument();
		expect(ocasionBirthday).toBeInTheDocument();
		expect(ocasionAnniversary).toBeInTheDocument();

		const optionalInfo = screen.getByText(/^Fields\s.*$/);
		expect(optionalInfo).toBeInTheDocument();

		const note = screen.getByText(/^Note.*$/);
		expect(note).toBeInTheDocument();

		expect(submit).toBeDisabled();
	});

	test("Change date", async () => {
		renderComponent();
		const selectDate = screen.getByLabelText("Select Date");
		fireEvent.change(selectDate, { target: { value: "2023-07-30" } });
		await waitFor(() => {
			expect(updateTime).toBeCalledWith("2023-07-30");
		});
	});

	describe("Field validation", () => {
		const clickSubmit = async () => {
			const submit = screen.getByRole("button", { name: "Make a Reservation" });
			expect(submit).toBeDisabled();
			await userEvent.click(submit);
		};

		test.each([
			{ role: "textbox", name: "First Name", error: "Required" },
			{ role: "textbox", name: "Surname", error: "Required" },
			{ role: "textbox", name: "Email", error: "Required" },
		])("Required user info %p", async ({ role, name, error }) => {
			renderComponent();
			const field = screen.getByRole(role, { name: name });
			await userEvent.click(field);
			await clickSubmit();
			const info = screen.getByText(error);
			expect(info).toBeInTheDocument();
		});

		test.each([
			{
				role: "textbox",
				name: "Email",
				input: "john",
				error: "Invalid email!",
			},
			{
				role: "textbox",
				name: "Phone number *",
				input: "555 123 1234",
				error: "Phone number not valid!",
			},
			{
				role: "textbox",
				name: "Phone number *",
				input: "John",
				error: "Phone number not valid!",
			},
		])("Custom validation fields %p", async ({ role, name, input, error }) => {
			renderComponent();
			const field = screen.getByRole(role, { name: name });
			await userEvent.type(field, input);
			await clickSubmit();
			const info = screen.getByText(error);
			expect(info).toBeInTheDocument();
		});
	});
});
