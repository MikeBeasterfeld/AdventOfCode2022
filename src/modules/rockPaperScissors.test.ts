import { play, playWithSpecifiedOutcome } from "./rockPaperScissors";

describe("Elf Rock Paper Scissors", () => {
    it("normal play should return a score of 15", () => {
        const input = "A Y\nB X\nC Z";
        expect(play(input)).toEqual(15);
    });

    it("play with decided outcome should return a score of 12", () => {
        const input = "A Y\nB X\nC Z";
        expect(playWithSpecifiedOutcome(input)).toEqual(12);
    });
});
