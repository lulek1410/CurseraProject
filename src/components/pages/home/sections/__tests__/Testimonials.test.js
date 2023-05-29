import { render, screen } from "@testing-library/react";
import Testimonials from "../Testimonials";

describe("Testimonials", () => {
	const renderComponent = () => {
		render(<Testimonials />);
	};

	test("everything displays", () => {
		renderComponent();

		const heading = screen.getByRole("heading", { name: "Testimonials" });
		expect(heading).toBeInTheDocument();

		const testimonials = screen.getAllByTestId("testimonial");
		expect(testimonials).toHaveLength(6);
	});
});
