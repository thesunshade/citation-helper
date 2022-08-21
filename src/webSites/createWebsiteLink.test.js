import createWebsiteLink from "./createWebsiteLink.js";

describe("SC", () => {
  describe("SC-Main Nikayas", () => {
    test("dn14 citation", () => {
      expect(createWebsiteLink({ site: "SC", book: "dn", firstNumber: 14, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/dn14"
      );
    });
    test("dn only", () => {
      expect(createWebsiteLink({ site: "SC", book: "dn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/long/dn"
      );
    });
    test("dn39 wrong citation", () => {
      expect(
        createWebsiteLink({
          site: "SC",
          book: "dn",
          firstNumber: 39,
          secondNumber: 0,
          error: "Sutta number too high. Not in Dīgha Nikāya.",
        })
      ).toBe("");
    });

    test("mn152", () => {
      expect(createWebsiteLink({ site: "SC", book: "mn", firstNumber: 152, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/mn152"
      );
    });
    test("mn only", () => {
      expect(createWebsiteLink({ site: "SC", book: "mn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/middle/mn"
      );
    });
    test("mn345 Wrong citation", () => {
      expect(
        createWebsiteLink({
          site: "SC",
          book: "mn",
          firstNumber: 0,
          secondNumber: 0,
          error: "Sutta number too high. Not in Majjhima Nikāya.",
        })
      ).toBe("");
    });

    test("sn12.75 (within a range", () => {
      expect(createWebsiteLink({ site: "SC", book: "sn", firstNumber: 12, secondNumber: 75, error: "" })).toBe(
        "https://suttacentral.net/sn12.72-81"
      );
    });
    test("sn35.10 (exact sutta)", () => {
      expect(createWebsiteLink({ site: "SC", book: "sn", firstNumber: 35, secondNumber: 10, error: "" })).toBe(
        "https://suttacentral.net/sn35.10"
      );
    });
    test("sn34.500", () => {
      expect(
        createWebsiteLink({
          site: "SC",
          book: "sn",
          firstNumber: 34,
          secondNumber: 500,
          error: "Sutta number too high. Not in Saṁyutta Nikāya.",
        })
      ).toBe("");
    });
    test("sn only", () => {
      expect(createWebsiteLink({ site: "SC", book: "sn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/linked/sn"
      );
    });

    test("an10.150(exact)", () => {
      expect(createWebsiteLink({ site: "SC", book: "an", firstNumber: 10, secondNumber: 150, error: "" })).toBe(
        "https://suttacentral.net/an10.150"
      );
    });
    test("an1.2 (range)", () => {
      expect(createWebsiteLink({ site: "SC", book: "an", firstNumber: 1, secondNumber: 2, error: "" })).toBe(
        "https://suttacentral.net/an1.1-10"
      );
    });
    test("an1.992 (incorrect)", () => {
      expect(
        createWebsiteLink({
          site: "SC",
          book: "an",
          firstNumber: 1,
          secondNumber: 2,
          error: "Sutta number too high. Not in Aṅguttara Nikāya.",
        })
      ).toBe("");
    });
  });

  describe("KN", () => {
    test("kp6", () => {
      expect(createWebsiteLink({ site: "SC", book: "kp", firstNumber: 6, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/kp6"
      );
    });
    test("kp only", () => {
      expect(createWebsiteLink({ site: "SC", book: "kp", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/kp"
      );
    });

    test("dhp only", () => {
      expect(createWebsiteLink({ site: "SC", book: "dhp", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/dhp"
      );
    });
    test("dhp245", () => {
      expect(createWebsiteLink({ site: "SC", book: "dhp", firstNumber: 245, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/dhp235-255#dhp245:1"
      );
    });
    test("ud only", () => {
      expect(createWebsiteLink({ site: "SC", book: "ud", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/ud"
      );
    });
    test("ud4.6", () => {
      expect(createWebsiteLink({ site: "SC", book: "ud", firstNumber: 4, secondNumber: 6, error: "" })).toBe(
        "https://suttacentral.net/ud4.6"
      );
    });

    test("iti only", () => {
      expect(createWebsiteLink({ site: "SC", book: "iti", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/iti"
      );
    });
    test("iti67", () => {
      expect(createWebsiteLink({ site: "SC", book: "iti", firstNumber: 67, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/iti67"
      );
    });

    test("snp only", () => {
      expect(createWebsiteLink({ site: "SC", book: "snp", firstNumber: 0, secondNumber: 8, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/snp"
      );
    });
    test("snp1.8", () => {
      expect(createWebsiteLink({ site: "SC", book: "snp", firstNumber: 1, secondNumber: 8, error: "" })).toBe(
        "https://suttacentral.net/snp1.8"
      );
    });

    test("vv only", () => {
      expect(createWebsiteLink({ site: "SC", book: "vv", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/vv"
      );
    });
    test("vv67", () => {
      expect(createWebsiteLink({ site: "SC", book: "vv", firstNumber: 67, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/vv67"
      );
    });

    test("pv only", () => {
      expect(createWebsiteLink({ site: "SC", book: "pv", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/pv"
      );
    });
    test("pv67", () => {
      expect(createWebsiteLink({ site: "SC", book: "pv", firstNumber: 47, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pv47"
      );
    });

    test("thag only", () => {
      expect(createWebsiteLink({ site: "SC", book: "thag", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/thag"
      );
    });
    test("thag4.2", () => {
      expect(createWebsiteLink({ site: "SC", book: "thag", firstNumber: 4, secondNumber: 2, error: "" })).toBe(
        "https://suttacentral.net/thag4.2"
      );
    });

    test("thig only", () => {
      expect(createWebsiteLink({ site: "SC", book: "thig", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/thig"
      );
    });
    test("thig3.2", () => {
      expect(createWebsiteLink({ site: "SC", book: "thig", firstNumber: 3, secondNumber: 2, error: "" })).toBe(
        "https://suttacentral.net/thig3.2"
      );
    });

    test("ja only", () => {
      expect(createWebsiteLink({ site: "SC", book: "ja", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/ja"
      );
    });
    test("ja146", () => {
      expect(createWebsiteLink({ site: "SC", book: "ja", firstNumber: 146, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/ja146"
      );
    });
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

  describe("SC Vinaya", () => {
    describe("SC Bhikkhu Vinaya", () => {
      test("bupj3", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "bupj",
            firstNumber: 3,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://suttacentral.net/pli-tv-bu-vb-pj3");
      });

      test("buss3", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "buss",
            firstNumber: 3,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://suttacentral.net/pli-tv-bu-vb-ss3");
      });

      test("buay2", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "buay",
            firstNumber: 2,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://suttacentral.net/pli-tv-bu-vb-ay2");
      });

      test("bunp30", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "bunp",
            firstNumber: 30,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://suttacentral.net/pli-tv-bu-vb-np30");
      });

      test("bupc90", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "bupc",
            firstNumber: 90,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://suttacentral.net/pli-tv-bu-vb-pc90");
      });

      test("bupd1", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "bupd",
            firstNumber: 1,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://suttacentral.net/pli-tv-bu-vb-pd1");
      });

      test("busk34", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "busk",
            firstNumber: 34,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://suttacentral.net/pli-tv-bu-vb-sk34");
      });
    });

    describe("SC Bhikkhunī Vinaya", () => {
      test("bipj6", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "bipj",
            firstNumber: 6,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.2.0.0.0.0.1.m");
      });

      test("biss8", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "biss",
            firstNumber: 8,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.2.0.0.0.0.3.m");
      });

      test("binp12", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "binp",
            firstNumber: 12,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.2.0.0.2.0.11.m");
      });

      test("bipc90", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "bipc",
            firstNumber: 90,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.2.0.0.3.8.6.m");
      });

      test("bipd1", () => {
        expect(
          createWebsiteLink({
            site: "SC",
            book: "bipd",
            firstNumber: 1,
            secondNumber: 0,
            error: "",
            chapterFlag: false,
          })
        ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.2.0.0.4.0.0.m");
      });

      // test("bisk34", () => {
      //   expect(
      //     createWebsiteLink({
      //       site: "SC",
      //       book: "bisk",
      //       firstNumber: 34,
      //       secondNumber: 0,
      //       error: "",
      //       chapterFlag: false,
      //     })
      //   ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.1.0.0.2.3.0.m");
      // });
    });
  });
});

describe("SF", () => {
  describe("SF-Main Nikayas", () => {
    test("test All mn141 citation", () => {
      expect(createWebsiteLink({ site: "SF", book: "mn", firstNumber: 141, secondNumber: 0, error: "" })).toBe(
        "https://suttafriends.org/sutta/mn141"
      );
    });
    test("mn only citation", () => {
      expect(createWebsiteLink({ site: "SF", book: "mn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttafriends.org/mn"
      );
    });

    test("sn only", () => {
      expect(createWebsiteLink({ site: "SF", book: "sn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttafriends.org/sn"
      );
    });

    test("an1.2 citation", () => {
      expect(createWebsiteLink({ site: "SF", book: "an", firstNumber: 1, secondNumber: 2, error: "" })).toBe(
        "https://suttafriends.org/sutta/an1-1"
      );
    });
  });

  describe("SF-KN", () => {
    test("kp only", () => {
      expect(createWebsiteLink({ site: "SC", book: "kp", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttacentral.net/pitaka/sutta/minor/kn/kp"
      );
    });
    test("snp1.8 citations", () => {
      expect(createWebsiteLink({ site: "SF", book: "snp", firstNumber: 1, secondNumber: 8, error: "" })).toBe(
        "https://suttafriends.org/sutta/snp1-8"
      );
    });
    test("vv only", () => {
      expect(createWebsiteLink({ site: "SF", book: "vv", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://suttafriends.org/vv"
      );
    });
    test("thag1.2 citation", () => {
      expect(createWebsiteLink({ site: "SF", book: "thag", firstNumber: 1, secondNumber: 2, error: "" })).toBe(
        "https://suttafriends.org/sutta/thag1-1"
      );
    });
    test("test Dhp for SuttaFriends", () => {
      expect(createWebsiteLink({ site: "SF", book: "dhp", firstNumber: 123, secondNumber: 0, error: "" })).toBe(
        "https://suttafriends.org/sutta/dhp9#v123"
      );
    });
  });
});

describe("DT", () => {
  describe("DT-Main Nikayas", () => {
    test("mn141 citation", () => {
      expect(createWebsiteLink({ site: "DT", book: "mn", firstNumber: 141, secondNumber: 0, error: "" })).toBe(
        "https://www.dhammatalks.org/suttas/MN/MN141.html"
      );
    });
    test("mn only citation", () => {
      expect(createWebsiteLink({ site: "DT", book: "mn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://www.dhammatalks.org/suttas/MN/index_MN.html"
      );
    });

    test("test for single book links", () => {
      expect(createWebsiteLink({ site: "DT", book: "sn", firstNumber: 0, secondNumber: 0, error: "" })).toBe(
        "https://www.dhammatalks.org/suttas/SN/index_SN.html"
      );
    });
    test("an1.22 citation", () => {
      expect(createWebsiteLink({ site: "DT", book: "an", firstNumber: 1, secondNumber: 22, error: "" })).toBe(
        "https://www.dhammatalks.org/suttas/AN/AN1_21.html"
      );
    });
    test("an1.2 citation", () => {
      expect(createWebsiteLink({ site: "DT", book: "an", firstNumber: 1, secondNumber: 2, error: "" })).toBe("");
    });
  });

  describe("DT-KN", () => {
    test("Dhp123", () => {
      expect(createWebsiteLink({ site: "DT", book: "dhp", firstNumber: 123, secondNumber: 0, error: "" })).toBe(
        "https://www.dhammatalks.org/suttas/KN/Dhp/Ch09.html#dhp123"
      );
    });
    test("itivuttaka range, itv11", () => {
      expect(createWebsiteLink({ site: "DT", book: "iti", firstNumber: 11, secondNumber: 0, error: "" })).toBe(
        "https://www.dhammatalks.org/suttas/KN/Iti/iti10.html"
      );
    });
    test("test All snp1.8 citations", () => {
      expect(createWebsiteLink({ site: "DT", book: "snp", firstNumber: 1, secondNumber: 8, error: "" })).toBe(
        "https://www.dhammatalks.org/suttas/KN/StNp/StNp1_8.html"
      );
    });
    test("test DT thag18 citation", () => {
      expect(createWebsiteLink({ site: "DT", book: "thag", firstNumber: 18, secondNumber: 0, error: "" })).toBe(
        "https://www.dhammatalks.org/suttas/KN/Thag/thag18.html"
      );
    });
    test("test DT thag18 citation", () => {
      expect(createWebsiteLink({ site: "DT", book: "thag", firstNumber: 18, secondNumber: 0, error: "" })).toBe(
        "https://www.dhammatalks.org/suttas/KN/Thag/thag18.html"
      );
    });
  });
});
