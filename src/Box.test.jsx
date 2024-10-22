import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

// Smoke test
test("Box component renders without crashing", () => {
	render(
		<Box
			id={1}
			width={100}
			height={100}
			backgroundColor='red'
			removeBox={() => {}}
		/>
	);
});

// Snapshot test
test("App matches snapshot", () => {
	const { asFragment } = render(<Box />);
	expect(asFragment()).toMatchSnapshot();
});
