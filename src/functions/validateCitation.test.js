import validateCitation from "./validateCitation";

// Book name MUST be a correct book id as found in structure document (i.e. book keys)

describe("Main Nikayas", () => {
  test("DN correct numbers", () => {
    expect(
      validateCitation("dn", { firstNumber: 11, secondNumber: 0, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "dn",
      firstNumber: 11,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "",
      warning: "",
    });
  });
  test("DN INCORRECT numbers", () => {
    expect(
      validateCitation("dn", { firstNumber: 45, secondNumber: 0, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "dn",
      firstNumber: 45,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "Sutta number too high. Not in Dīgha Nikāya.",
      warning: "",
    });
  });

  test("MN correct numbers", () => {
    expect(
      validateCitation("mn", { firstNumber: 11, secondNumber: 0, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "mn",
      firstNumber: 11,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "",
      warning: "",
    });
  });
  test("MN INCORRECT numbers", () => {
    expect(
      validateCitation("mn", { firstNumber: 345, secondNumber: 0, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "mn",
      firstNumber: 345,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "Sutta number too high. Not in Majjhima Nikāya.",
      warning: "",
    });
  });

  test("SN correct two numbers", () => {
    expect(
      validateCitation("sn", { firstNumber: 11, secondNumber: 3, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "sn",
      firstNumber: 11,
      secondNumber: 3,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "",
      warning: "",
    });
  });

  test("SN correct one number", () => {
    expect(
      validateCitation("sn", { firstNumber: 11, secondNumber: 0, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "sn",
      firstNumber: 11,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "",
      warning: "",
    });
  });

  test("SN correct firstNumber, incorrect Second number", () => {
    expect(
      validateCitation("sn", { firstNumber: 11, secondNumber: 9999, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "sn",
      firstNumber: 11,
      secondNumber: 9999,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "Sutta number too high. Not in Saṁyutta Nikāya.",
      warning: "",
    });
  });
  test("SN incorrect firstNumber", () => {
    expect(
      validateCitation("sn", { firstNumber: 111, secondNumber: 0, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "sn",
      firstNumber: 111,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "Chapter number too high. Not in Saṁyutta Nikāya.",
      warning: "",
    });
  });
  test("AN correct two numbers", () => {
    expect(
      validateCitation("an", { firstNumber: 11, secondNumber: 3, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "an",
      firstNumber: 11,
      secondNumber: 3,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "",
      warning: "",
    });
  });

  test("AN correct one number", () => {
    expect(
      validateCitation("an", { firstNumber: 11, secondNumber: 0, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "an",
      firstNumber: 11,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "",
      warning: "",
    });
  });

  test("AN correct firstNumber, incorrect Second number", () => {
    expect(
      validateCitation("an", { firstNumber: 11, secondNumber: 9999, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "an",
      firstNumber: 11,
      secondNumber: 9999,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "Sutta number too high. Not in Aṅguttara Nikāya.",
      warning: "",
    });
  });
  test("AN incorrect firstNumber", () => {
    expect(
      validateCitation("an", { firstNumber: 111, secondNumber: 0, verseFlag: undefined, chapterFlag: undefined })
    ).toStrictEqual({
      book: "an",
      firstNumber: 111,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "Chapter number too high. Not in Aṅguttara Nikāya.",
      warning: "",
    });
  });
});

test("test Udana sutta format ciation, ud 11 -> ud2.1", () => {
  expect(validateCitation("ud", { firstNumber: 11, secondNumber: 0, error: "" })).toStrictEqual({
    book: "ud",
    firstNumber: 2,
    secondNumber: 1,
    verseFlag: undefined,
    chapterFlag: undefined,
    error: "",
    warning: "Get chapter page if it exisits by adding ‘ch’, e.g. udch1",
  });
});
test("test Udana format ciation, ud 1.99 -> sutta number too high", () => {
  expect(validateCitation("ud", { firstNumber: 1, secondNumber: 99, error: "" })).toStrictEqual({
    book: "ud",
    firstNumber: 1,
    secondNumber: 99,
    verseFlag: undefined,
    chapterFlag: undefined,
    error: "Sutta number too high. Not in Udāna.",
    warning: "Get chapter page if it exisits by adding ‘ch’, e.g. udch1",
  });
});

test("test  thag123 citation", () => {
  expect(validateCitation("thag", { firstNumber: 123, secondNumber: 0, error: "" })).toStrictEqual({
    book: "thag",
    firstNumber: 2,
    secondNumber: 2,
    verseFlag: false,
    chapterFlag: undefined,
    error: "",
    warning: "",
  });
});

test("test itivuttaka chapter format ciation, itv2.2", () => {
  // If a book is both "sutta" and "chapter", then a second number should hijack the whole thing and turn it into a chapter-sutta citation
  // applies to Itivuttaka
  expect(validateCitation("iti", { firstNumber: 2, secondNumber: 2, error: "" })).toStrictEqual({
    book: "iti",
    firstNumber: 29,
    secondNumber: 0,
    verseFlag: undefined,
    chapterFlag: undefined,
    error: "",
    warning: "Get chapter page if it exisits by adding ‘ch’, e.g. itich1",
  });
});

describe("test Bhikkhu Vinaya Rules", () => {
  test("test pr 2 0", () => {
    expect(validateCitation("pr", { firstNumber: 2, secondNumber: 0 })).toStrictEqual({
      book: "pr",
      firstNumber: 2,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "",
      warning: "",
    });
  });
  test("test bupr 4 0", () => {
    expect(validateCitation("bupr", { firstNumber: 4, secondNumber: 0 })).toStrictEqual({
      book: "bupr",
      firstNumber: 4,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "",
      warning: "",
    });
  });
  test("bupj 5 0 (rule number too high)", () => {
    expect(validateCitation("bupj", { firstNumber: 5, secondNumber: 0 })).toStrictEqual({
      book: "bupj",
      firstNumber: 5,
      secondNumber: 0,
      verseFlag: undefined,
      chapterFlag: undefined,
      error: "Rule number too high. Not in Bhikkhu Pārājika.",
      warning: "",
    });
  });
});
