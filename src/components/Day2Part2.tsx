import { playWithSpecifiedOutcome } from "../modules/rockPaperScissors";
import BasicInputOutput from "./BasicInputOutput";

function Day2Part2() {
    return (
        <BasicInputOutput func={playWithSpecifiedOutcome} inputLabel={"Strategy Guide (Updated)"} outputLabel={"Score"} />
    );
}

export default Day2Part2;
