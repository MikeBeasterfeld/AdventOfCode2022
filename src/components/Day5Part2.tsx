
import { makeMultiMoves } from "../modules/supplyStacks";
import BasicInputOutput from "./BasicInputOutput";

function Day5Part1() {
    return (
        <BasicInputOutput func={makeMultiMoves} inputLabel={"Crate configuration and moves for Cratemover 9001"} outputLabel={"Top crates"} />
    );
}

export default Day5Part1;
