
// let filesystem: Record<string, {
//     parent: string;
//     children: string[];
//     size: number;
//     type: string;
// }> = {};

type entity = {
    name: string;
    type: string;
    parent?: entity;
    children: entity[];
    size: number;
};

function buildFilesystem(input: string): entity {
    const root: entity = {
        name: "/",
        type: "directory",
        children: [],
        size: 0
    };

    let currentDir = root;

    input.split("\n").forEach((line) => {
        if(line.match(/^\$ cd \//)) {
            currentDir = root;            
            return;
        }

        if(line.match(/^\$ cd [A-Za-z]+/)) {
            const [_prompt, _command, directory] = line.split(" ");
            // console.log("move into", directory);

            const dir = {
                name: directory,
                parent: currentDir,
                children: [],
                type: "directory",
                size: 0
            }

            currentDir["children"].push(dir);

            currentDir = dir;
        }

        if(line.match(/^\$ cd \.\./)) {
            if(currentDir["parent"]) {
                currentDir = currentDir["parent"];
            }
            // console.log("move up into", currentDir.name);
        }

        if(line.match(/^\d/)) {
            const[size, name] = line.split(" ");

            const file = {
                name,
                parent: currentDir,
                size: Number(size),
                children: [],
                type: "file"
            };

            currentDir["children"].push(file);

            recurseAncestryAndUpdateSize(currentDir, Number(size));
        }

    });

    console.log(root);

    return root;
}

export function usageUnder100K(input: string): number {
    const root = buildFilesystem(input);

    return recurseAndFindSmallerDirectories(root);
}

export function largestDirectoryToMakeEnoughSpace(input: string): number {
    const root = buildFilesystem(input);

    const totalSpace = 70000000;
    const freeSpace = totalSpace - root.size;
    const spaceNeeded = 30000000 - freeSpace;

    console.log({rootSize: root.size, totalSpace, freeSpace, spaceNeeded});

    return recurseAndFindLargestDirectoryUnderLimit(root, spaceNeeded);
}

function recurseAndFindLargestDirectoryUnderLimit(root: entity, spaceNeeded: number): number {
    return root.children.reduce((prev, current) => {
        if(current.type === "file") {
            return prev;
        }

        const bestChild = recurseAndFindLargestDirectoryUnderLimit(current, spaceNeeded);

        // if(current.size < spaceNeeded) {
        //     console.log("right size", current);
        // }

        if(current.size > spaceNeeded && current.size < bestChild && current.size < prev) {
            console.log(current.name, current.size, "beat best child", bestChild);
            return current.size;
        }

        if(bestChild < prev) {
            return bestChild;
        }

        return prev;
    }, 70000000);
};

function recurseAndFindSmallerDirectories(directory: entity): number {
    return directory.children.reduce((prev, current) => {
        if(current.type === "file") {
            return prev;
        }

        const grandChildSum = recurseAndFindSmallerDirectories(current);

        // console.log("directory", current.name, current.size);
        // console.log("grandSum", grandChildSum);

        if(current.size <= 100000) {
            // console.log("I am smol", current.name);
            return prev + current.size + grandChildSum;
        }

        return prev + grandChildSum;
    }, 0)
}

function recurseAncestryAndUpdateSize(parent: entity, size: number) {
    parent["size"] += size;

    if(parent["parent"]) {
        // console.log("recusing", parent, parent["parent"]);
        recurseAncestryAndUpdateSize(parent["parent"], size);
    }
}
