import mask from "../../index.js";

describe("milliseconds to date", () => {
  test("Mascara de Milesegundos só para data", () => {
    mask.millisecondsToDate(1587647835661);
    mask.millisecondsToDate('');
  });
});
