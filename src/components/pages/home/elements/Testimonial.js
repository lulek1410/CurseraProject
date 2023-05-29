import "@home_s/elements/Testimonial.css";

import stars from "@assert/stars.png";

export default function Testimonial(props) {
	const { userName, text } = props;

	return (
		<div id="testimonial" data-testid="testimonial">
			<img src={stars} alt="stars" />
			<h4 id="user-name">{userName}</h4>
			<p>{text}</p>
		</div>
	);
}
