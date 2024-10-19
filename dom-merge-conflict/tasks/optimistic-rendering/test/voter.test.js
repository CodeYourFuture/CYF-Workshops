/**
 * @jest-environment jsdom
 */

import {
  queryByAltText,
  getByRole,
  queryByRole,
  queryByText,
  queryAllByText,
} from "@testing-library/dom";
import "@testing-library/jest-dom";

import { Voter } from "../src/voter";

describe("like button", () => {
  describe("intial state", () => {
    const pending = new Promise(() => {});

    const container = Voter(() => pending);

    test("starts with like button", () => {
      const button = queryByRole(container, "button", {
        name: /like/i,
      });

      expect(button).not.toBeNull();
    });

    test("starts with 1 child", () => {
      expect(container.childElementCount).toBe(1);
    });
  });

  describe("resolved state", () => {
    let resolve = null;
    let container = null;

    beforeEach(() => {
      resolve = Promise.resolve();
      container = Voter(() => resolve);

      const button = getByRole(container, "button");
      button.click();
    });

    test("ends with 1 child", () => {
      expect.assertions(1);

      return resolve.then(() => {
        expect(container.childElementCount).toBe(1);
      });
    });

    test("ends with no button", async () => {
      expect.assertions(1);

      return resolve.then(() => {
        expect(queryByRole(container, "button")).toBeNull();
      });
    });
  });

  describe("rejected state", () => {
    let reject = null;
    let container = null;

    beforeEach(() => {
      reject = Promise.reject();
      container = Voter(() => reject);

      const button = queryByRole(container, "button");
      button.click();
    });

    test("displays error message", () => {
      expect.assertions(1);

      return reject.catch(() => {
        const errorMessage = queryByText(
          container,
          /we could not process your vote/i
        );

        expect(errorMessage).not.toBeNull();
      });
    });

    test("has two children after fail", () => {
      expect.assertions(1);

      return reject.catch(() => {
        expect(container.childElementCount).toBe(2);
      });
    });

    test("has button after fail", () => {
      expect.assertions(1);

      return reject.catch(() => {
        const button = queryByRole(container, "button");

        expect(button).not.toBeNull();
      });
    });

    test("pressing button after fail instantly removes error message", () => {
      expect.assertions(2);

      return reject.catch(() => {
        const button = queryByRole(container, "button");

        button.click();

        const errorMessage = queryByText(
          container,
          /we could not process your vote/i
        );

        expect(errorMessage).toBeNull();
        expect(container.childElementCount).toBe(1);
      });
    });
  });

  describe.skip("optimistic rendering", () => {
    let pending = null;
    let container = null;

    beforeEach(() => {
      pending = new Promise(() => {});
      container = Voter(() => pending);

      const button = queryByRole(container, "button");
      button.click();
    });

    test("there is 1 child immediately after click", () => {
      expect(container.childElementCount).toBe(1);
    });

    test("there is no button immediately after click", () => {
      const button = queryByRole(container, "button");

      expect(button).toBeNull();
    });
  });

  describe.skip("button as an image", () => {
    let resolve = null;
    let container = null;

    beforeEach(() => {
      resolve = Promise.resolve();
      container = Voter(() => resolve);
    });

    test("component contains no text content", () => {
      const button = queryByRole(container, "button");
      button.click();

      const text = queryAllByText(container, /(\s|\S)/i);

      expect(text).toHaveLength(0);
    });

    test("contains no empty paragraphs components", () => {
      const button = queryByRole(container, "button");
      button.click();

      const paragraphs = container.querySelectorAll("p");

      expect(paragraphs).toHaveLength(0);
    });

    test("button icon uses /media/like as src", () => {
      const icon = queryByAltText(container, /like/i);

      expect(icon.src).toMatch(/media\/like$/i);
    });

    test("once resolved icon uses /media/liked as src", () => {
      expect.assertions(1);

      const button = queryByRole(container, "button");
      button.click();

      return resolve.then(() => {
        const icon = queryByAltText(container, /liked/i);

        expect(icon.src).toMatch(/media\/liked$/i);
      });
    });
  });
});
