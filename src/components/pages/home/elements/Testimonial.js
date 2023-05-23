import "../../../../styles/components/pages/home/elements/Testimonial.css";

import stars from "../../../../assets/stars.png";

export default function Testimonial(props) {
	const { userName, text } = props;

	return (
		<div id="testimonial">
			<img src={stars} alt="stars" />
			<h4 id="user-name">{userName}</h4>
			<p>{text}</p>
		</div>
	);
}
