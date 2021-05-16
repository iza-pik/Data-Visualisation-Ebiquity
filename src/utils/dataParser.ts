export const dataParser = (data: any, ticker: string) =>
  (data[ticker] || []).map((datum: number, idx: number) => [
    Date.now() + idx * 86400000,
    datum,
  ]);
