import { sumPriority } from "../modules/rucksack";
import BasicInputOutput from "./BasicInputOutput";

function Day3Part1() {
    return (
        <BasicInputOutput func={sumPriority} inputLabel={"Rucksack contents"} outputLabel={"Priority sum"} />
    );
}

export default Day3Part1;
