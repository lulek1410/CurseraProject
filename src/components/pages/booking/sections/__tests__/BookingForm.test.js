import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BookingForm from "../BookingForm";

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

	const getFormFields = () => {
		const firstName = screen.getByRole("textbox", { name: "First Name" });
		const surname = screen.getByRole("textbox", { name: "Surname" });
		const email = screen.getByRole("textbox", { name: "Email" });
		const phoneNumber = screen.getByRole("textbox", { name: "Phone number *" });
		const numberOfPeople = screen.getByRole("spinbutton", {
			name: "Number of People",
		});
		const selectDate = screen.getByLabelText("Select Date");
		const selectTime = screen.getByRole("combobox", { name: "Select Time" });
		const ocasion = screen.getByRole("combobox", { name: "Ocasion" });
		const submit = screen.getByRole("button", { name: "Make a Reservation" });
		return [
			firstName,
			surname,
			email,
			phoneNumber,
			numberOfPeople,
			selectDate,
			selectTime,
			ocasion,
			submit,
		];
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

	test("form filled correctly", async () => {
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
		fireEvent.change(selectDate, { target: { value: "2023-05-27" } });
		await waitFor(() => {
			expect(updateTime).toBeCalledWith("2023-05-27");
		});
		await event.selectOptions(selectTime, ["17:00"]);
		await event.selectOptions(ocasion, ["None"]);
		await waitFor(() => {
			expect(submit).not.toBeDisabled();
		});

		userEvent.click(submit);

		await waitFor(() => {
			expect(handleSubmitMock).toHaveBeenCalledWith({
				date: "2023-05-27",
				email: "john.doe@someemail.com",
				name: "John",
				numberOfPeople: 2,
				ocasion: "None",
				phoneNumber: "123 123 123",
				surname: "Doe",
				time: "17:00",
			});
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
