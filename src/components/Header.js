import "../styles/components/Header.css";

import logo from "../assets/Logo.svg";

import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header>
				<Link className="image-link" to="/">
					<img id="logo" src={logo} alt="logo" />
				</Link>
				<Nav />
			</header>
		</>
	);
}
