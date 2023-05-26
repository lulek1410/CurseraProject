import {render, screen } from "@testing-library/react";
import Header from "../Header";
import { MemoryRouter } from "react-router-dom";

describe("Footer", () => {
	const renderComponent = () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
	};

	test("logo", () => {
		renderComponent();

		const imageLink = screen.getByTestId("image-link");
		expect(imageLink).toBeInTheDocument();
		expect(imageLink).toHaveAttribute("href", "/");
	});
});
