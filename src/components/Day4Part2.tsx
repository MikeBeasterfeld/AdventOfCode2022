import { cleanupAnyOverlap } from "../modules/campCleanup";
import BasicInputOutput from "./BasicInputOutput";

function Day4Part2() {
    return (
        <BasicInputOutput func={cleanupAnyOverlap} inputLabel={"Section assignments"} outputLabel={"Overlapping section count"} />
    );
}

export default Day4Part2;
