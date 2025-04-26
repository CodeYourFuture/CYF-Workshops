/**
 * @jest-environment jsdom
 */

import { getByTestId } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { ProfilePreview } from "../src/profilePreview";

describe("profile preview", () => {
  describe("default options", () => {
    test("contains profile info", () => {
      const profile = {
        pictureSrc: "/test",
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet.",
      };
      //Freeze the object so that we can reference the properties in test and assume they are the same as above.
      Object.freeze(profile);

      const container = ProfilePreview(profile);

      const image = getByTestId(container, "profilePicture");
      const name = getByTestId(container, "profileName");
      const bio = getByTestId(container, "profileBio");

      expect(image.src).toContain(profile.pictureSrc);
      expect(name).toHaveTextContent(profile.name);
      expect(bio).toHaveTextContent(profile.bio);
      expect(container.childElementCount).toBe(3);
    });
  });

  describe("available option", () => {
    test("only notice that preview is unavailable is displayed with shortform on, available off", () => {
      const profile = {
        pictureSrc: "/null",
        name: "N/A",
        bio: "N/A",
      };
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
      const profile = {
        pictureSrc: "/null",
        name: "N/A",
        bio: "N/A",
      };
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

  describe("short form option", () => {
    test("contains profile info except the bio with shortform on", () => {
      const profile = {
        pictureSrc: "/picture",
        name: "Jane Doe",
        bio: "Duis porta neque sed eros.",
      };
      Object.freeze(profile);

      const container = ProfilePreview(profile, {
        shortForm: true,
      });

      const image = getByTestId(container, "profilePicture");
      const name = getByTestId(container, "profileName");

      expect(image.src).toContain(profile.pictureSrc);
      expect(name).toHaveTextContent(profile.name);
      expect(container.childElementCount).toBe(2);
    });
  });

  describe("additional info option", () => {
    test("displays additional info when showAdditionalInfo is true", () => {
      const profile = {
        pictureSrc: "/picture",
        name: "Alex Smith",
        bio: "Sample bio.",
      };
      Object.freeze(profile);

      const container = ProfilePreview(profile, { showAdditionalInfo: true });

      expect(container.childElementCount).toBe(4); // image, name, bio, additional info
      expect(container.children[3]).toHaveTextContent(
        "Click to view full profile"
      );
    });

    test("does not display additional info when showAdditionalInfo is false", () => {
      const profile = {
        pictureSrc: "/picture",
        name: "Alex Smith",
        bio: "Sample bio.",
      };
      Object.freeze(profile);

      const container = ProfilePreview(profile, { showAdditionalInfo: false });

      expect(container.childElementCount).toBe(3); // image, name, bio
      const textContents = Array.from(container.children).map(
        (el) => el.textContent
      );
      expect(textContents).not.toContain("Click to view full profile");
    });

    test("does not display additional info when showAdditionalInfo is missing", () => {
      const profile = {
        pictureSrc: "/picture",
        name: "Alex Smith",
        bio: "Sample bio.",
      };
      Object.freeze(profile);

      const container = ProfilePreview(profile);

      expect(container.childElementCount).toBe(3); // image, name, bio
      const textContents = Array.from(container.children).map(
        (el) => el.textContent
      );
      expect(textContents).not.toContain("Click to view full profile");
    });
  });
});
