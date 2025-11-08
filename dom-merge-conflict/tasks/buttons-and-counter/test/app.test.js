/**
 * @jest-environment jsdom
 */

import { getByTestId, getByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { App } from "../src/app";

describe("button and counter", () => {
  let container = App();

  // Reset the App before each test
  beforeEach(() => {
    container = App();
  });

  test("contains description paragraph with mention of 'increment' in header", () => {
    expect(
      container.querySelector("header").querySelector("p")
    ).toHaveTextContent(/increment/i);
  });

  test("counter starts at 0", () => {
    expect(getByTestId(container, "counter")).toHaveTextContent(/^0$/);
  });

  test("pressing Increment increases the counter", () => {
    const button = getByRole(container, "button", {
      name: "Increment",
    });
    button.click();
    button.click();

    expect(getByTestId(container, "counter")).toHaveTextContent(/^2$/);
  });

  describe("decrement button", () => {
    test("pressing Decrement decreases the counter", () => {
      const button = getByRole(container, "button", {
        name: "Decrement",
      });
      button.click();
      button.click();
      button.click();

      expect(getByTestId(container, "counter")).toHaveTextContent(/^-3$/);
    });

    test("contains description paragraph with mention of 'decrement' in header", () => {
      expect(
        container.querySelector("header").querySelector("p")
      ).toHaveTextContent(/decrement/i);
    });
  });
});
