import { fetchBookingData, submitData } from "../BookingApi";

describe("BookingApi", () => {
	test("submitData", () => {
		expect(submitData).toBeTruthy();
	});

	test("fetchBookingData", () => {
		expect(fetchBookingData("2023-07-25")).toStrictEqual([
			"17:00",
			"18:30",
			"19:00",
			"22:30",
		]);
	});
});
