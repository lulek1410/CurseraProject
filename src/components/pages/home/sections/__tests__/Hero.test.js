import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hero from "../Hero";
import { MemoryRouter } from "react-router-dom";
import * as router from "react-router";

describe("Hero", () => {
	const renderComponent = () => {
		render(
			<MemoryRouter>
				<Hero />
			</MemoryRouter>
		);
	};

	const navigate = jest.fn();

	beforeEach(() => {
		jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
	});

	test("everything displays", () => {
		renderComponent();

		const restaurantName = screen.getByRole("heading", {
			name: "Little Lemon",
		});
		expect(restaurantName).toBeInTheDocument();

		const restaurantLocation = screen.getByRole("heading", { name: "Chicago" });
		expect(restaurantLocation).toBeInTheDocument();

		const description = screen.getByTestId("hero-description");
		expect(description).toBeInTheDocument();

		const reservationButton = screen.getByRole("button");
		expect(reservationButton).toBeInTheDocument();

		const foodImage = screen.getByRole("img");
		expect(foodImage).toBeInTheDocument();
		expect(foodImage).toHaveAttribute("src", "restaurantfood.jpg");
	});

	test("reservation button click", async () => {
		renderComponent();

		const reservationButton = screen.getByRole("button");
		await userEvent.click(reservationButton);
		expect(navigate).toBeCalledTimes(1);
		expect(navigate).toBeCalledWith("/booking");
	});
});
