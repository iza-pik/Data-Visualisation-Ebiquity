import { dataParser, getColour, defaultColour } from ".";

const mockData = {
  ABCD: [15, 102, 907, 7.91, 9],
  EFGH: [14.8, 667, 4, 167, 8.1],
};

// mocking Date.now for test consistency
Date.now = () => 0;

describe("dataParser should", () => {
  const tests = [
    {
      ticker: "ABCD",
      expected: [
        [0, 15],
        [86400000, 102],
        [172800000, 907],
        [259200000, 7.91],
        [345600000, 9],
      ],
    },
    {
      ticker: "EFGH",
      expected: [
        [0, 14.8],
        [86400000, 667],
        [172800000, 4],
        [259200000, 167],
        [345600000, 8.1],
      ],
    },
    {
      ticker: "IJKL",
      expected: [],
    },
  ];
  tests.forEach(({ ticker, expected }) =>
    it(`return the proper payload for ${ticker}`, () => {
      expect(dataParser(mockData, ticker)).toEqual(expected);
    })
  );
});

describe("getColour should", () => {
  it.each`
    ticker    | expected
    ${"DM"}   | ${"124, 181, 236"}
    ${"TV"}   | ${"67, 67, 72"}
    ${"OOH"}  | ${"144, 237, 125"}
    ${"PPC"}  | ${"247, 163, 92"}
    ${"MSFT"} | ${defaultColour}
    ${"TSLA"} | ${defaultColour}
    ${"GOOG"} | ${defaultColour}
  `("should return the right colour for $ticker", ({ ticker, expected }) => {
    expect(getColour(ticker)).toBe(expected);
  });
});
