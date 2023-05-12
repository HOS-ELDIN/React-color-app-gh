import React from "react";

const Square = ({ colorName, hexColor, darkText, handleTextColor }) => {
	return (
		<div
			className="box"
			style={{
				backgroundColor: colorName,
				color: darkText ? "black" : "white",
			}}
			onClick={handleTextColor}
		>
			<p className="colorName">
				{colorName ? colorName : "Enter A Color Name"}
			</p>
			<p>{hexColor ? hexColor : null}</p>
		</div>
	);
};

export default Square;
