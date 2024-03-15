/**
 * @jest-environment jsdom
 */

import { getByTestId } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { ProfilePreview } from "../src/profilePreview";

describe("profile preview", () => {
  describe("default options", () => {
    const profile = {
      pictureSrc: "/test",
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet.",
    };
    //Freeze the object so that we can reference the properties in test and assume they are the same as above.
    Object.freeze(profile);

    const container = ProfilePreview(profile);

    test("contains provided image", () => {
      const image = getByTestId(container, "profilePicture");

      expect(image.src).toContain(profile.pictureSrc);
    });

    test("contains provided name", () => {
      const name = getByTestId(container, "profileName");

      expect(name).toHaveTextContent(profile.name);
    });

    test("contains provided bio", () => {
      const bio = getByTestId(container, "profileBio");

      expect(bio).toHaveTextContent(profile.bio);
    });

    test("contains 3 elements", () => {
      expect(container.childElementCount).toBe(3);
    });
  });

  describe.skip("available option", () => {
    let profile = {};

    beforeEach(() => {
      profile = {
        pictureSrc: "/null",
        name: "N/A",
        bio: "N/A",
      };
    });

    test("only notice that preview is unavailable is displayed with shortform on, available off", () => {
      profile.available = false;
      profile.shortForm = true;

      Object.freeze(profile);

      const container = ProfilePreview(profile, {
        available: false,
        shortForm: true,
      });

      expect(container.childElementCount).toBe(1);
      expect(container.children[0]).toHaveTextContent(
        "Profile preview unavailable"
      );
    });

    test("only notice that preview is unavailable is displayed with shortform off, available off", () => {
      Object.freeze(profile);

      const container = ProfilePreview(profile, {
        available: false,
        shortForm: false,
      });

      expect(container.childElementCount).toBe(1);
      expect(container.children[0]).toHaveTextContent(
        "Profile preview unavailable"
      );
    });
  });

  describe.skip("short form option", () => {
    const profile = {
      pictureSrc: "/picture",
      name: "Jane Doe",
      bio: "Duis porta neque sed eros.",
    };
    Object.freeze(profile);

    const container = ProfilePreview(profile, {
      shortForm: true,
    });

    test("contains provided image", () => {
      const image = getByTestId(container, "profilePicture");

      expect(image.src).toContain(profile.pictureSrc);
    });

    test("contains provided name", () => {
      const name = getByTestId(container, "profileName");

      expect(name).toHaveTextContent(profile.name);
    });

    test("contains 2 elements", () => {
      expect(container.childElementCount).toBe(2);
    });
  });
});
