import { screen, render } from "@testing-library/react";
import Dish from "../Dish";
import { MemoryRouter } from "react-router-dom";

describe("Dish", () => {
	const dishName = "salad";
	const description = "greek salad";
	const price = "5$";
	const image = "greek salad.jpg";

	const renderComponent = () => {
		render(
			<MemoryRouter>
				<Dish
					dishName={dishName}
					description={description}
					price={price}
					image={image}
				/>
			</MemoryRouter>
		);
	};

	test("everything displays", () => {
		renderComponent();

		const dishImage = screen.getByRole("img");
		expect(dishImage).toBeInTheDocument();
		expect(dishImage).toHaveAttribute("src", image);

		const dishTitle = screen.getByRole("heading", { name: dishName });
		expect(dishTitle).toBeInTheDocument();

		const cost = screen.getByText(price);
		expect(cost).toBeInTheDocument();

		const dishDescription = screen.getByText(description);
		expect(dishDescription).toBeInTheDocument();

		const order = screen.getByRole("button");
		expect(order).toBeInTheDocument();
	});
});
