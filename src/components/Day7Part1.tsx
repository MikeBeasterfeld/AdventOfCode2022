
import { usageUnder100K } from "../modules/noSpace";
import BasicInputOutput from "./BasicInputOutput";

function Day7Part1() {
    return (
        <BasicInputOutput func={usageUnder100K} inputLabel={"Filesystem command output"} outputLabel={"Sum of directories under 10,000"} />
    );
}

export default Day7Part1;
