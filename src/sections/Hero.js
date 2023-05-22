import "./../styles/sections/Hero.css";

import restaurantFood from "./../assets/restaurantfood.jpg";

export default function Hero() {
	return (
		<>
			<section id="hero">
				<div>
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						Little Lemon is a charming neighborhood bistro that serves simple
						food and classic coctails in a lively but casual environment. The
						restaurant features a locally-sourced menu with daily specials
					</p>
					<button name="reservation">Reserve a Table</button>
				</div>
				<img src={restaurantFood} alt="food" />
			</section>
		</>
	);
}
