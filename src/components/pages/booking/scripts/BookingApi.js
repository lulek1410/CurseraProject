import alea from "seedrandom";
import { minDate } from "./DateLimits";

export function fetchBookingData(date = minDate) {
	let result = [];
	const rng = new alea(date);
	for (let i = 17; i < 23; ++i) {
		if (rng() < 0.5) {
			result.push(i + ":00");
		}
		if (rng() < 0.5) {
			result.push(i + ":30");
		}
	}
	return result;
}

export const submitData = function (formData) {
	return true;
};
