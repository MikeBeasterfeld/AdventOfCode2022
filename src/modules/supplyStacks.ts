
export function makeMoves(input: string): string {
    const lines = input.split("\n");
    const stacks: string[][] = [];
    lines.forEach((line) => {
        if(line.substring(0, 1).match(/^(\s|\[)/)) {
            // console.log("stacks", line);
            const splitStacks = line.match(/.{1,4}/g);
            // console.log("splitStacks", splitStacks);
            splitStacks?.forEach((stack, index) => {
                if(!stacks[index]) {
                    stacks[index] = [];
                }
                if(stack.substring(1,2) !== " ") {
                    stacks[index].unshift(stack.substring(1,2));
                }
            });
            console.log("18", stacks);
        }


        if(line.match(/^move/)) {
            const [_move, count, _from, source, _to, dest ] = line.split(" ");

            for(let i = 0; i < Number(count); i++) {
                // console.log(i);
                const crateToMove = stacks[Number(source) - 1].pop();
                console.log({crateToMove});
                if(crateToMove) {
                    stacks[Number(dest) - 1].push(crateToMove);
                }
            }

            console.log("33", stacks);
        }
    });

    console.log("37", stacks);

    return stacks.reduce((prev, current) => {
        return `${prev}${current.pop()}`;
    }, "");
}