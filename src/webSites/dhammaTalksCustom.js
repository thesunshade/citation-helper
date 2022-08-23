export let dhammaTalksCustom = {
  constants: {
    rootUrl: "https://www.dhammatalks.org/suttas",
    suffixUrl: ".html",
    chapterConnector: "_",
  },
  dn: {
    links: { all: "", main_page: "" },
    available: [
      [1, "/DN/DN01"],
      [2, "/DN/DN02"],
      [9, "/DN/DN09"],
    ],
  },

  sn: {
    format: ["chapter"],
    links: { all: "", main_page: "" },
    available: {
      43: [[1, 44, "/SN/SN43.html"]],
      44: [[1, 11, "/SN/SN44.html"]],
    },
  },

  thag: {
    links: { all: "", main_page: "" },
    available: {
      18: [[1, "/KN/Thag/thag18.html"]],
    },
  },
};
