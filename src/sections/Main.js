import "./../styles/sections/Main.css";

import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

export default function Main() {
	return (
		<>
			<main>
				<Hero />
				<Specials />
				<Testimonials />
			</main>
		</>
	);
}
