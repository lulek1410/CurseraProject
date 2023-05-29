import "@home_s/sections/Testimonials.css";

import Testimonial from "../elements/Testimonial";

const opinions = [
	{
		author: "Wes Heriberto",
		text: `Absolutely stunning place.`,
	},
	{
		author: "Mukesh Fidan",
		text: `Good and cosy, will return.`,
	},
	{
		author: "Simge Kilian",
		text: `They had so many good options which we didn't have the time to try.`,
	},
	{
		author: "Zuza Finn",
		text: `The prices are great and the food was amazing.`,
	},
	{
		author: "Sumit Neon",
		text: `Amazing, fresh food. Definitely going back for more.`,
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
