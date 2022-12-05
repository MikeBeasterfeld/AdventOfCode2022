import { play } from "../modules/rockPaperScissors";
import BasicInputOutput from "./BasicInputOutput";

function Day2Part1() {
  return (
    <BasicInputOutput func={play} inputLabel={"Strategy Guide"} outputLabel={"Score"} />
  );
}

export default Day2Part1;
