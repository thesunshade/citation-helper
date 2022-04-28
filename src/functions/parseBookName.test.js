import parseBookName from "./parseBookName.js";

test("sees if mn is found in string", () => {
  expect(parseBookName("mn1234")).toBe("mn");
  expect(parseBookName("MN1234")).toBe("mn");
});

test("sees if kp is found in string", () => {
  expect(parseBookName("khp1234")).toBe("kp");
  expect(parseBookName("kp1234")).toBe("kp");
});
test("sees if itv is found in string", () => {
  expect(parseBookName("it1234")).toBe("iti");
  expect(parseBookName("itv1234")).toBe("iti");
  expect(parseBookName("iti1234")).toBe("iti");
});
test("sees if dhpv123 returns dhp", () => {
  expect(parseBookName("dhpv123")).toBe("dhp");
});
test("sees if snp1.8 returns snp", () => {
  expect(parseBookName("snp1.8")).toBe("snp");
});
