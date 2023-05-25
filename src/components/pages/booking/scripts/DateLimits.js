const getMinDate = () => {
	const minDate = new Date();
	minDate.setDate(minDate.getDate() + 1);
	const month =
		minDate.getMonth() < 9
			? `0${minDate.getMonth() + 1}`
			: minDate.getMonth() + 1;
	return `${minDate.getFullYear()}-${month}-${minDate.getDate()}`;
};

const getMaxDate = () => {
	const minDate = new Date();
	minDate.setDate(minDate.getDate() + 70);
	const month =
		minDate.getMonth() < 9
			? `0${minDate.getMonth() + 1}`
			: minDate.getMonth() + 1;
	return `${minDate.getFullYear()}-${month}-${minDate.getDate()}`;
};

export const minDate = getMinDate();
export const maxDate = getMaxDate();