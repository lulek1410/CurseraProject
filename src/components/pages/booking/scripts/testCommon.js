import { screen } from "@testing-library/react";

export const getFormFields = () => {
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
