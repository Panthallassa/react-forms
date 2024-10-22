import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
	// initialize boxes as an empty array
	const [boxes, setBoxes] = useState([]);

	// spread new box into current boxes array
	const addBox = (newBox) => {
		setBoxes((boxes) => [...boxes, newBox]);
	};

	const removeBox = (id) => {
		setBoxes((boxes) =>
			boxes.filter((box) => box.id !== id)
		);
	};

	return (
		<>
			<NewBoxForm addBox={addBox} />
			<div>
				{boxes.map((box) => (
					<Box
						key={box.id}
						id={box.id}
						width={box.width}
						height={box.height}
						backgroundColor={box.backgroundColor}
						removeBox={removeBox}
					/>
				))}
			</div>
		</>
	);
}

export default BoxList;
