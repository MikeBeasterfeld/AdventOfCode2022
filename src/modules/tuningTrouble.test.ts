import { decodeStream } from "./tuningTrouble";

describe("tuning truble", () => {
    it("should find first 4 unique characters", () => {
        const input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";

        expect(decodeStream(input, 4)).toEqual(7);
    });

    it("should find first 14 unique characters", () => {
        const input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";

        expect(decodeStream(input, 14)).toEqual(19);
    });

});
