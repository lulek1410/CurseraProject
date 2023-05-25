import "@home_s/sections/About.css";

import chef from "@assert/chef.jpg";
import chefs from "@assert/chefs.jpg";

export default function About() {
	return (
		<section id="about" className="restaurant-description">
			<div>
				<h1 className="color-main-y">Little Lemon</h1>
				<h2 className="color-main-y">Chicago</h2>
				<p>
					Little Lemon is a charming neighborhood bistro that serves simple food
					and classic coctails in a lively but casual environment. The
					restaurant features a locally-sourced menu with daily specials
				</p>
			</div>
			<div id="chefs-images">
				<img src={chef} alt="chef" loading="lazy" />
				<img src={chefs} alt="chefs" loading="lazy" />
			</div>
		</section>
	);
}
