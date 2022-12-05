import { mostCalories, topThreeTotalCalories } from "./elfCalories";

describe("Elf calories", () => {
    it("elf with the most calories should have 2,000 calories", () => {
        const input = "1000\n\n2000";
        expect(mostCalories(input)).toBe(2000);
    });

    it("elf with the most calories should have 24,000 calories", () => {
        const input = "1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000\n";
        expect(mostCalories(input)).toBe(24000);
    });

    it("3 top elfs with the most calories should have 45,000 calories total", () => {
        const input = "1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000\n";
        expect(topThreeTotalCalories(input)).toBe(45000);
    });
});
