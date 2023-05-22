import "./../styles/sections/Footer.css";

import logo from "./../assets/footer-logo.png";

import Nav from "../components/Nav";

const contactInfo = ["Adress", "Phone number", "Email"];
const socialMedia = ["Facebook", "Instagram", "Twitter"];

export default function Footer() {
	return (
		<>
			<footer>
				<div id="logo-container">
					<img id="footer-logo" src={logo} alt="logo" />
				</div>
				<div>
					<h3>Doormat Navigation</h3>
					<Nav orientation="column" gap="0.5rem" />
				</div>
				<div id="contact-social-container">
					<div>
						<h3>Contact</h3>
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
						<h3>Social Media</h3>
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
				</div>
			</footer>
		</>
	);
}
