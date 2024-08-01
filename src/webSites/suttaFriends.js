export let suttaFriends = {
  constants: {
    rootUrl: "https://suttafriends.org/sutta",
    suffixUrl: "",
    chapterConnector: "-",
  },
  dn: {
    links: { card: "/long/dn", all: "/dn", main_page: "https://suttafriends.org/dn" },
    available: [14, 18, 22, 24, 26, 27, 28, 30, 31, 32],
  },
  mn: {
    links: { all: "/mn", main_page: "https://suttafriends.org/mn" },
    available: [10, 21, 58, 82, 87, 89, 116, 135, 141, 142],
  },
  sn: {
    links: {
      all: "/sn",
      main_page: "https://suttafriends.org/sn",
      chapter_links: {
        1: "https://suttafriends.org/1-devata-samyutta-conversations-with-devas",
        3: "https://suttafriends.org/3-kosala-samyutta-conversations-with-king-pasenadi/",
        6: "https://suttafriends.org/sn6-brahma-samyutta-stories-of-brahmas/",
        7: "https://suttafriends.org/sn-7-brahmana-samyutta-conversations-with-brahmins/",
        10: "https://suttafriends.org/sn10-yakkha-samyutta-with-yakkhas/",
        11: "https://suttafriends.org/sn-11-sakka-samyutta-stories-of-god-sakka/",
        15: "https://suttafriends.org/sn15-anamatagga-samyutta-connected-discourses-without-discoverable-beginning/",
        19: "https://suttafriends.org/sn-19-lakkhana-samyutta-conversations-with-arahant-lakkhana-about-ghosts/",
        22: "https://suttafriends.org/sn22-khandha-samyutta-connected-discourses-on-the-groups-of-clinging/",
        35: "https://suttafriends.org/sn35-salayatana-samyutta-connected-discourses-on-the-six-sense-bases/",
        45: "https://suttafriends.org/sn-45-magga-samyutta-connected-discourses-on-the-path/",
        46: "https://suttafriends.org/sn46-bojjhanga-samyutta-discourses-on-the-enlightenment-factors/",
        55: "https://suttafriends.org/sn-55-sotapatti-samyutta-stream-entry/",
        56: "https://suttafriends.org/sn56-sacca-samyutta-discourses-on-the-four-noble-truths/",
      },
    },
    range_suttas: {
      55: [[63, 74]],
      56: [[61, 70], [81, 90], [91, 101], [105, 107], [108 - 110], [111, 113], [114, 116], [117, 119], [120, 222], [123, 125], [126, 128], [129, 130]],
    },
    available: {
      1: [3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 16, 17, 18, 23, 24],
      3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      6: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      7: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      10: [12],
      11: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      15: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      19: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      22: [59],
      35: [28],
      46: [14],
      55: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62],
      56: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    },
  },

  an: {
    links: { all: "/an", main_page: "https://suttafriends.org/an" },
    range_suttas: {
      1: [
        [1, 10],
        [11, 20],
        [21, 30],
        [31, 40],
        [41, 50],
        [51, 60],
        [61, 70],
        [71, 81],
        [82, 97],
        [98, 139],
        [140, 149],
        [150, 169],
        [170, 187],
        [188, 234],
        [235, 247],
        [248, 257],
        [258, 267],
        [268, 295],
        [296, 377],
        [378, 393],
        [394, 574],
        [575, 615],
        [616, 627],
      ],
    },
    available: {
      1: [1, 11, 21, 31, 41, 51, 61, 71, 82, 98, 140, 150, 170, 188, 235, 248, 258, 268, 296, 378, 394, 575, 616],
      3: [100],
      4: [67],
      5: [31, 162, 180, 199, 235],
      6: [45],
      7: [67, 74],
      8: [40, 41],
      9: [3, 7, 20],
      10: [46, 60, 67, 68],
      11: [15],
    },
  },

  kn: {
    links: { card: "/minor/kn", all: "/kn" },
    available: [],
  },
  kp: {
    links: { all: "/sutta/khp", main_page: "https://suttafriends.org/khp" },
    available: [1, 2, 5, 6, 7, 8, 9],
  },
  dhp: {
    links: {
      card: "/minor/dhp",
      main_page: "https://suttafriends.org/dhp",
      all: "/dhp",
      idPrefix: "#v",
      chapter_links: {
        1: "https://suttafriends.org/sutta/dhp1/",
        2: "https://suttafriends.org/sutta/dhp2/",
        3: "https://suttafriends.org/sutta/dhp3/",
        4: "https://suttafriends.org/sutta/dhp4/",
        5: "https://suttafriends.org/sutta/dhp5/",
        6: "https://suttafriends.org/sutta/dhp6/",
        7: "https://suttafriends.org/sutta/dhp7/",
        8: "https://suttafriends.org/sutta/dhp8/",
        9: "https://suttafriends.org/sutta/dhp9/",
        10: "https://suttafriends.org/sutta/dhp10/",
        11: "https://suttafriends.org/sutta/dhp11/",
        12: "https://suttafriends.org/sutta/dhp12/",
        13: "https://suttafriends.org/sutta/dhp13/",
        14: "https://suttafriends.org/sutta/dhp14/",
        15: "https://suttafriends.org/sutta/dhp15/",
        16: "https://suttafriends.org/sutta/dhp16/",
        17: "https://suttafriends.org/sutta/dhp17/",
        18: "https://suttafriends.org/sutta/dhp18/",
        19: "https://suttafriends.org/sutta/dhp19/",
        20: "https://suttafriends.org/sutta/dhp20/",
        21: "https://suttafriends.org/sutta/dhp21/",
        22: "https://suttafriends.org/sutta/dhp22/",
        23: "https://suttafriends.org/sutta/dhp23/",
        24: "https://suttafriends.org/sutta/dhp24/",
        25: "https://suttafriends.org/sutta/dhp25/",
        26: "https://suttafriends.org/sutta/dhp26/",
      },
    },
    available: [],
    complete: true,
    urlIsInFormOfChapterNumber: true,
    leadingZero: false,
    range_suttas: [
      [1, 20],
      [21, 32],
      [33, 43],
      [44, 59],
      [60, 75],
      [76, 89],
      [90, 99],
      [100, 115],
      [116, 128],
      [129, 145],
      [146, 156],
      [157, 166],
      [167, 178],
      [179, 196],
      [197, 208],
      [209, 220],
      [221, 234],
      [235, 255],
      [256, 272],
      [273, 289],
      [290, 305],
      [306, 319],
      [320, 333],
      [334, 359],
      [360, 382],
      [383, 423],
    ],
  },
  ud: {
    links: { all: "/ud", main_page: "https://suttafriends.org/ud" },
    complete: false,
    available: {
      1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  iti: {
    links: { all: "/itv", main_page: "https://suttafriends.org/itv" },
    complete: true,
  },
  snp: {
    links: { all: "/snp", main_page: "https://suttafriends.org/snp" },
    available: { 1: [4, 6, 7, 8, 10], 2: [1, 4], 3: [1] },
    complete: false,
  },
  vv: {
    links: { all: "/vv", main_page: "https://suttafriends.org/vv" },
    complete: true,
    conversion_offset: { 1: 0, 2: 17, 3: 28, 4: 38, 5: 50, 6: 64, 7: 74 },
  },
  pv: {
    links: { all: "/pv", main_page: "https://suttafriends.org/pv" },
    complete: true,
    conversion_offset: { 1: 0, 2: 12, 3: 25, 4: 35 },
  },
  thag: {
    links: { all: "/thag", main_page: "https://suttafriends.org/thag" },
    complete: true,
    range_suttas: {
      1: [[1, 120]],
      2: [[1, 49]],
    },
  },
  thig: {
    links: { all: "/thig", main_page: "https://suttafriends.org/thig" },
    complete: true,
    range_suttas: {
      1: [[1, 18]],
      2: [[1, 10]],
    },
  },
};
