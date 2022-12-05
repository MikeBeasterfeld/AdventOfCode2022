import { cleanupEncompassing } from "../modules/campCleanup";
import BasicInputOutput from "./BasicInputOutput";

function Day4Part1() {
    return (
        <BasicInputOutput func={cleanupEncompassing} inputLabel={"Section assignments"} outputLabel={"Encompassing section count"} />
    );
}

export default Day4Part1;
