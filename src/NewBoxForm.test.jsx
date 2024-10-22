import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// Smoke test
test("NewBoxForm component renders without crashing", () => {
	render(<NewBoxForm addBox={() => {}} />);
});

// Snapshot test
test("App matches snapshot", () => {
	const { asFragment } = render(<NewBoxForm />);
	expect(asFragment()).toMatchSnapshot();
});
