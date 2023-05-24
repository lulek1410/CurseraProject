import "../../../../styles/components/pages/booking/sections/BookingForm.css";

import { useFormik } from "formik";
import * as Yup from "yup";

const getMinDate = () => {
	const minDate = new Date();
	minDate.setDate(minDate.getDate() + 1);
	const month =
		minDate.getMonth() < 9
			? `0${minDate.getMonth() + 1}`
			: minDate.getMonth() + 1;
	return `${minDate.getFullYear()}-${month}-${minDate.getDate()}`;
};

const getMaxDate = () => {
	const minDate = new Date();
	minDate.setDate(minDate.getDate() + 70);
	const month =
		minDate.getMonth() < 9
			? `0${minDate.getMonth() + 1}`
			: minDate.getMonth() + 1;
	return `${minDate.getFullYear()}-${month}-${minDate.getDate()}`;
};

const minDate = getMinDate();
const maxDate = getMaxDate();

export default function BookingForm() {
	const formik = useFormik({
		initialValues: {
			name: "",
			surname: "",
			email: "",
			phoneNumber: "",
			numberOfPeople: 1,
			date: minDate,
			time: "17:00",
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
			date: Yup.date().required("Required"),
		}),
	});

	const isInvalid = (property) => {
		return formik.touched[property] && formik.errors[property];
	};

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label for="name">First Name</label>
					<input
						type="text"
						id="name"
						name="name"
						{...formik.getFieldProps("name")}
					/>
					{isInvalid("name") ? <p>{formik.errors.name}</p> : null}
				</div>
				<div>
					<label for="surname">Surname</label>
					<input
						type="text"
						id="surname"
						name="surname"
						{...formik.getFieldProps("surname")}
					/>
					{isInvalid("surname") ? <p>{formik.errors.surname}</p> : null}
				</div>
				<div>
					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						{...formik.getFieldProps("email")}
					/>
					{isInvalid("email") ? <p>{formik.errors.email}</p> : null}
				</div>
				<div>
					<label for="phone-number">Phone number</label>
					<input
						type="tel"
						id="phone-number"
						name="phone-number"
						{...formik.getFieldProps("phoneNumber")}
					/>
					{isInvalid("phoneNumber") ? <p>{formik.errors.phoneNumber}</p> : null}
				</div>
				<div>
					<label for="num-people">Number of People</label>
					<input
						type="number"
						id="num-people"
						name="number of people"
						{...formik.getFieldProps("numberOfPeople")}
						min={1}
						max={10}
					/>
					{isInvalid("numberOfPeople") ? (
						<p>{formik.errors.numberOfPeople}</p>
					) : null}
				</div>
				<div>
					<label for="date">Select Date</label>
					<input
						type="date"
						id="date"
						name="reservation date"
						{...formik.getFieldProps("date")}
						min={minDate}
						max={maxDate}
					/>
					{isInvalid("date") ? <p>{formik.errors.date}</p> : null}
				</div>
				<div>
					<label for="time">Select Time</label>
					<select id="time" name="time">
						<option>17:00</option>
						<option>18:00</option>
						<option>19:00</option>
						<option>20:00</option>
						<option>21:00</option>
						<option>22:00</option>
					</select>
					{isInvalid("time") ? <p>{formik.errors.time}</p> : null}
				</div>
				<div>
					<label for="ocasion">Ocasion</label>
					<select id="ocasion" name="ocasion">
						<option>None</option>
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
					{isInvalid("ocasion") ? <p>{formik.errors.ocasion}</p> : null}
				</div>
				<button type="submit" name="submit reservation">
					Make a Reservation
				</button>
			</form>
		</>
	);
}
