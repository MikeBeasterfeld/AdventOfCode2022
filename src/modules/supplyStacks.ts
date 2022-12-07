
export function makeMoves(input: string, func: (stacks: string[][], count: string, source: string, dest: string ) => string[][]): string {
    const lines = input.split("\n");
    let stacks: string[][] = [];
    lines.forEach((line) => {
        if(line.substring(0, 1).match(/^(\s|\[)/)) {
            const splitStacks = line.match(/.{1,4}/g);
            splitStacks?.forEach((stack, index) => {
                if(!stacks[index]) {
                    stacks[index] = [];
                }
                if(stack.substring(1,2) !== " ") {
                    stacks[index].unshift(stack.substring(1,2));
                }
            });
        }

        if(line.match(/^move/)) {
            const [_move, count, _from, source, _to, dest ] = line.split(" ");

            stacks = func(stacks, count, source, dest);
        }
    });

    return stacks.reduce((prev, current) => {
        return `${prev}${current.pop()}`;
    }, "");
}

export function makeSingleMoves(input: string): string {
    return makeMoves(input, makeSingleMovesFunc);
}

export function makeSingleMovesFunc(stacks: string[][], count: string, source: string, dest: string): string[][] {
    for(let i = 0; i < Number(count); i++) {
        const crateToMove = stacks[Number(source) - 1].pop();
        if(crateToMove) {
            stacks[Number(dest) - 1].push(crateToMove);
        }
    }

    return stacks;
}

export function makeMultiMoves(input: string): string {
    return makeMoves(input, makeMultiMovesFunc);
}


export function makeMultiMovesFunc(stacks: string[][], count: string, source: string, dest: string): string[][] {
    let cratesToMove: string[] = [];
    for(let i = 0; i < Number(count); i++) {
        const crate = stacks[Number(source) - 1].pop();
        if (crate){
            cratesToMove.unshift(crate);
        }
    }

    cratesToMove.forEach((crate) => {
        if (crate) {
            stacks[Number(dest) - 1].push(crate)
        }
    });

    return stacks;
}

