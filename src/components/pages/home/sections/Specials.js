import "@home_s/sections/Specials.css";

import greekSalad from "@assert/greek salad.jpg";
import bruschetta from "@assert/bruschetta.svg";
import lemonDessert from "@assert/lemon dessert.jpg";

import Dish from "../elements/Dish";
import { useNavigate } from "react-router-dom";

const specialDishes = [
	{
		name: "Greek salad",
		description: `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style
                  feta cheese, garnished with crunchy garlic and rosemary croutons`,
		price: "12.99$",
		image: greekSalad,
	},
	{
		name: "Bruschetta",
		description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and
                  seasoned with salt and olive oil`,
		price: "5.99$",
		image: bruschetta,
	},
	{
		name: "Lemon Dessert",
		description: `This comes straight from grandma's recipe book, every last ingredient has been
                  sourced and is as authentic as can be imagined`,
		price: "5.00$",
		image: lemonDessert,
	},
];

export default function Specials() {
	const navigate = useNavigate();

	return (
		<>
			<section id="specials">
				<div id="title">
					<h2>Specials</h2>
					<button
						name="Online menu"
						onClick={() => {
							navigate("/menu");
						}}
					>
						Online Menu
					</button>
				</div>
				<div id="dishes">
					{specialDishes.map((dish) => {
						return (
							<Dish
								key={dish.name}
								dishName={dish.name}
								description={dish.description}
								price={dish.price}
								image={dish.image}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
}
