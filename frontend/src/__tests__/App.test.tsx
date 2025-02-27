import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, test } from "vitest";
import App from "../App";

test("demo", () => {
  expect(true).toBe(true);
});

describe("App component", () => {
  it("renders the main page", () => {
    render(
      <MemoryRouter>
        {" "}
        {/* Wrap App with MemoryRouter */}
        <App />
      </MemoryRouter>
    );
    // Add assertions here to test the rendered content
    expect(true).toBeTruthy();
  });
});
