
import { makeMoves } from "../modules/supplyStacks";
import BasicInputOutput from "./BasicInputOutput";

function Day5Part1() {
    return (
        <BasicInputOutput func={makeMoves} inputLabel={"Crate configuration and moves"} outputLabel={"Top crates"} />
    );
}

export default Day5Part1;
