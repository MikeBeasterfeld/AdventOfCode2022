import { makeMoves } from "./supplyStacks";

describe("Supply Stacks", () => {
    it("should return the top crates", () => {
        const input = "    [D]    \n[N] [C]    \n[Z] [M] [P]\n1   2   3 \n\nmove 1 from 2 to 1\nmove 3 from 1 to 3\nmove 2 from 2 to 1\nmove 1 from 1 to 2\n";
        expect(makeMoves(input)).toEqual("CMZ");
    });
});
