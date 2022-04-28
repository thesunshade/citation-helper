import parseNumbers from "./parseNumbers.js";

test("input is blank", () => {
  expect(parseNumbers("")).toStrictEqual({
    firstNumber: 0,
    secondNumber: 0,
    verseFlag: false,
    chapterFlag: false,
  });
});
test("input is without numbers", () => {
  expect(parseNumbers("m")).toStrictEqual({
    firstNumber: 0,
    secondNumber: 0,
    verseFlag: false,
    chapterFlag: false,
  });
});
test("sees if verse flag is found in string", () => {
  expect(parseNumbers("v12.34")).toStrictEqual({
    firstNumber: 12,
    secondNumber: 34,
    verseFlag: true,
    chapterFlag: false,
  });
  expect(parseNumbers("mnV12.34")).toStrictEqual({
    firstNumber: 12,
    secondNumber: 34,
    verseFlag: true,
    chapterFlag: false,
  });
  expect(parseNumbers("mnverse12.34")).toStrictEqual({
    firstNumber: 12,
    secondNumber: 34,
    verseFlag: true,
    chapterFlag: false,
  });
  expect(parseNumbers("mnVerse12.34")).toStrictEqual({
    firstNumber: 12,
    secondNumber: 34,
    verseFlag: true,
    chapterFlag: false,
  });
});

test("sees if chapter flag is found in string", () => {
  expect(parseNumbers("c12.34")).toStrictEqual({
    firstNumber: 12,
    secondNumber: 34,
    verseFlag: false,
    chapterFlag: true,
  });
  expect(parseNumbers("ch12.34")).toStrictEqual({
    firstNumber: 12,
    secondNumber: 34,
    verseFlag: false,
    chapterFlag: true,
  });
  expect(parseNumbers("chapter12.34")).toStrictEqual({
    firstNumber: 12,
    secondNumber: 34,
    verseFlag: false,
    chapterFlag: true,
  });
});

test("sees if two numbers are found in string", () => {
  expect(parseNumbers("c12.34")).toStrictEqual({
    firstNumber: 12,
    secondNumber: 34,
    verseFlag: false,
    chapterFlag: true,
  });
  expect(parseNumbers("mn12.34")).toStrictEqual({
    firstNumber: 12,
    secondNumber: 34,
    verseFlag: false,
    chapterFlag: false,
  });
  expect(parseNumbers("12.34")).toStrictEqual({
    firstNumber: 12,
    secondNumber: 34,
    verseFlag: false,
    chapterFlag: false,
  });
});
test("sees if single number is found in string", () => {
  expect(parseNumbers("c1234")).toStrictEqual({
    firstNumber: 1234,
    secondNumber: 0,
    verseFlag: false,
    chapterFlag: true,
  });
  expect(parseNumbers("mn1234")).toStrictEqual({
    firstNumber: 1234,
    secondNumber: 0,
    verseFlag: false,
    chapterFlag: false,
  });
  expect(parseNumbers("1234")).toStrictEqual({
    firstNumber: 1234,
    secondNumber: 0,
    verseFlag: false,
    chapterFlag: false,
  });
  expect(parseNumbers("1234bodhi")).toStrictEqual({
    firstNumber: 1234,
    secondNumber: 0,
    verseFlag: false,
    chapterFlag: false,
  });
});
