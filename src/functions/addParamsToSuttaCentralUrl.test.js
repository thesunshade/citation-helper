import addParamsToSuttaCentralUrl from "./addParamsToSuttaCentralUrl";

test("test DPR binp12", () => {
  expect(addParamsToSuttaCentralUrl("sn5", "/en/sujato", "")).toBe("https://suttacentral.net/sn5");
});
