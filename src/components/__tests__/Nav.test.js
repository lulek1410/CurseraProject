import { render, screen } from "@testing-library/react";
import Nav from "../Nav";
import { MemoryRouter } from "react-router-dom";

describe("Footer", () => {
	const renderComponent = (orientation = "row") => {
		render(
			<MemoryRouter>
				<Nav orientation={orientation} />
			</MemoryRouter>
		);
	};

	test.each([
		{ name: "Home", link: "/" },
		{ name: "About", link: "/#about" },
		{ name: "Menu", link: "/menu" },
		{ name: "Reservations", link: "/booking" },
		{ name: "Order Online", link: "/order" },
		{ name: "Login", link: "/login" },
	])("logo", ({ name, link }) => {
		renderComponent();

		const navigationLink = screen.getByRole("link", { name: name });
		expect(navigationLink).toBeInTheDocument();
		expect(navigationLink).toHaveAttribute("href", link);
	});

	test.each([
		{ orientation: "row", alignment: "center" },
		{ orientation: "column", alignment: "start" },
	])("prop orientation change", ({ orientation, alignment }) => {
		renderComponent(orientation);

		const list = screen.getByRole("list");
		expect(list).toBeInTheDocument();
		const expected = `flex-direction: ${orientation}; align-items: ${alignment};`;
		expect(list).toHaveAttribute("style", expected);
	});
});
