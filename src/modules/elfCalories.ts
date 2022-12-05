export function mostCalories(input: string) {
    return processInput(input)[0];
}

export function topThreeTotalCalories(input: string) {
    return processInput(input).slice(0, 3).reduce((prev, current) => prev + current, 0);
}

function processInput(input: string): number[] {
    return input.split("\n\n").map(elfNumbers => elfNumbers.split("\n").map((str) => Number(str)).reduce((prev, current) => prev + current, 0)).sort((a, b) => b - a);
}
