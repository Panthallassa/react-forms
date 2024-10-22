import React from "react";

function Box({
	id,
	width,
	height,
	backgroundColor,
	removeBox,
}) {
	const handleRemove = () => removeBox(id);

	return (
		<>
			<div
				style={{
					width: `${width}px`,
					height: `${height}px`,
					backgroundColor: backgroundColor,
				}}
			></div>
			<button onClick={handleRemove}>X</button>
		</>
	);
}

export default Box;
