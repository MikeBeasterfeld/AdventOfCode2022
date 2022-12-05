
export function sumPriority(input: string): number {
    return input.split("\n").map((twoSacks) => splitStringInHalf(twoSacks)).reduce((prev, current) => { return prev + findRepeatValue(current) }, 0);
}

export function sumPriorityBadges(input: string): number {
    const inputArray = input.split("\n");

    let sum = 0;

    while (inputArray.length) {
        const [bp1, bp2, bp3] = [inputArray.shift(), inputArray.shift(), inputArray.shift()];

        if (bp1 && bp2 && bp3) {
            sum += bp1.split("").reduce((prev, current) => {
                if (bp2?.includes(current) && bp3?.includes(current)) {
                    return calculateValue(current);
                }
                return prev;
            }, 0);
        }
    }

    return sum;
}

function splitStringInHalf(input: string) {
    return [input.substring(0, input.length / 2), input.substring(input.length / 2)];
}

function findRepeatValue(sacks: string[]): number {
    const [sackOne, sackTwo] = sacks;

    return sackOne.split("").reduce((prev, current) => {
        if (sackTwo.includes(current)) {
            return calculateValue(current);
        }
        return prev;
    }, 0);
}

function calculateValue(char: string): number {
    if (char.charCodeAt(0) > 96) {
        return char.charCodeAt(0) - 96;
    }
    return char.charCodeAt(0) - 38;
}