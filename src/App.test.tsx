import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test} from "vitest";

import App from "./App";

const setup = () => render(<App />);

describe("<App />", () => {
	test("it render the app correctly", () => {
		const { getByText } = setup();

		const mainTitle = getByText(/Star Wars API/);

		expect(mainTitle).toBeInTheDocument();
	});
})