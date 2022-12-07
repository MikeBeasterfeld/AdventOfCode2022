import { largestDirectoryToMakeEnoughSpace, usageUnder100K } from "./noSpace";

describe("no space left", () => {
    it("should return total size of all driectories less than 1 000 000", () => {
        const input = "$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k";
        expect(usageUnder100K(input)).toEqual(95437);
    });

    it("should return smallest directory that can clear enough space", () => {
        const input = "$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k";
        expect(largestDirectoryToMakeEnoughSpace(input)).toEqual(24933642);
    });
});