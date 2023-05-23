import About from "./sections/About";

import Hero from "./sections/Hero";
import Specials from "./sections/Specials";
import Testimonials from "./sections/Testimonials";

export default function HomePage() {
	return (
		<>
			<main>
				<Hero />
				<Specials />
				<Testimonials />
				<About />
			</main>
		</>
	);
}
