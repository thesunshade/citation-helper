import createAncientBuddhistTextsLink from "./createAncientBuddhistTextsLink.js";

test("test all mn141 citation", () => {
  expect(
    createAncientBuddhistTextsLink({ site: "ABT", book: "mn", firstNumber: 141, secondNumber: 0, error: "" })
  ).toBe("https://www.ancient-buddhist-texts.net/Texts-and-Translations/Short-Pieces/Saccavibhangasuttam.htm");
});
test("test dhpch4", () => {
  expect(
    createAncientBuddhistTextsLink({
      site: "ABT",
      book: "dhp",
      firstNumber: 4,
      secondNumber: 0,
      error: "",
      chapterFlag: true,
    })
  ).toBe("https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/04-Flowers.htm");
  expect(
    createAncientBuddhistTextsLink({
      site: "ABT",
      book: "snp",
      firstNumber: 5,
      secondNumber: 0,
      error: "",
      chapterFlag: true,
    })
  ).toBe("https://www.ancient-buddhist-texts.net/Texts-and-Translations/Parayanavagga/index.htm");
});
