import { sumPriorityBadges } from "../modules/rucksack";
import BasicInputOutput from "./BasicInputOutput";

function Day3Part2() {
    return (
        <BasicInputOutput func={sumPriorityBadges} inputLabel={"Rucksack contents"} outputLabel={"Badge priority sum"} />
    );
}

export default Day3Part2;
