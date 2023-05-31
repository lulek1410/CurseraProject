import "@booking_s/sections/BookingForm.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { minDate, maxDate } from "../scripts/DateLimits";
import { useCallback, useEffect, useState } from "react";

export default function BookingForm(props) {
	const { availableTime, updateTime, handleSubmit } = props;
	const validation = Yup.object({
		name: Yup.string().required("Required"),
		surname: Yup.string().required("Required"),
		email: Yup.string().email("Invalid email!").required("Required"),
		phoneNumber: Yup.string().matches(
			/^(([+][0-9]{1,3})[ /-])?(([0-9]{1,3}[ /-]?){1,3})$/,
			"Phone number not valid!"
		),
		numberOfPeople: Yup.number().max(10).min(1).required("Required"),
	});

	const createTimeOptionsComponent = useCallback(() => {
		return availableTime.map((time) => {
			return <option key={time}>{time}</option>;
		});
	}, [availableTime]);

	const [availableTimeComponent, setAvailableTimeComponent] = useState(
		createTimeOptionsComponent()
	);

	useEffect(() => {
		setAvailableTimeComponent(createTimeOptionsComponent());
	}, [availableTime, createTimeOptionsComponent]);

	const invalidStyle = (isInvalid) => {
		return {
			backgroundColor: isInvalid && "rgb(255, 185, 185)",
		};
	};

	return (
		<>
			<Formik
				initialValues={{
					name: "",
					surname: "",
					email: "",
					phoneNumber: "",
					numberOfPeople: 1,
					date: minDate,
					time: availableTime[0],
					ocasion: "None",
				}}
				onSubmit={(values, helpers) => {
					handleSubmit(values);
					helpers.resetForm();
				}}
				validationSchema={validation}
			>
				{({ isValid, dirty, touched, errors, handleChange }) => (
					<Form>
						<div>
							<label htmlFor="name">First Name</label>
							<Field
								style={invalidStyle(touched.name && errors.name)}
								id="name"
								name="name"
								type="text"
							/>
							<ErrorMessage name="name" className="validation-error" />
						</div>
						<div>
							<label htmlFor="surname">Surname</label>
							<Field
								style={invalidStyle(touched.surname && errors.surname)}
								id="surname"
								name="surname"
								type="text"
							/>
							<ErrorMessage name="surname" className="validation-error" />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<Field
								style={invalidStyle(touched.email && errors.email)}
								id="email"
								name="email"
								type="email"
							/>
							<ErrorMessage name="email" className="validation-error" />
						</div>
						<div>
							<label htmlFor="phone-number">Phone number *</label>
							<Field
								style={invalidStyle(touched.phoneNumber && errors.phoneNumber)}
								id="phone-number"
								name="phoneNumber"
								type="tel"
							/>
							<ErrorMessage name="phoneNumber" className="validation-error" />
						</div>
						<div>
							<label htmlFor="num-people">Number of People</label>
							<Field
								style={invalidStyle(
									touched.numberOfPeople && errors.numberOfPeople
								)}
								id="num-people"
								name="numberOfPeople"
								type="number"
							/>
							<ErrorMessage
								name="numberOfPeople"
								className="validation-error"
							/>
						</div>
						<div>
							<label htmlFor="date">Select Date</label>
							<Field
								id="date"
								name="date"
								type="date"
								min={minDate}
								max={maxDate}
								onChange={(e) => {
									handleChange(e);
									updateTime(e.target.value);
								}}
							/>
						</div>
						<div>
							<label htmlFor="time">Select Time</label>
							<Field id="time" name="time" as="select">
								{availableTimeComponent}
							</Field>
						</div>
						<div>
							<label htmlFor="ocasion">Ocasion</label>
							<Field id="ocasion" name="ocasion" as="select">
								<option>None</option>
								<option>Birthday</option>
								<option>Anniversary</option>
							</Field>
						</div>
						<small id="notes">
							<p>Fields marked with * are optional.</p>
							<p>
								Note: You cannot edit your reservation after submission. Please
								double-check your answer before submitting.
							</p>
						</small>
						<button
							disabled={!(isValid && dirty)}
							type="submit"
							name="submit reservation"
						>
							Make a Reservation
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
}
