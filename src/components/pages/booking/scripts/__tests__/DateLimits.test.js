describe("DateLimits", () => {
	let dateLimits;

	beforeAll(() => {
		jest.useFakeTimers().setSystemTime(new Date("2023-06-24"));
		dateLimits = require("../DateLimits");
	});

	test("minDate", () => {
		expect(dateLimits.minDate).toBe("2023-06-25");
	});

	test("maxDate", () => {
		expect(dateLimits.maxDate).toBe("2023-09-02");
	});
});
