const { isRightSolutionForQuestion } = require("./Quiz");

describe("Quiz", () => {
  it("should validate correct answers", () => {
    expect(isRightSolutionForQuestion("frage_1", "Weil er immer kalt gelötet ist.")).toBe(true);
    expect(isRightSolutionForQuestion("frage_2", "Weil sie sich ständig im Code verheddern.")).toBe(true);
    expect(isRightSolutionForQuestion("frage_3", "Weil er einen Virus hatte.")).toBe(true);
    expect(isRightSolutionForQuestion("frage_4", "Logout.")).toBe(true);
    expect(isRightSolutionForQuestion("frage_5", "Sie hatte zu viele Back-End-Probleme.")).toBe(true);
  });

  it("should validate incorrect answers", () => {
    expect(isRightSolutionForQuestion("frage_1", "Falsche Antwort")).toBe(false);
    expect(isRightSolutionForQuestion("frage_2", "Falsche Antwort")).toBe(false);
    expect(isRightSolutionForQuestion("frage_3", "Falsche Antwort")).toBe(false);
    expect(isRightSolutionForQuestion("frage_4", "Falsche Antwort")).toBe(false);
    expect(isRightSolutionForQuestion("frage_5", "Falsche Antwort")).toBe(false);
  });
});
