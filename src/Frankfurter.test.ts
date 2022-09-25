import { describe, expect, it } from "vitest";

import { Frankfurter } from "./Frankfurter";

describe("Frankfurter", () => {
  it("Type is instanceof", async () => {
    const frankfurter = new Frankfurter();

    expect(frankfurter).toBeInstanceOf(Frankfurter);
  });

  it("Return latest type is object", async () => {
    const frankfurter = new Frankfurter();

    expect(await frankfurter.latest()).toBeTypeOf("object");
  });
});
