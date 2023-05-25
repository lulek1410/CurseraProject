import "@booking_s/elements/ValidationError.css";

export default function ValidationError(props) {
	const { isInvalid, error } = props;

	return (
		<>
			{isInvalid ? (
				<div>
					<p id="validation-error">{error}</p>
				</div>
			) : null}
		</>
	);
}
