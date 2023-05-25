import "@home_s/elements/Dish.css";

export default function Dish(props) {
	const { dishName, description, price, image } = props;

	return (
		<>
			<div id="dish">
				<div>
					<img src={image} alt="dish" loading="lazy" />
					<div className="info">
						<h3>{dishName}</h3>
						<p>{price}</p>
					</div>
					<p>{description}</p>
				</div>
				<button>Order for delivery</button>
			</div>
		</>
	);
}
