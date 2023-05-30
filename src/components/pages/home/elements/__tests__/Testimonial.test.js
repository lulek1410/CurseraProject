import { render, screen } from "@testing-library/react";
import Testimonial from "../Testimonial";

describe("Testimonial", () => {
	const userName = "Michael Jameson";
	const text = "Great place. Recommend.";

	const renderComponent = () => {
		render(<Testimonial userName={userName} text={text} />);
	};

	test("everything displays", () => {
		renderComponent();

		const starsImage = screen.getByRole("img");
		expect(starsImage).toBeInTheDocument();
		expect(starsImage).toHaveAttribute("src", "stars.png");

		const name = screen.getByRole("heading", { name: userName });
		expect(name).toBeInTheDocument();

		const review = screen.getByText(text);
		expect(review).toBeInTheDocument();
	});
});
