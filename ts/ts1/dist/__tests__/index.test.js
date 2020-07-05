"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
describe("toy-tree", () => {
  let stdout;
  let stderr;
  const exec = (argv) => __1.main(argv, stdout, stderr);
  beforeEach(() => {
    stdout = jest.fn();
    stderr = jest.fn();
  });
  test("fixtures", () => {
    const code = exec(["fixtures"]);
    console.log(stdout.mock);
    expect(stdout.mock.calls[0][0]).toMatchSnapshot();
    expect(code).toBe(0);
  });
});
//# sourceMappingURL=index.test.js.map
