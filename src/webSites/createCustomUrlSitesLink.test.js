import createCustomUrlSitesLink from "./createCustomUrlSitesLink.js";

describe("ABT", () => {
  test("test ABT mn141 citation", () => {
    expect(createCustomUrlSitesLink({ site: "ABT", book: "mn", firstNumber: 141, secondNumber: 0, error: "" })).toBe(
      "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Short-Pieces/Saccavibhangasuttam.htm"
    );
  });
  test("test ABT dhpch4", () => {
    expect(
      createCustomUrlSitesLink({
        site: "ABT",
        book: "dhp",
        firstNumber: 4,
        secondNumber: 0,
        error: "",
        chapterFlag: true,
      })
    ).toBe("https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/04-Flowers.htm");
  });

  test("test ABT Snpch5", () => {
    expect(
      createCustomUrlSitesLink({
        site: "ABT",
        book: "snp",
        firstNumber: 5,
        secondNumber: 0,
        error: "",
        chapterFlag: true,
      })
    ).toBe("https://www.ancient-buddhist-texts.net/Texts-and-Translations/Parayanavagga/index.htm");
  });
  test("test ABT Ja345", () => {
    expect(
      createCustomUrlSitesLink({
        site: "ABT",
        book: "ja",
        firstNumber: 345,
        secondNumber: 0,
        error: "",
        chapterFlag: true,
      })
    ).toBe("https://www.ancient-buddhist-texts.net/English-Texts/Jataka/345.htm");
  });
  test("test ABT Ja999", () => {
    expect(
      createCustomUrlSitesLink({
        site: "ABT",
        book: "ja",
        firstNumber: 999,
        secondNumber: 0,
        error: "Sutta number too high. Not in Jātaka.",
        chapterFlag: true,
      })
    ).toBe("");
  });
});

describe("ATI", () => {
  describe("ATI suttas", () => {
    test("test ATI dn16", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "dn",
          firstNumber: 16,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://accesstoinsight.org/tipitaka/dn/dn.16.1-6.vaji.html");
    });

    test("test ATI mn141 citation", () => {
      expect(createCustomUrlSitesLink({ site: "ATI", book: "mn", firstNumber: 141, secondNumber: 0, error: "" })).toBe(
        "https://accesstoinsight.org/tipitaka/mn/mn.141.piya.html"
      );
    });

    test("test ATI sn7.11", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "sn",
          firstNumber: 7,
          secondNumber: 11,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://accesstoinsight.org/tipitaka/sn/sn07/sn07.011.piya.html");
    });

    test("test ATI an4.95", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "an",
          firstNumber: 4,
          secondNumber: 95,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://accesstoinsight.org/tipitaka/an/an04/an04.095.budd.html");
    });
    test("test ATI kp6", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "kp",
          firstNumber: 6,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://accesstoinsight.org/tipitaka/kn/khp/khp.1-9x.piya.html#khp-6");
    });
    test("test ATI dhpch4", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "dhp",
          firstNumber: 4,
          secondNumber: 0,
          error: "",
          chapterFlag: true,
        })
      ).toBe("https://accesstoinsight.org/tipitaka/kn/dhp/dhp.04.budd.html");
    });
    test("test ATI dhp123", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "dhp",
          firstNumber: 123,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://accesstoinsight.org/tipitaka/kn/dhp/dhp.09.budd.html");
    });

    test("test ATI ud", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "ud",
          firstNumber: 0,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://accesstoinsight.org/tipitaka/kn/ud/index.html");
    });

    test("test ATI ud1.10", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "ud",
          firstNumber: 1,
          secondNumber: 10,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://accesstoinsight.org/tipitaka/kn/ud/ud.1.10.irel.html");
    });

    test("test ATI iti1.10", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "iti",
          firstNumber: 1,
          secondNumber: 10,
          error: "",
          chapterFlag: false,
        })
      ).toBe("");
    });

    test("test ATI snp1.10", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "snp",
          firstNumber: 1,
          secondNumber: 10,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://accesstoinsight.org/tipitaka/kn/snp/snp.1.10.piya.html");
    });

    test("test ATI vv26", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "vv",
          firstNumber: 26,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("");
    });

    test("test ATI pv26", () => {
      expect(
        createCustomUrlSitesLink({
          site: "ATI",
          book: "pv",
          firstNumber: 26,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("");
    });
  });
});

