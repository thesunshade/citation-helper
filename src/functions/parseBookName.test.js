import parseBookName from "./parseBookName.js";

describe("Not names", () => {
  test("sees if anything is found in  d n1234", () => {
    expect(parseBookName("d n1234")).toBe("");
  });
  test("sees if anything is found in string", () => {
    expect(parseBookName("d1234")).toBe("");
  });
});

describe("Main Nikayas", () => {
  test("sees if dn is found in string", () => {
    expect(parseBookName("dn1234")).toBe("dn");
    expect(parseBookName("DN1234")).toBe("dn");
  });
  test("sees if mn is found in string", () => {
    expect(parseBookName("mn1234")).toBe("mn");
    expect(parseBookName("MN1234")).toBe("mn");
  });
  test("sees if sn is found in string", () => {
    expect(parseBookName("sn1234")).toBe("sn");
    expect(parseBookName("SN1234")).toBe("sn");
  });
  test("sees if an is found in string", () => {
    expect(parseBookName("an12.34")).toBe("an");
    expect(parseBookName("AN12.34")).toBe("an");
  });
});

describe("KN", () => {
  test("sees if kp is found in string", () => {
    expect(parseBookName("khp1234")).toBe("kp");
    expect(parseBookName("kp1234")).toBe("kp");
  });

  test("sees if dhpv123 returns dhp", () => {
    expect(parseBookName("dhpv123")).toBe("dhp");
  });
  test("sees if dhp123 returns dhp", () => {
    expect(parseBookName("dhp123")).toBe("dhp");
  });
  test("sees if dhpch13 returns dhp", () => {
    expect(parseBookName("dhpch13")).toBe("dhp");
  });

  test("sees if ud23, ud2.3 returns ud", () => {
    expect(parseBookName("ud23")).toBe("ud");
    expect(parseBookName("ud2.3")).toBe("ud");
  });

  test("sees if itv is found in string", () => {
    expect(parseBookName("it1234")).toBe("iti");
    expect(parseBookName("itv1234")).toBe("iti");
    expect(parseBookName("iti1234")).toBe("iti");
  });

  test("sees if snp1.8 returns snp", () => {
    expect(parseBookName("snp1.8")).toBe("snp");
  });
  test("sees if vv1.8 returns vv", () => {
    expect(parseBookName("vv1.8")).toBe("vv");
  });
  test("sees if pv1.8 returns pv", () => {
    expect(parseBookName("pv1.8")).toBe("pv");
  });
  test("sees if thag1.8 returns thag", () => {
    expect(parseBookName("thag1.8")).toBe("thag");
  });
  test("sees if thig1.8 returns thig", () => {
    expect(parseBookName("thig1.8")).toBe("thig");
  });
  test("sees if ja8 returns ja", () => {
    expect(parseBookName("ja8")).toBe("ja");
  });
});
// BHIKKHU RULES
describe("Bhikkhu Vinaya", () => {
  test("pj returns bupj", () => {
    expect(parseBookName("pj2")).toBe("bupj");
  });
  test("pr returns bupj", () => {
    expect(parseBookName("pr1")).toBe("bupj");
  });
  test("bupr returns bupj", () => {
    expect(parseBookName("bupr1")).toBe("bupj");
  });

  test("ss returns buss", () => {
    expect(parseBookName("ss2")).toBe("buss");
  });
  test("sg returns buss", () => {
    expect(parseBookName("sg1")).toBe("buss");
  });
  test("busg returns buss", () => {
    expect(parseBookName("busg1")).toBe("buss");
  });

  test("buay returns buay", () => {
    expect(parseBookName("buay1")).toBe("buay");
  });
  test("ay returns buay", () => {
    expect(parseBookName("ay1")).toBe("buay");
  });

  test("np returns bunp", () => {
    expect(parseBookName("np30")).toBe("bunp");
  });

  test("pd returns bupd", () => {
    expect(parseBookName("pd30")).toBe("bupd");
  });

  test("sk returns busk", () => {
    expect(parseBookName("sk30")).toBe("busk");
  });

  // test("as returns buas", () => {
  //   expect(parseBookName("as30")).toBe("buas");
  // });
});

// BHIKKHUNI
describe("Bhikkhunī Vinaya", () => {
  test("bipr returns bipj", () => {
    expect(parseBookName("bipr1")).toBe("bipj");
  });

  test("bisg returns biss", () => {
    expect(parseBookName("bisg1")).toBe("biss");
  });

  test("binp returns binp", () => {
    expect(parseBookName("binp30")).toBe("binp");
  });

  test("bipd returns bipd", () => {
    expect(parseBookName("bipd30")).toBe("bipd");
  });

  // test("bisk returns bisk", () => {
  //   expect(parseBookName("bisk30")).toBe("bisk");
  // });

  // test("bias returns bias", () => {
  //   expect(parseBookName("bias30")).toBe("bias");
  // });
});
// other Vinaya
describe("other Vinaya", () => {
  test("kd returns kd", () => {
    expect(parseBookName("kd6")).toBe("kd");
  });
});
