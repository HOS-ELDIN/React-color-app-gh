import React from "react";

const MyInput = ({ handleInput }) => {
	return (
		<input
			type="text"
			onChange={handleInput}
			autoFocus
			placeholder="Enter Your Color"
		/>
	);
};

export default MyInput;
