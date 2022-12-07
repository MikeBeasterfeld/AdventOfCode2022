
export function decodeFour(input: string): number {
    return decodeStream(input, 4);
}

export function decodeFourteen(input: string): number {
    return decodeStream(input, 14);
}

export function decodeStream(input: string, length: number): number {
    const chars = input.split("");

    let position = 0;

    for(let i = length; i < chars.length && position === 0; i++) {
        const fourBlock = chars.slice(i - length, i);

        if (fourBlock.filter((value, index) => fourBlock.indexOf(value) === index).length === length) {
            position = i;
        }
    }

    return position;
}
