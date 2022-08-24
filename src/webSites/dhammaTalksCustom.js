export let dhammaTalksCustom = {
  constants: {
    rootUrl: "https://www.dhammatalks.org",
    suffixUrl: ".html",
    chapterConnector: "_",
  },
  dn: {
    links: { all: "", main_page: "" },
    available: [
      [1, "/suttas/DN/DN01"],
      [2, "/suttas/DN/DN02"],
      [9, "/suttas/DN/DN09"],
    ],
  },

  sn: {
    format: ["chapter"],
    links: { all: "", main_page: "" },
    available: {
      43: [[1, 44, "/suttas/SN/SN43.html"]],
      44: [[1, 11, "/suttas/SN/SN44.html"]],
    },
  },

  thag: {
    links: { all: "", main_page: "" },
    available: {
      18: [[1, "/suttas/KN/Thag/thag18.html"]],
    },
  },

  kd: {
    complete: true,
    format: ["sutta"],
    links: {
      all: "",
      main_page: "https://www.dhammatalks.org/vinaya/Mv/Mahavagga_Index.html",
    },
    available: [
      [1, "/vinaya/Mv/MvI_Index"],
      [2, "/vinaya/Mv/MvII_Index"],
      [3, "/vinaya/Mv/MvIII_Index"],
      [4, "/vinaya/Mv/MvIII_Index"],
      [5, "/vinaya/Mv/MvV_Index"],
      [6, "/vinaya/Mv/MvVI_Index"],
      [7, "/vinaya/Mv/MvVII_Index"],
      [8, "/vinaya/Mv/MvVIII_Index"],
      [9, "/vinaya/Mv/MvIX_Index"],
      [10, "/vinaya/Mv/MvX_Index"],
    ],
  },
};
