import "./styles/Footer.css";

import logo from "./assets/Logo.svg";

import Nav from "./Nav";

const contactInfo = ["Adress", "Phone number", "Email"];
const socialMedia = ["Facebook", "Instagram", "Twitter"];

export default function Footer() {
	return (
		<>
			<footer>
				<div>
					<img id="logo" src={logo} alt="logo" />
				</div>
				<div>
					<h1>Doormat Navigation</h1>
					<Nav orientation="column" gap="0.5rem" />
				</div>
				<div>
					<h1>Contact</h1>
					<nav>
						<ul>
							{contactInfo.map((name) => {
								return (
									<li>
										<a href="">{name}</a>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
				<div>
					<h1>Social Media Links</h1>
					<nav>
						<ul>
							{socialMedia.map((name) => {
								return (
									<li>
										<a href="">{name}</a>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
}
