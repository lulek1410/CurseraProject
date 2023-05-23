import "../../../../styles/components/pages/home/sections/Specials.css";

import greekSalad from "../../../../assets/greek salad.jpg";
import bruschetta from "../../../../assets/bruschetta.svg";
import lemonDessert from "../../../../assets/lemon dessert.jpg";

import Dish from "../elements/Dish";

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
	return (
		<>
			<section id="specials">
				<div id="title">
					<h2>Specials</h2>
					<button name="Online menu">Online Menu</button>
				</div>
				<div id="dishes">
					{specialDishes.map((dish) => {
						return (
							<Dish
								key={dish}
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
