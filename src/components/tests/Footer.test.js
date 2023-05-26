import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { MemoryRouter } from "react-router-dom";

describe("Footer", () => {
	const renderComponent = () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);
	};

	test.each([
		{ name: "Facebook", link: "https://www.facebook.com" },
		{ name: "Instagram", link: "https://www.instagram.com" },
		{ name: "Twitter", link: "https://twitter.com" },
	])("socials links", ({ name, link }) => {
		renderComponent();

		const social = screen.getByRole("link", { name: name });
		expect(social).toBeInTheDocument();
		expect(social).toHaveAttribute("href", link);
	});

	test.each([
		{ name: "address", value: "2345 Maldove Way, Chicago Illinois" },
		{ name: "phone-number", value: "(532)-659-8914" },
		{ name: "email", value: "info@littlelemon.com" },
	])("contact info", ({ name, value }) => {
		renderComponent();

		const contact = screen.getByTestId(name);
		expect(contact).toBeInTheDocument();
		expect(contact.textContent).toBe(value);
	});

	test("logo", () => {
		renderComponent();

		const imageLink = screen.getByTestId("image-link");
		expect(imageLink).toBeInTheDocument();
		expect(imageLink).toHaveAttribute("href", "/");
	});

	test.each(["Navigation", "Contact", "Social Media"])("headers", (text) => {
		renderComponent();

		const header = screen.getByRole("heading", { name: text });
		expect(header).toBeInTheDocument();
	});
});
