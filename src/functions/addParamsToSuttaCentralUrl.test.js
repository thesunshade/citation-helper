import addParamsToSuttaCentralUrl from "./addParamsToSuttaCentralUrl";

test("sn5 should not have translator", () => {
  expect(addParamsToSuttaCentralUrl("sn5", "/en/sujato", "")).toBe("https://suttacentral.net/sn5");
});
test("mn5 should have translator", () => {
  expect(addParamsToSuttaCentralUrl("mn5", "/en/sujato", "")).toBe("https://suttacentral.net/mn5/en/sujato");
});
