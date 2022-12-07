
import { decodeFour } from "../modules/tuningTrouble";
import BasicInputOutput from "./BasicInputOutput";

function Day6Part1() {
    return (
        <BasicInputOutput func={decodeFour} inputLabel={"Stream with 4 unique characters"} outputLabel={"Start of packet"} />
    );
}

export default Day6Part1;
