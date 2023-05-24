import "../styles/components/Nav.css";

import { Link } from "react-router-dom";

export default function Nav(props) {
	const { orientation, gap } = props;
	const style = {
		flexDirection: orientation,
		gap: gap,
		alignItems: orientation ? "start" : "center",
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
						<Link to="/">Menu</Link>
					</li>
					<li>
						<Link to="/booking">Reservations</Link>
					</li>
					<li>
						<Link href="">Order Online</Link>
					</li>
					<li>
						<Link href="">Login</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
