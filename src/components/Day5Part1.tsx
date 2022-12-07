
import { makeSingleMoves } from "../modules/supplyStacks";
import BasicInputOutput from "./BasicInputOutput";

function Day5Part1() {
    return (
        <BasicInputOutput func={makeSingleMoves} inputLabel={"Crate configuration and moves for Cratemover 9000"} outputLabel={"Top crates"} />
    );
}

export default Day5Part1;
