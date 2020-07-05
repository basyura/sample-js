"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = require("../format");
describe("format", () => {
  test("only root", () => {
    expect(
      format_1.format({ type: "directory", name: "root", children: [] })
    ).toMatchSnapshot();
  });
});
//# sourceMappingURL=format.test.js.map
