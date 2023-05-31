import "@components_s/Nav.css";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Nav(props) {
	const { orientation = "row" } = props;
	const style = {
		flexDirection: orientation,
		alignItems: orientation === "row" ? "center" : "start",
	};

	const scrollToAbout = () => {
		const element = document.getElementById("about");
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<>
			<nav>
				<ul id="main-nav-list" style={style}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<a
							href="/#about"
							onClick={() => {
								scrollToAbout();
							}}
						>
							About
						</a>
					</li>
					<li>
						<Link to="/menu">Menu</Link>
					</li>
					<li>
						<Link to="/booking">Reservations</Link>
					</li>
					<li>
						<Link to="/order">Order Online</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

Nav.propTypes = {
	orientation: PropTypes.string,
};
