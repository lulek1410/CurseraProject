import "../styles/components/Nav.css";

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
						<a href="">Home</a>
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
						<a href="">Menu</a>
					</li>
					<li>
						<a href="">Reservations</a>
					</li>
					<li>
						<a href="">Order Online</a>
					</li>
					<li>
						<a href="">Login</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
