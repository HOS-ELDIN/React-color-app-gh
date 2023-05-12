// import logo from "./logo.svg";
import MyInput from "./MyInput";
import Square from "./Square";
import { useState } from "react";
import colorNames from "colornames";
function App() {
	const [colorName, setColorName] = useState("");
	const [hexColor, sethexColor] = useState("");
	const [darkText, setDarkText] = useState(true);

	const handleInput = (e) => {
		setColorName(e.target.value);
		sethexColor(e.target.value[0] === "#" ? null : colorNames(e.target.value));
	};

	const handleTextColor = () => {
		setDarkText(!darkText);
		console.log("done");
	};

	return (
		<div className="App">
			<Square
				colorName={colorName}
				hexColor={hexColor}
				darkText={darkText}
				handleTextColor={handleTextColor}
			/>
			<MyInput handleInput={handleInput} />
		</div>
	);
}

export default App;
