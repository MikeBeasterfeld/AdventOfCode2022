
import { decodeFourteen } from "../modules/tuningTrouble";
import BasicInputOutput from "./BasicInputOutput";

function Day6Part2() {
    return (
        <BasicInputOutput func={decodeFourteen} inputLabel={"Stream with 14 unique characters"} outputLabel={"Start of packet"} />
    );
}

export default Day6Part2;
