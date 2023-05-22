import "./styles/Nav.css";

export default function Nav(props) {
	const { orientation, gap } = props;
	const style = { flexDirection: orientation, gap: gap };

	return (
		<>
			<nav>
				<ul id="main-nav-list" style={style}>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">About</a>
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
