import { cleanupAnyOverlap, cleanupEncompassing } from "./campCleanup";

describe("Camp Cleanup", () => {
    it("should find two section assignments that completely overlap", () => {
        const input = "2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8";
        expect(cleanupEncompassing(input)).toEqual(2);
    });
    it("should find two section assignments that overlap at all", () => {
        const input = "2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8";
        expect(cleanupAnyOverlap(input)).toEqual(4);
    });
});
