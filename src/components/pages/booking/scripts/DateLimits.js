const formatDate = (date) => {
	const monthNumber = date.getMonth();
	const month = monthNumber < 9 ? `0${monthNumber + 1}` : monthNumber + 1;
	const dayNumber = date.getDate();
	const day = dayNumber < 10 ? `0${dayNumber}` : dayNumber;
	return `${date.getFullYear()}-${month}-${day}`;
};

const getMinDate = () => {
	const minDate = new Date();
	minDate.setDate(minDate.getDate() + 1);
	return formatDate(minDate);
};

const getMaxDate = () => {
	const maxDate = new Date();
	maxDate.setDate(maxDate.getDate() + 70);
	return formatDate(maxDate);
};

export const minDate = getMinDate();
export const maxDate = getMaxDate();
