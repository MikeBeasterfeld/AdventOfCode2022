
import { largestDirectoryToMakeEnoughSpace } from "../modules/noSpace";
import BasicInputOutput from "./BasicInputOutput";

function Day7Part2() {
    return (
        <BasicInputOutput func={largestDirectoryToMakeEnoughSpace} inputLabel={"Filesystem command output"} outputLabel={"Size of best directory to delete"} />
    );
}

export default Day7Part2;
