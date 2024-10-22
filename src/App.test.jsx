import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// Smoke test
test("App component renders without crashing", () => {
	render(<App />);
});

// Snapshot test
test("App matches snapshot", () => {
	const { asFragment } = render(<App />);
	expect(asFragment()).toMatchSnapshot();
});
