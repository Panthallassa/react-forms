import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// Smoke test
test("BoxList component renders without crashing", () => {
	render(<BoxList />);
});

// Snapshot test
test("App matches snapshot", () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

test("can add a new box", () => {
	const { getByLabelText, getByText } = render(<BoxList />);

	const widthInput = getByLabelText("Width:");
	const heightInput = getByLabelText("Height:");
	const colorInput = getByLabelText("Background Color:");
	const addButton = getByText("Add Box");

	fireEvent.change(widthInput, {
		target: { value: "100" },
	});
	fireEvent.change(heightInput, {
		target: { value: "100" },
	});
	fireEvent.change(colorInput, {
		target: { value: "red" },
	});

	fireEvent.click(addButton);

	expect(getByText("X")).toBeInTheDocument(); // Check if the box is added
});