describe("DPR suttas", () => {
  test("test DPR dn16", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "dn",
        firstNumber: 16,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=d.1.0.0.2.0.0.m");
  });

  test("test DPR mn141 citation", () => {
    expect(createCustomUrlSitesLink({ site: "DPR", book: "mn", firstNumber: 141, secondNumber: 0, error: "" })).toBe(
      "https://www.digitalpalireader.online/_dprhtml/index.html?loc=m.2.0.0.3.10.0.m"
    );
  });

  test("test DPR sn7.11", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "sn",
        firstNumber: 7,
        secondNumber: 11,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=s.0.0.0.6.1.0.m");
  });

  test("test DPR an4.95", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "an",
        firstNumber: 4,
        secondNumber: 95,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=a.3.0.0.1.4.4.m");
  });
  test("test DPR kp6", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "kp",
        firstNumber: 6,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.0.0.0.5.0.0.m");
  });
  test("test DPR dhpch4", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "dhp",
        firstNumber: 4,
        secondNumber: 0,
        error: "",
        chapterFlag: true,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.1.0.0.3.0.0.m");
  });
  test("test DPR dhp123", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "dhp",
        firstNumber: 123,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.1.0.0.8.0.0.m");
  });

  // test("test DPR ud", () => {
  //   expect(
  //     createCustomUrlSitesLink({
  //       site: "DPR",
  //       book: "ud",
  //       firstNumber: 0,
  //       secondNumber: 0,
  //       error: "",
  //       chapterFlag: false,
  //     })
  //   ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.2.m");
  // });

  test("test DPR ud1.10", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "ud",
        firstNumber: 1,
        secondNumber: 10,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.2.0.0.0.0.9.m");
  });

  test("test DPR iti47", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "iti",
        firstNumber: 47,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.3.0.0.1.1.9.m");
  });

  test("test DPR snp1.10", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "snp",
        firstNumber: 1,
        secondNumber: 10,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.4.0.0.0.0.9.m");
  });

  test("test DPR vv26", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "vv",
        firstNumber: 26,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.5.0.0.0.1.8.m");
  });

  test("test DPR pv26", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "pv",
        firstNumber: 26,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.6.0.0.2.0.0.m");
  });

  test("test DPR thag6.7", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "thag",
        firstNumber: 6,
        secondNumber: 7,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.7.0.0.6.0.6.m");
  });

  test("test DPR thig16.1", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "thig",
        firstNumber: 16,
        secondNumber: 1,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.8.0.0.15.0.0.m");
  });

  test("test DPR ja456", () => {
    expect(
      createCustomUrlSitesLink({
        site: "DPR",
        book: "ja",
        firstNumber: 456,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=k.13.0.0.10.0.1.m");
  });
});

describe("DPR Vinaya", () => {
  describe("DPR Bhikkhu Vinaya", () => {
    test("test DPR bupj3", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "bupj",
          firstNumber: 3,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.0.0.0.1.2.0.m");
    });

    test("test DPR buss3", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "buss",
          firstNumber: 3,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.0.0.0.2.2.0.m");
    });

    test("test DPR buay2", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "buay",
          firstNumber: 2,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.0.0.0.3.1.0.m");
    });

    test("test DPR bunp22", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "bunp",
          firstNumber: 22,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.0.0.0.4.2.1.m");
    });

    test("test DPR bupc90", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "bupc",
          firstNumber: 90,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.1.0.0.0.8.7.m");
    });

    test("test DPR bupd1", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "bupd",
          firstNumber: 1,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.1.0.0.1.0.0.m");
    });

    // test("test DPR busk34", () => {
    //   expect(
    //     createCustomUrlSitesLink({
    //       site: "DPR",
    //       book: "busk",
    //       firstNumber: 34,
    //       secondNumber: 0,
    //       error: "",
    //       chapterFlag: false,
    //     })
    //   ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.1.0.0.2.3.0.m");
    // });
  });

  describe("DPR Bhikkhunī Vinaya", () => {
    test("test DPR bipj6", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "bipj",
          firstNumber: 6,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.2.0.0.0.0.1.m");
    });

    test("test DPR biss8", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "biss",
          firstNumber: 8,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.2.0.0.0.0.3.m");
    });

    test("test DPR binp12", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "binp",
          firstNumber: 12,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.2.0.0.2.0.11.m");
    });

    test("test DPR bipc90", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "bipc",
          firstNumber: 90,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.2.0.0.3.8.6.m");
    });

    test("test DPR bipd1", () => {
      expect(
        createCustomUrlSitesLink({
          site: "DPR",
          book: "bipd",
          firstNumber: 1,
          secondNumber: 0,
          error: "",
          chapterFlag: false,
        })
      ).toBe("https://www.digitalpalireader.online/_dprhtml/index.html?loc=v.2.0.0.4.0.0.m");
    });

    // test("test DPR bisk34", () => {
    //   expect(
    //     createCustomUrlSitesLink({
    //       site: "DPR",
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

describe("PA ", () => {
  test("PA dn (main page)", () => {
    expect(
      createCustomUrlSitesLink({
        site: "PA",
        book: "dn",
        firstNumber: 0,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.paliaudio.com/digha-nikaya");
  });
  test("PA dn7 (main page)", () => {
    expect(
      createCustomUrlSitesLink({
        site: "PA",
        book: "dn",
        firstNumber: 7,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://paliaudio.com/dn7");
  });
  test("PA mn (main page)", () => {
    expect(
      createCustomUrlSitesLink({
        site: "PA",
        book: "mn",
        firstNumber: 0,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.paliaudio.com/majjhima-nikaya");
  });
  test("PA mn56 (main page)", () => {
    expect(
      createCustomUrlSitesLink({
        site: "PA",
        book: "mn",
        firstNumber: 56,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://paliaudio.com/mn56");
  });
  test("PA sn (main page)", () => {
    expect(
      createCustomUrlSitesLink({
        site: "PA",
        book: "sn",
        firstNumber: 0,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.paliaudio.com/samyutta-nikaya");
  });
  test("PA sn31.20 (main page)", () => {
    expect(
      createCustomUrlSitesLink({
        site: "PA",
        book: "sn",
        firstNumber: 31,
        secondNumber: 20,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://paliaudio.com/sn-31");
  });
  test("PA sn55.1", () => {
    expect(
      createCustomUrlSitesLink({
        site: "PA",
        book: "sn",
        firstNumber: 55,
        secondNumber: 1,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://paliaudio.com/sn55");
  });

  test("PA an (main page)", () => {
    expect(
      createCustomUrlSitesLink({
        site: "PA",
        book: "an",
        firstNumber: 0,
        secondNumber: 0,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://www.paliaudio.com/anguttara-nikaya");
  });
  test("PA an1.1", () => {
    expect(
      createCustomUrlSitesLink({
        site: "PA",
        book: "an",
        firstNumber: 1,
        secondNumber: 5,
        error: "",
        chapterFlag: false,
      })
    ).toBe("https://paliaudio.com/section-of-ones");
  });
});
