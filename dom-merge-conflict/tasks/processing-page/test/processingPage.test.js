/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import { ProcessingPage } from "../src/processingPage";
import { getByRole, getByTestId } from "@testing-library/dom";

//waitForPromises is used to wait for next event loop in node.js which allows for all promises to be handled in the component being tested.
function waitForPromises() {
  return new Promise(process.nextTick);
}

describe("processing page", () => {
  // The MockHelper will be an object that contain {promise, callback, resolve, reject}. callback is required by LoadingPage
  let verifyServersideKeyMockHelper = null;
  let verifyLocalKeyMockHelper = null;
  let verifyBrowserMockHelper = null;
  let verifyVersionMockHelper = null;
  let verifyStableConnectionMockHelper = null;
  let container = null;

  function generateMockHelper() {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    const callback = () => promise;
    return { resolve, reject, promise, callback };
  }

  beforeEach(() => {
    verifyServersideKeyMockHelper = generateMockHelper();
    verifyLocalKeyMockHelper = generateMockHelper();
    verifyBrowserMockHelper = generateMockHelper();
    verifyVersionMockHelper = generateMockHelper();
    verifyStableConnectionMockHelper = generateMockHelper();

    container = ProcessingPage({
      verifyServersideKey: verifyServersideKeyMockHelper.callback,
      verifyLocalKey: verifyLocalKeyMockHelper.callback,
      verifyBrowser: verifyBrowserMockHelper.callback,
      verifyVersion: verifyVersionMockHelper.callback,
      verifyStableConnection: verifyStableConnectionMockHelper.callback,
    });
  });

  describe("default", () => {
    test("the info text initially displays a message to wait", () => {
      expect(getByTestId(container, "info")).toHaveTextContent(/^please wait/i);
    });

    test("the info text does not change if the verifyLocalKey promise resolves by itself", () => {
      expect.assertions(1);

      verifyLocalKeyMockHelper.resolve();

      return waitForPromises().then(() => {
        expect(getByTestId(container, "info")).toHaveTextContent(
          /^please wait/i
        );
      });
    });

    test("the info text does not change if the verifyLocalKey promise rejects by itself", () => {
      expect.assertions(1);

      verifyLocalKeyMockHelper.reject();

      return waitForPromises()
        .then(() => verifyLocalKeyMockHelper.promise)
        .catch(() => {
          expect(getByTestId(container, "info")).toHaveTextContent(
            /^please wait/i
          );
        });
    });

    test("the info text does not change if the verifyVersion promise resolves by itself", () => {
      expect.assertions(1);

      verifyVersionMockHelper.resolve();

      return waitForPromises().then(() => {
        expect(getByTestId(container, "info")).toHaveTextContent(
          /^please wait/i
        );
      });
    });

    test("the info text does not change if the verifyVersion promise rejects by itself", () => {
      expect.assertions(1);

      verifyVersionMockHelper.reject();

      return waitForPromises()
        .then(() => verifyVersionMockHelper.promise)
        .catch(() => {
          expect(getByTestId(container, "info")).toHaveTextContent(
            /^please wait/i
          );
        });
    });

    test("the info text indicates success in verification when all promises are resolved", () => {
      expect.assertions(1);

      verifyServersideKeyMockHelper.resolve();
      verifyLocalKeyMockHelper.resolve();
      verifyBrowserMockHelper.resolve();
      verifyVersionMockHelper.resolve();
      verifyStableConnectionMockHelper.resolve();

      return waitForPromises().then(() => {
        expect(getByTestId(container, "info")).toHaveTextContent(
          /^verification successful/i
        );
      });
    });
  });

  describe.skip("progress bar", () => {
    test("progress bar is initially at 0 and has a max of 5", () => {
      const progressbar = getByRole(container, "progressbar");

      expect(progressbar.value).toBe(0);
      expect(progressbar.max).toBe(5);
    });

    test("progress bar increments for each completed task", () => {
      expect.assertions(1);

      verifyServersideKeyMockHelper.resolve();
      verifyLocalKeyMockHelper.resolve();
      verifyBrowserMockHelper.resolve();
      verifyVersionMockHelper.resolve();

      return waitForPromises().then(() => {
        const progressbar = getByRole(container, "progressbar");

        expect(progressbar.value).toBe(4);
      });
    });

    test("progress bar does not increment when promises that are dependent on other promises resolve", () => {
      expect.assertions(1);

      verifyServersideKeyMockHelper.resolve();
      verifyLocalKeyMockHelper.resolve();
      verifyVersionMockHelper.resolve();

      return waitForPromises().then(() => {
        const progressbar = getByRole(container, "progressbar");

        expect(progressbar.value).toBe(2);
      });
    });
  });

  describe.skip("run independent promises concurrently", () => {
    test("info text indicates failure when verifyStableConnection rejects", () => {
      expect.assertions(1);

      verifyStableConnectionMockHelper.reject();

      return waitForPromises()
        .then(() => verifyStableConnectionMockHelper.promise)
        .catch(() => {
          expect(getByTestId(container, "info")).toHaveTextContent(
            /^verification failed/i
          );
        });
    });

    test("info text indicates failure when verifyServersideKey rejects", () => {
      expect.assertions(1);

      verifyServersideKeyMockHelper.reject();

      return waitForPromises()
        .then(() => verifyServersideKeyMockHelper.promise)
        .catch(() => {
          expect(getByTestId(container, "info")).toHaveTextContent(
            /^verification failed/i
          );
        });
    });

    test("info text indicates failure when verifyBrowser rejects", () => {
      expect.assertions(1);

      verifyBrowserMockHelper.reject();

      return waitForPromises()
        .then(() => verifyBrowserMockHelper.promise)
        .catch(() => {
          expect(getByTestId(container, "info")).toHaveTextContent(
            /^verification failed/i
          );
        });
    });

    test("info text indicates failure when verifyLocalKey rejects after verifyServerSideKey resolves", () => {
      expect.assertions(1);

      verifyServersideKeyMockHelper.resolve();
      verifyLocalKeyMockHelper.reject();

      return waitForPromises()
        .then(() => verifyLocalKeyMockHelper.promise)
        .catch(() => {
          expect(getByTestId(container, "info")).toHaveTextContent(
            /^verification failed/i
          );
        });
    });

    test("info text indicates faiulre when verifyVersion reject after verifyBrowser resolves", () => {
      expect.assertions(1);

      verifyBrowserMockHelper.resolve();
      verifyVersionMockHelper.reject();

      return waitForPromises()
        .then(() => verifyVersionMockHelper.promise)
        .catch(() => {
          expect(getByTestId(container, "info")).toHaveTextContent(
            /^verification failed/i
          );
        });
    });
  });
});
