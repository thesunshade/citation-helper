export let ancientBuddhistTexts = {
  constants: {
    rootUrl: "https://www.ancient-buddhist-texts.net",
    suffixUrl: "",
    chapterConnector: "",
  },
  dn: {
    format: ["sutta"],
    links: { card: "", all: "" },
    available: [
      [16, "/Texts-and-Translations/Mahaparinibbanasuttam/index.htm"],
      [22, "/Texts-and-Translations/Satipatthana/index.htm"],
    ],
  },
  mn: {
    format: ["sutta"],

    links: { all: "" },
    available: [
      [26, "/Texts-and-Translations/Ariyapariyesana/index.htm"],
      [44, "/Texts-and-Translations/Culavedalla/Culavedalla.htm"],
      [62, "/Texts-and-Translations/Short-Pieces/MahaRahulovadasuttam.htm"],
      [85, "/Texts-and-Translations/Bodhirajakumara/index.htm"],
      [98, "/Texts-and-Translations/Short-Pieces/Vasetthasuttam.htm"],
      [118, "/Texts-and-Translations/Anapanasati/index.htm"],
      [119, "/Texts-and-Translations/Kayagatasati/index.htm"],
      [141, "/Texts-and-Translations/Short-Pieces/Saccavibhangasuttam.htm"],
      [142, "/Texts-and-Translations/Short-Pieces/Dakkhinavibhangasuttam.htm"],
      [146, "/Texts-and-Translations/Nandakovada/Nandakovada.htm"],
    ],
  },
  sn: {
    format: ["chapter"],
    links: { card: "", all: "" },
    // range_suttas_required: false,
    available: {
      5: [
        [1, "/Texts-and-Translations/Bhikkhunisamyuttam/01-Alavika.htm"],
        [2, "/Texts-and-Translations/Bhikkhunisamyuttam/02-Soma.htm"],
        [3, "/Texts-and-Translations/Bhikkhunisamyuttam/03-Kisagotami.htm"],
        [4, "/Texts-and-Translations/Bhikkhunisamyuttam/04-Vijaya.htm"],
        [5, "/Texts-and-Translations/Bhikkhunisamyuttam/05-Uppalavanna.htm"],
        [6, "/Texts-and-Translations/Bhikkhunisamyuttam/06-Cala.htm"],
        [7, "/Texts-and-Translations/Bhikkhunisamyuttam/07-Upacala.htm"],
        [8, "/Texts-and-Translations/Bhikkhunisamyuttam/08-Sisupacala.htm"],
        [9, "/Texts-and-Translations/Bhikkhunisamyuttam/09-Sela.htm"],
        [10, "/Texts-and-Translations/Bhikkhunisamyuttam/10-Vajira.htm"],
      ],
      12: [[2, "/Texts-and-Translations/Short-Pieces/Paticcasamuppadavibhangasuttam.htm"]],
      35: [[95, "/Texts-and-Translations/Short-Pieces/Malunkyaputtasuttam.htm"]],
      44: [[1, "/Texts-and-Translations/Short-Pieces/Khemasuttam.htm"]],
      48: [[10, "/Texts-and-Translations/Short-Pieces/Indriyavibhangasuttam.htm"]],
      56: [[11, "/Texts-and-Translations/Short-Pieces/Dhammacakkappavattanasuttam.htm"]],
    },
  },

  an: {
    format: ["chapter"],
    links: { card: "", all: "" },
    available: {
      3: [[62, "/Texts-and-Translations/Short-Pieces/Titthayatanasuttam.htm"]],
      4: [
        [61, "/Texts-and-Translations/Short-Pieces/Pattakammasuttam.htm"],
        [70, "/Texts-and-Translations/Short-Pieces/Adhammikasutta.htm"],
      ],
      5: [[41, "/Texts-and-Translations/Short-Pieces/Adiyasuttam.htm"]],
      6: [[37, "/Texts-and-Translations/Short-Pieces/Chalangadana.htm"]],
      8: [
        [51, "/Texts-and-Translations/Gotamisuttani/01-Gotami.htm"],
        [52, "/Texts-and-Translations/Gotamisuttani/02-Advising.htm"],
        [53, "/Texts-and-Translations/Gotamisuttani/03-Brief.htm"],
      ],
      10: [
        [60, "/Texts-and-Translations/Short-Pieces/Girimanandasuttam.htm"],
        [69, "/Texts-and-Translations/Short-Pieces/Kathavatthu.htm"],
      ],
    },
  },

  // kn: {
  //   format: ["sutta"],
  //   links: { card: "", all: "" },
  //   available: [],
  // },
  kp: {
    format: ["sutta"],
    links: {
      all: "",
      main_page: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Khuddakapatha/Khuddakapatha.htm",
    },
    available: [
      // This looks like this because they are all on the same page on the website.
      [1, "/Texts-and-Translations/Khuddakapatha/Khuddakapatha.htm"],
      [2, "/Texts-and-Translations/Khuddakapatha/Khuddakapatha.htm"],
      [3, "/Texts-and-Translations/Khuddakapatha/Khuddakapatha.htm"],
      [4, "/Texts-and-Translations/Khuddakapatha/Khuddakapatha.htm"],
      [5, "/Texts-and-Translations/Khuddakapatha/Khuddakapatha.htm"],
      [6, "/Texts-and-Translations/Khuddakapatha/Khuddakapatha.htm"],
      [7, "/Texts-and-Translations/Khuddakapatha/Khuddakapatha.htm"],
      [8, "/Texts-and-Translations/Khuddakapatha/Khuddakapatha.htm"],
      [9, "/Texts-and-Translations/Khuddakapatha/Khuddakapatha.htm"],
    ],
  },
  dhp: {
    links: {
      card: "",
      all: "",
      main_page: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/index.htm",
      chapter_links: {
        1: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/01-Pairs.htm",
        2: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/02-Heedfulness.htm",
        3: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/03-Mind.htm",
        4: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/04-Flowers.htm",
        5: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/05-Fools.htm",
        6: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/06-Wise.htm",
        7: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/07-Arahats.htm",
        8: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/08-Thousands.htm",
        9: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/09-Wickedness.htm",
        10: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/10-Stick.htm",
        11: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/11-Old-Age.htm",
        12: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/12-Self.htm",
        13: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/13-World.htm",
        14: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/14-Buddha.htm",
        15: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/15-Happiness.htm",
        16: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/16-Love.htm",
        17: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/17-Anger.htm",
        18: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/18-Stains.htm",
        19: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/19-Dhamma.htm",
        20: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/20-Path.htm",
        21: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/21-Miscellaneous.htm",
        22: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/22-Underworld.htm",
        23: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/23-Elephant.htm",
        24: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/24-Craving.htm",
        25: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/25-Monastics.htm",
        26: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Dhammapada/26-Brahmins.htm",
      },
    },
    complete: true,
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
    available: [
      [1, "/Texts-and-Translations/Dhammapada/01-Pairs.htm"],
      [2, "/Texts-and-Translations/Dhammapada/02-Heedfulness.htm"],
      [3, "/Texts-and-Translations/Dhammapada/03-Mind.htm"],
      [4, "/Texts-and-Translations/Dhammapada/04-Flowers.htm"],
      [5, "/Texts-and-Translations/Dhammapada/05-Fools.htm"],
      [6, "/Texts-and-Translations/Dhammapada/06-Wise.htm"],
      [7, "/Texts-and-Translations/Dhammapada/07-Arahats.htm"],
      [8, "/Texts-and-Translations/Dhammapada/08-Thousands.htm"],
      [9, "/Texts-and-Translations/Dhammapada/09-Wickedness.htm"],
      [10, "/Texts-and-Translations/Dhammapada/10-Stick.htm"],
      [11, "/Texts-and-Translations/Dhammapada/11-Old-Age.htm"],
      [12, "/Texts-and-Translations/Dhammapada/12-Self.htm"],
      [13, "/Texts-and-Translations/Dhammapada/13-World.htm"],
      [14, "/Texts-and-Translations/Dhammapada/14-Buddha.htm"],
      [15, "/Texts-and-Translations/Dhammapada/15-Happiness.htm"],
      [16, "/Texts-and-Translations/Dhammapada/16-Love.htm"],
      [17, "/Texts-and-Translations/Dhammapada/17-Anger.htm"],
      [18, "/Texts-and-Translations/Dhammapada/18-Stains.htm"],
      [19, "/Texts-and-Translations/Dhammapada/19-Dhamma.htm"],
      [20, "/Texts-and-Translations/Dhammapada/20-Path.htm"],
      [21, "/Texts-and-Translations/Dhammapada/21-Miscellaneous.htm"],
      [22, "/Texts-and-Translations/Dhammapada/22-Underworld.htm"],
      [23, "/Texts-and-Translations/Dhammapada/23-Elephant.htm"],
      [24, "/Texts-and-Translations/Dhammapada/24-Craving.htm"],
      [25, "/Texts-and-Translations/Dhammapada/25-Monastics.htm"],
      [26, "/Texts-and-Translations/Dhammapada/26-Brahmins.htm"],
    ],
  },
  ud: {
    format: ["chapter", "sutta"],
    links: {
      card: "",
      all: "",
      main_page: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Udana/index.htm",
    },
    complete: true,
    available: {
      1: [
        [1, "/Texts-and-Translations/Udana/1-Bodhivaggo-01.htm"],
        [2, "/Texts-and-Translations/Udana/1-Bodhivaggo-02.htm"],
        [3, "/Texts-and-Translations/Udana/1-Bodhivaggo-03.htm"],
        [4, "/Texts-and-Translations/Udana/1-Bodhivaggo-04.htm"],
        [5, "/Texts-and-Translations/Udana/1-Bodhivaggo-05.htm"],
        [6, "/Texts-and-Translations/Udana/1-Bodhivaggo-06.htm"],
        [7, "/Texts-and-Translations/Udana/1-Bodhivaggo-07.htm"],
        [8, "/Texts-and-Translations/Udana/1-Bodhivaggo-08.htm"],
        [9, "/Texts-and-Translations/Udana/1-Bodhivaggo-09.htm"],
        [10, "/Texts-and-Translations/Udana/1-Bodhivaggo-10.htm"],
      ],
      2: [
        [1, "/Texts-and-Translations/Udana/2-Mucalindavaggo-01.htm"],
        [2, "/Texts-and-Translations/Udana/2-Mucalindavaggo-02.htm"],
        [3, "/Texts-and-Translations/Udana/2-Mucalindavaggo-03.htm"],
        [4, "/Texts-and-Translations/Udana/2-Mucalindavaggo-04.htm"],
        [5, "/Texts-and-Translations/Udana/2-Mucalindavaggo-05.htm"],
        [6, "/Texts-and-Translations/Udana/2-Mucalindavaggo-06.htm"],
        [7, "/Texts-and-Translations/Udana/2-Mucalindavaggo-07.htm"],
        [8, "/Texts-and-Translations/Udana/2-Mucalindavaggo-08.htm"],
        [9, "/Texts-and-Translations/Udana/2-Mucalindavaggo-09.htm"],
        [10, "/Texts-and-Translations/Udana/2-Mucalindavaggo-10.htm"],
      ],
      3: [
        [1, "/Texts-and-Translations/Udana/3-Nandavaggo-01.htm"],
        [2, "/Texts-and-Translations/Udana/3-Nandavaggo-02.htm"],
        [3, "/Texts-and-Translations/Udana/3-Nandavaggo-03.htm"],
        [4, "/Texts-and-Translations/Udana/3-Nandavaggo-04.htm"],
        [5, "/Texts-and-Translations/Udana/3-Nandavaggo-05.htm"],
        [6, "/Texts-and-Translations/Udana/3-Nandavaggo-06.htm"],
        [7, "/Texts-and-Translations/Udana/3-Nandavaggo-07.htm"],
        [8, "/Texts-and-Translations/Udana/3-Nandavaggo-08.htm"],
        [9, "/Texts-and-Translations/Udana/3-Nandavaggo-09.htm"],
        [10, "/Texts-and-Translations/Udana/3-Nandavaggo-10.htm"],
      ],
      4: [
        [1, "/Texts-and-Translations/Udana/4-Meghiyavaggo-01.htm"],
        [2, "/Texts-and-Translations/Udana/4-Meghiyavaggo-02.htm"],
        [3, "/Texts-and-Translations/Udana/4-Meghiyavaggo-03.htm"],
        [4, "/Texts-and-Translations/Udana/4-Meghiyavaggo-04.htm"],
        [5, "/Texts-and-Translations/Udana/4-Meghiyavaggo-05.htm"],
        [6, "/Texts-and-Translations/Udana/4-Meghiyavaggo-06.htm"],
        [7, "/Texts-and-Translations/Udana/4-Meghiyavaggo-07.htm"],
        [8, "/Texts-and-Translations/Udana/4-Meghiyavaggo-08.htm"],
        [9, "/Texts-and-Translations/Udana/4-Meghiyavaggo-09.htm"],
        [10, "/Texts-and-Translations/Udana/4-Meghiyavaggo-10.htm"],
      ],
      5: [
        [1, "/Texts-and-Translations/Udana/5-Sonavaggo-01-01.htm"],
        [2, "/Texts-and-Translations/Udana/5-Sonavaggo-01-02.htm"],
        [3, "/Texts-and-Translations/Udana/5-Sonavaggo-01-03.htm"],
        [4, "/Texts-and-Translations/Udana/5-Sonavaggo-01-04.htm"],
        [5, "/Texts-and-Translations/Udana/5-Sonavaggo-01-05.htm"],
        [6, "/Texts-and-Translations/Udana/5-Sonavaggo-01-06.htm"],
        [7, "/Texts-and-Translations/Udana/5-Sonavaggo-01-07.htm"],
        [8, "/Texts-and-Translations/Udana/5-Sonavaggo-01-08.htm"],
        [9, "/Texts-and-Translations/Udana/5-Sonavaggo-01-09.htm"],
        [10, "/Texts-and-Translations/Udana/5-Sonavaggo-01-10.htm"],
      ],
      6: [
        [1, "/Texts-and-Translations/Udana/6-Jaccandhavaggo-01.htm"],
        [2, "/Texts-and-Translations/Udana/6-Jaccandhavaggo-02.htm"],
        [3, "/Texts-and-Translations/Udana/6-Jaccandhavaggo-03.htm"],
        [4, "/Texts-and-Translations/Udana/6-Jaccandhavaggo-04.htm"],
        [5, "/Texts-and-Translations/Udana/6-Jaccandhavaggo-05.htm"],
        [6, "/Texts-and-Translations/Udana/6-Jaccandhavaggo-06.htm"],
        [7, "/Texts-and-Translations/Udana/6-Jaccandhavaggo-07.htm"],
        [8, "/Texts-and-Translations/Udana/6-Jaccandhavaggo-08.htm"],
        [9, "/Texts-and-Translations/Udana/6-Jaccandhavaggo-09.htm"],
        [10, "/Texts-and-Translations/Udana/6-Jaccandhavaggo-10.htm"],
      ],
      7: [
        [1, "/Texts-and-Translations/Udana/7-Cullavaggo-01.htm"],
        [2, "/Texts-and-Translations/Udana/7-Cullavaggo-02.htm"],
        [3, "/Texts-and-Translations/Udana/7-Cullavaggo-03.htm"],
        [4, "/Texts-and-Translations/Udana/7-Cullavaggo-04.htm"],
        [5, "/Texts-and-Translations/Udana/7-Cullavaggo-05.htm"],
        [6, "/Texts-and-Translations/Udana/7-Cullavaggo-06.htm"],
        [7, "/Texts-and-Translations/Udana/7-Cullavaggo-07.htm"],
        [8, "/Texts-and-Translations/Udana/7-Cullavaggo-08.htm"],
        [9, "/Texts-and-Translations/Udana/7-Cullavaggo-09.htm"],
        [10, "/Texts-and-Translations/Udana/7-Cullavaggo-10.htm"],
      ],
      8: [
        [1, "/Texts-and-Translations/Udana/8-Pataligamiyavaggo-01.htm"],
        [2, "/Texts-and-Translations/Udana/8-Pataligamiyavaggo-02.htm"],
        [3, "/Texts-and-Translations/Udana/8-Pataligamiyavaggo-03.htm"],
        [4, "/Texts-and-Translations/Udana/8-Pataligamiyavaggo-04.htm"],
        [5, "/Texts-and-Translations/Udana/8-Pataligamiyavaggo-05.htm"],
        [6, "/Texts-and-Translations/Udana/8-Pataligamiyavaggo-06.htm"],
        [7, "/Texts-and-Translations/Udana/8-Pataligamiyavaggo-07.htm"],
        [8, "/Texts-and-Translations/Udana/8-Pataligamiyavaggo-08.htm"],
        [9, "/Texts-and-Translations/Udana/8-Pataligamiyavaggo-09.htm"],
        [10, "/Texts-and-Translations/Udana/8-Pataligamiyavaggo-10.htm"],
      ],
    },
  },

  snp: {
    format: ["chapter"],
    links: {
      card: "",
      all: "",
      chapter_links: { 5: "https://www.ancient-buddhist-texts.net/Texts-and-Translations/Parayanavagga/index.htm" },
    },
    available: {
      5: [
        [1, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-01.htm"],
        [2, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-02.htm"],
        [3, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-03.htm"],
        [4, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-04.htm"],
        [5, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-05.htm"],
        [6, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-06.htm"],
        [7, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-07.htm"],
        [8, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-08.htm"],
        [9, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-09.htm"],
        [10, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-10.htm"],
        [11, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-11.htm"],
        [12, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-12.htm"],
        [13, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-13.htm"],
        [14, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-14.htm"],
        [15, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-15.htm"],
        [16, "/Texts-and-Translations/Parayanavagga/Parayanavaggo-16.htm"],
      ],
    },
  },

  ja: {
    available: [],
    links: {
      card: "",
      all: "",
      main_page: "https://www.ancient-buddhist-texts.net/English-Texts/Jataka/index.htm#gsc.tab=0",
    },
  },
};
