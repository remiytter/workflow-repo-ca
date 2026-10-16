import { beforeEach, describe, expect, it } from "vitest";
import { getUsername, saveUser } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name of the stored user", () => {
    const user = {
      data: {
        name: "Remi",
      },
    };

    saveUser(user);

    expect(getUsername()).toBe("Remi");
  });

  it("returns null when no user is stored", () => {
    expect(getUsername()).toBeNull();
  });
});
