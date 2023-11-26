import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

import App from "./App";

describe("App", () => {
  it("renders", () => {
    render(<App />);
  });
});
