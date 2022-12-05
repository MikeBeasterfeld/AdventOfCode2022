const points = {
    Y: 2, // Paper
    X: 1, // Rock
    Z: 3  // Scissors
};

// const elfPoints = {
//     A: 1, // Rock
//     B: 2, // Paper
//     C: 3  // Scissors
// };

const winners = {
    Y: "A", // Paper beats Rock
    X: "C", // Rock beats Scissors
    Z: "B"  // Scissors beats Paper
};

const ties = {
    Y: "B", // Paper
    X: "A", // Rock
    Z: "C"  // Scissors
};

const outcomes = {
    X: { //losers
        A: "Z",
        B: "X",
        C: "Y"
    },
    Y: { //ties
        A: "X",
        B: "Y",
        C: "Z"
    },
    Z: { //winners
        A: "Y",
        B: "Z",
        C: "X"
    }
};

export function play(input: string): number {
    return input.split("\n").reduce((accum, next) => { return accum + score.apply(null, splitRound(next)) }, 0);
}

export function playWithSpecifiedOutcome(input: string): number {
    const converted = input.split("\n").map((round) => convertToResults(round)).join("\n");
    return play(converted);
}

function convertToResults(round: string): string {
    const [elfPlay, outcome] = splitRound(round);

    return `${elfPlay} ${outcomes[outcome][elfPlay]}`;
}

function splitRound(round: string): [elfPlays, myPlays] {
    const [elfPlay, myPlay] = round.split(" ");

    return [elfPlay as elfPlays, myPlay as myPlays];
}

type elfPlays = "A" | "B" | "C";
type myPlays = "X" | "Y" | "Z";

function score(elfPlay: elfPlays, myPlay: myPlays): number {
    if (winners[myPlay] === elfPlay) {
        return 6 + points[myPlay];
    }

    if (ties[myPlay] === elfPlay) {
        return 3 + points[myPlay];
    }

    return points[myPlay];
}
