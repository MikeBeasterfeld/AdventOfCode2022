
function cleanup(input: string, func: (elfOneStart: number, elfOneEnd: number, elfTwoStart: number, elfTwoEnd: number) => boolean): number {
    return input.split("\n").reduce((prev, current) => {
        const [elfOne, elfTwo] = current.split(",");
        const [elfOneStart, elfOneEnd] = elfOne.split("-").map(Number);
        const [elfTwoStart, elfTwoEnd] = elfTwo.split("-").map(Number);

        if (func(elfOneStart, elfOneEnd, elfTwoStart, elfTwoEnd)) {
            console.log(current);
            return prev + 1;
        }

        return prev;

    }, 0);
}

export function cleanupEncompassing(input: string): number {
    return cleanup(input, (elfOneStart: number, elfOneEnd: number, elfTwoStart: number, elfTwoEnd: number) => {
        return (elfOneStart <= elfTwoStart && elfTwoEnd <= elfOneEnd) || (elfTwoStart <= elfOneStart && elfOneEnd <= elfTwoEnd)
    });
}

export function cleanupAnyOverlap(input: string): number {
    return cleanup(input, (elfOneStart: number, elfOneEnd: number, elfTwoStart: number, elfTwoEnd: number) => {
        return (elfOneStart <= elfTwoStart && elfOneEnd >= elfTwoStart)
            || (elfTwoStart <= elfOneStart && elfTwoEnd >= elfOneStart);
    });
}
