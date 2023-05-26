import "@home_s/sections/Hero.css";

import restaurantFood from "@assert/restaurantfood.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
	const navigate = useNavigate();

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
					<button
						name="reservation"
						onClick={() => {
							navigate("/booking");
						}}
					>
						Reserve a Table
					</button>
				</div>
				<img src={restaurantFood} alt="food" />
			</section>
		</>
	);
}
