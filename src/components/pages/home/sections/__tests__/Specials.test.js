import { render, screen } from "@testing-library/react";
import Specials from "../Specials";
import { MemoryRouter } from "react-router-dom";

describe("Specials", () => {
	const renderComponent = () => {
		render(
			<MemoryRouter>
				<Specials />
			</MemoryRouter>
		);
	};

	test("everything displays", () => {
		renderComponent();

		const title = screen.getByRole("heading", { name: "Specials" });
		expect(title).toBeInTheDocument();

		const menuButton = screen.getByRole("button", { name: "Online Menu" });
		expect(menuButton).toBeInTheDocument();

		const dishes = screen.getAllByTestId("dish");
		expect(dishes).toHaveLength(3);
	});
});
