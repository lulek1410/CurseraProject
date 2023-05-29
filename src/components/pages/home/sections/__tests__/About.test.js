import { render, screen } from "@testing-library/react";
import About from "../About";

describe("About", () => {
	const renderComponent = () => {
		render(<About />);
	};

	test("everything displays", () => {
		renderComponent();

		const restaurantName = screen.getByRole("heading", {
			name: "Little Lemon",
		});
		expect(restaurantName).toBeInTheDocument();

		const restaurantLocation = screen.getByRole("heading", { name: "Chicago" });
		expect(restaurantLocation).toBeInTheDocument();

		const description = screen.getByTestId("about-desctiption");
		expect(description).toBeInTheDocument();

		const chefImege = screen.getByRole("img", { name: "chef" });
		expect(chefImege).toBeInTheDocument();
		expect(chefImege).toHaveAttribute("src", "chef.jpg");

		const chefsImege = screen.getByRole("img", { name: "chefs" });
		expect(chefsImege).toBeInTheDocument();
		expect(chefsImege).toHaveAttribute("src", "chefs.jpg");
	});
});
