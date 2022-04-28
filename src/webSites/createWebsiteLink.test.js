import createWebsiteLink from "./createWebsiteLink.js";

test("test all mn141 citation", () => {
  expect(createWebsiteLink({ site: "SC", book: "mn", firstNumber: 141, secondNumber: 0, error: "" })).toBe(
    "https://suttacentral.net/mn141"
  );
  expect(createWebsiteLink({ site: "SF", book: "mn", firstNumber: 141, secondNumber: 0, error: "" })).toBe(
    "https://suttafriends.org/sutta/mn141"
  );
  expect(createWebsiteLink({ site: "DT", book: "mn", firstNumber: 141, secondNumber: 0, error: "" })).toBe(
    "https://www.dhammatalks.org/suttas/MN/MN141.html"
  );
});

test("test sc an1.1 citation", () => {
  expect(createWebsiteLink({ site: "SC", book: "an", firstNumber: 1, secondNumber: 2, error: "" })).toBe(
    "https://suttacentral.net/an1.1-10"
  );
});
test("test DT thag18 citation", () => {
  expect(createWebsiteLink({ site: "DT", book: "thag", firstNumber: 18, secondNumber: 0, error: "" })).toBe(
    "https://www.dhammatalks.org/suttas/KN/Thag/thag18.html"
  );
});

test("test SF an1.1 citation", () => {
  expect(createWebsiteLink({ site: "SF", book: "an", firstNumber: 1, secondNumber: 2, error: "" })).toBe(
    "https://suttafriends.org/sutta/an1-1"
  );
});
test("test DT an1.22 citation", () => {
  expect(createWebsiteLink({ site: "DT", book: "an", firstNumber: 1, secondNumber: 22, error: "" })).toBe(
    "https://www.dhammatalks.org/suttas/AN/AN1_21.html"
  );
});
test("test snp citations", () => {
  expect(createWebsiteLink({ site: "SF", book: "snp", firstNumber: 1, secondNumber: 8, error: "" })).toBe(
    "https://suttafriends.org/sutta/snp1-8"
  );
});

test("test suttafriends thag1.2 citation", () => {
  expect(createWebsiteLink({ site: "SF", book: "thag", firstNumber: 1, secondNumber: 2, error: "" })).toBe(
    "https://suttafriends.org/sutta/thag1-1"
  );
});

test("test itivuttaka range on DhammaTalks, itv11", () => {
  expect(createWebsiteLink({ site: "DT", book: "iti", firstNumber: 11, secondNumber: 0, error: "" })).toBe(
    "https://www.dhammatalks.org/suttas/KN/Iti/iti10.html"
  );
});

test("test Dhp for SuttaFriends", () => {
  expect(createWebsiteLink({ site: "SF", book: "dhp", firstNumber: 123, secondNumber: 0, error: "" })).toBe(
    "https://suttafriends.org/sutta/dhp9#v123"
  );
});

test("test Dhp for DhammaTalks", () => {
  expect(createWebsiteLink({ site: "DT", book: "dhp", firstNumber: 123, secondNumber: 0, error: "" })).toBe(
    "https://www.dhammatalks.org/suttas/KN/Dhp/Ch09.html#dhp123"
  );
});

test("test for single book links", () => {
  expect(createWebsiteLink({ site: "SC", book: "mn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
    "https://suttacentral.net/pitaka/sutta/middle/mn"
  );
  expect(createWebsiteLink({ site: "SF", book: "mn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
    "https://suttafriends.org/mn"
  );
  expect(createWebsiteLink({ site: "DT", book: "mn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
    "https://www.dhammatalks.org/suttas/MN/index_MN.html"
  );
  // SN
  expect(createWebsiteLink({ site: "SC", book: "sn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
    "https://suttacentral.net/pitaka/sutta/linked/sn"
  );
  expect(createWebsiteLink({ site: "SF", book: "sn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
    "https://suttafriends.org/sn"
  );
  expect(createWebsiteLink({ site: "DT", book: "sn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
    "https://www.dhammatalks.org/suttas/SN/index_SN.html"
  );
  //Khp
  expect(createWebsiteLink({ site: "SC", book: "kp", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
    "https://suttacentral.net/pitaka/sutta/minor/kn/kp"
  );
  //Dhp
  expect(createWebsiteLink({ site: "SC", book: "dhp", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
    "https://suttacentral.net/pitaka/sutta/minor/kn/dhp"
  );
  //Ud
  expect(createWebsiteLink({ site: "SC", book: "ud", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
    "https://suttacentral.net/pitaka/sutta/minor/kn/ud"
  );
  //vv
  expect(createWebsiteLink({ site: "SF", book: "vv", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
    "https://suttafriends.org/vv"
  );
});

test("test chapter numbers input with chapter flag, e.g. snch56", () => {
  expect(
    createWebsiteLink({ site: "SC", book: "sn", firstNumber: 56, secondNumber: 0, error: "", chapterFlag: true })
  ).toBe("https://suttacentral.net/sn56");
  expect(
    createWebsiteLink({ site: "SC", book: "an", firstNumber: 1, secondNumber: 0, error: "", chapterFlag: true })
  ).toBe("https://suttacentral.net/pitaka/sutta/numbered/an/an1");
  expect(
    createWebsiteLink({ site: "SC", book: "ud", firstNumber: 5, secondNumber: 0, error: "", chapterFlag: true })
  ).toBe("https://suttacentral.net/pitaka/sutta/minor/kn/ud/ud-sonavagga");
  expect(
    createWebsiteLink({ site: "SC", book: "snp", firstNumber: 5, secondNumber: 0, error: "", chapterFlag: true })
  ).toBe("https://suttacentral.net/pitaka/sutta/minor/kn/snp/snp-parayanavagga");
  expect(
    createWebsiteLink({ site: "SC", book: "vv", firstNumber: 3, secondNumber: 0, error: "", chapterFlag: true })
  ).toBe("https://suttacentral.net/pitaka/sutta/minor/kn/vv/vv-itthivimana/vv-paricchattakavagga");
  expect(
    createWebsiteLink({ site: "SC", book: "pv", firstNumber: 3, secondNumber: 0, error: "", chapterFlag: true })
  ).toBe("https://suttacentral.net/pitaka/sutta/minor/kn/pv/pv-culavagga");
  expect(
    createWebsiteLink({ site: "SC", book: "dhp", firstNumber: 3, secondNumber: 0, error: "", chapterFlag: true })
  ).toBe("https://suttacentral.net/dhp33-43/en/sujato");
});
