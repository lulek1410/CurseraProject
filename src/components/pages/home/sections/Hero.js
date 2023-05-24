import "../../../../styles/components/pages/home/sections/Hero.css";
import "../../../../styles/common/common.css";

import restaurantFood from "../../../../assets/restaurantfood.jpg";

export default function Hero() {
	return (
		<>
			<section id="hero" className="restaurant-description">
				<div>
					<h1 className="color-main-y">Little Lemon</h1>
					<h2 className="color-main-y">Chicago</h2>
					<p>
						We are a family owned Mediterranean restaurant. Located on Maldove
						Street in Chicago, Illinois. We focus on traditionsl recipes served
						with a modern twist.
					</p>
					<button name="reservation">Reserve a Table</button>
				</div>
				<img src={restaurantFood} alt="food" />
			</section>
		</>
	);
}