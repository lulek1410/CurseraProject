import "@home_s/elements/Dish.css";
import { useNavigate } from "react-router-dom";

export default function Dish(props) {
	const { dishName, description, price, image } = props;

	const navigate = useNavigate();

	return (
		<>
			<div id="dish" data-testid="dish">
				<div>
					<img src={image} alt="dish" loading="lazy" />
					<div className="info">
						<h3>{dishName}</h3>
						<p>{price}</p>
					</div>
					<p>{description}</p>
				</div>
				<button
					onClick={() => {
						navigate("/order");
					}}
				>
					Order for delivery
				</button>
			</div>
		</>
	);
}
