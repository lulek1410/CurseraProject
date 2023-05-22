import "./styles/Header.css";

import logo from "./assets/Logo.svg";

import Nav from "./Nav";

export default function Header() {
	return (
		<>
			<header>
				<img id="logo" src={logo} alt="logo" />
				<Nav />
			</header>
		</>
	);
}
