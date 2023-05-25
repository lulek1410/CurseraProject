import "../styles/components/Footer.css";

import logo from "../assets/footer-logo.png";

import Nav from "./Nav";
import { Link } from "react-router-dom";

const contactInfo = [
	"2345 Maldove Way, Chicago Illinois",
	"(532)-659-8914",
	"info@littlelemon.com",
];
const socialMedia = [
	{ name: "Facebook", link: "https://www.facebook.com" },
	{ name: "Instagram", link: "https://www.instagram.com" },
	{ name: "Twitter", link: "https://twitter.com" },
];

export default function Footer() {
	return (
		<>
			<footer>
				<div id="logo-container">
					<Link className="image-link" to="/">
						<img id="footer-logo" src={logo} alt="logo" />
					</Link>
				</div>
				<div>
					<h3>Navigation</h3>
					<Nav orientation="column" gap="0.5rem" />
				</div>
				<div id="contact-social-container">
					<div>
						<h3>Contact</h3>
						<nav>
							<ul>
								{contactInfo.map((name) => {
									return <li key={name}>{name}</li>;
								})}
							</ul>
						</nav>
					</div>
					<div>
						<h3>Social Media</h3>
						<nav>
							<ul>
								{socialMedia.map((social) => {
									return (
										<li key={social.name}>
											<a href={social.link}>{social.name}</a>
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
