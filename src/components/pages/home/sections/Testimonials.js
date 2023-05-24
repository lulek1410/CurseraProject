import "../../../../styles/components/pages/home/sections/Testimonials.css";

import Testimonial from "../elements/Testimonial";

const opinions = [
	{
		author: "Wes Heriberto",
		text: `Absolutely stunning place. Don't even know where to start. Interior - modern with nice
						touches. Service - impeccable. Food - Served in a beautiful way and form so that all
						your senses can enjoy the meal.`,
	},
	{
		author: "Mukesh Fidan",
		text: `You know a restaurant has to be good when there's a small crowd gathering at the door
						before it opens at 8am, and when there's a line waiting for tables by 9am! This is
						exactly the situation at Little Lemon.`,
	},
	{
		author: "Simge Kilian",
		text: `This amazing restaurant was located next to our hotel in Chicago. Luckily we decided
						to try it out before we left. I wish we had sooner, because they had so many good
						options which we didn't have the time to try.`,
	},
	{
		author: "Zuza Finn",
		text: `The prices are great and the food was amazing. I really liked and enjoyed the atmosphere.`,
	},
	{
		author: "Sumit Neon",
		text: `It was my moms idea to go there and so we followed. I must say, it was a really good
						choice. Amazing, fresh food. Definitely going back for more.`,
	},
	{
		author: "Vishnu Anika",
		text: `Totally left me wondering why has it been so long since I've been here!`,
	},
];

export default function Testimonials() {
	return (
		<section id="testimonials">
			<h2>Testimonials</h2>
			{opinions.map((opinion) => {
				return (
					<Testimonial
						key={opinion.author}
						userName={opinion.author}
						text={opinion.text}
					/>
				);
			})}
		</section>
	);
}
