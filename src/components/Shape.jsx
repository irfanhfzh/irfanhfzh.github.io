/* eslint-disable react/prop-types */
const Shape = ({ type, src, classname }) => {
	return (
		<img
			src={src}
			alt={type}
			className={`object-cover w-full h-full border border-white animate-bounceIn ${classname}`}
		/>
	);
};

export default Shape;
