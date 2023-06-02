const getFederationTypesUrl = require("../cli");

test("simple url", () => {
  expect(
    getFederationTypesUrl("app1@http://localhost:3001/remoteEntry.js")
  ).toBe("http://localhost:3001/federated-types/app1");
});
