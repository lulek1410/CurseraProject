import "../../../../styles/components/pages/booking/sections/BookingForm.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { minDate, maxDate } from "../scripts/DateLimits";
import { useState } from "react";
import ValidationError from "../elements/ValidationError";

export default function BookingForm(props) {
	const { availableTime, updateTime } = props;

	const createTimeOptionsComponent = () => {
		return availableTime.map((time) => {
			return <option key={time}>{time}</option>;
		});
	};

	const [availableTimeComponent, setAvailableTimeComponent] = useState(
		createTimeOptionsComponent()
	);

	const formik = useFormik({
		initialValues: {
			name: "",
			surname: "",
			email: "",
			phoneNumber: "",
			numberOfPeople: 1,
			date: minDate,
			time: "",
			ocasion: "None",
		},
		onSubmit: (values, helpers) => {
			alert(JSON.stringify(values, null, 2));
			helpers.resetForm();
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Required"),
			surname: Yup.string().required("Required"),
			email: Yup.string().email("Invalid email!").required("Required"),
			phoneNumber: Yup.string().matches(
				/^(([+][0-9]{1,3})[ /-])?(([0-9]{1,3}[ /-]?){1,3})$/,
				"Phone number not valid"
			),
			numberOfPeople: Yup.number().max(10).min(1),
		}),
	});

	const updateAvailableTimeComponent = (value) => {
		updateTime({ date: value });
		setAvailableTimeComponent(createTimeOptionsComponent());
	};

	const isInvalid = (property) => {
		return formik.touched[property] && formik.errors[property];
	};

	const invalidStyle = (propertyName) => {
		return {
			backgroundColor: isInvalid(propertyName) && "rgb(255, 185, 185)",
		};
	};

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor="name">First Name</label>
					<input
						style={invalidStyle("name")}
						type="text"
						id="name"
						name="name"
						{...formik.getFieldProps("name")}
					/>
					<ValidationError
						isInvalid={isInvalid("name")}
						error={formik.errors.name}
					/>
				</div>
				<div>
					<label htmlFor="surname">Surname</label>
					<input
						style={invalidStyle("surname")}
						type="text"
						id="surname"
						name="surname"
						{...formik.getFieldProps("surname")}
					/>
					<ValidationError
						isInvalid={isInvalid("surname")}
						error={formik.errors.surname}
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						style={invalidStyle("email")}
						type="email"
						id="email"
						name="email"
						{...formik.getFieldProps("email")}
					/>
					<ValidationError
						isInvalid={isInvalid("email")}
						error={formik.errors.email}
					/>
				</div>
				<div>
					<label htmlFor="phone-number">Phone number *</label>
					<input
						style={invalidStyle("phoneNumber")}
						type="tel"
						id="phone-number"
						name="phone-number"
						{...formik.getFieldProps("phoneNumber")}
					/>
					<ValidationError
						isInvalid={isInvalid("phoneNumber")}
						error={formik.errors.phoneNumber}
					/>
				</div>
				<div>
					<label htmlFor="num-people">Number of People</label>
					<input
						style={invalidStyle("numberOfPeople")}
						type="number"
						id="num-people"
						name="number of people"
						{...formik.getFieldProps("numberOfPeople")}
						min={1}
						max={10}
					/>
					<ValidationError
						isInvalid={isInvalid("numberOfPeople")}
						error={formik.errors.numberOfPeople}
					/>
				</div>
				<div>
					<label htmlFor="date">Select Date</label>
					<input
						type="date"
						id="date"
						name="reservation date"
						min={minDate}
						max={maxDate}
						{...formik.getFieldProps("date")}
						onChange={(e) => {
							formik.handleChange(e);
							updateAvailableTimeComponent(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor="time">Select Time</label>
					<select
						id="time"
						name="time of reservation"
						{...formik.getFieldProps("time")}
					>
						{availableTimeComponent}
					</select>
				</div>
				<div>
					<label htmlFor="ocasion">Ocasion</label>
					<select
						id="ocasion"
						name="choose ocasion"
						{...formik.getFieldProps("ocasion")}
					>
						<option>None</option>
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
				</div>
				<div id="notes">
					<p id="">Fields marked with * are optional.</p>
					<p>
						Note: You cannot edit your reservation after submission. Please
						double-check your answer before submitting.
					</p>
				</div>
				<button
					disabled={!formik.isValid}
					type="submit"
					name="submit reservation"
				>
					Make a Reservation
				</button>
			</form>
		</>
	);
}
