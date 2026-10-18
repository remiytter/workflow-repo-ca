import { describe, expect, it } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true when the path matches exactly", () => {
    expect(isActivePath("/login/", "/login/")).toBe(true);
  });

  it("returns true for the root path", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it("returns true for index.html when href is root", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when the current path includes href", () => {
    expect(isActivePath("/venue/", "/venue/index.html")).toBe(true);
  });

  it("returns false when the paths do not match", () => {
    expect(isActivePath("/login/", "/register/")).toBe(false);
  });
});
