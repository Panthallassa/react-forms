import React, { useState } from "react";
import "./App.css";
import BoxList from "./BoxList";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Color Box Maker</h1>
			<BoxList />
		</>
	);
}

export default App;
