import { topThreeTotalCalories } from '../modules/elfCalories';
import BasicInputOutput from './BasicInputOutput';


function Day1Part2() {
  return (
    <BasicInputOutput func={topThreeTotalCalories} inputLabel={"Elf Data Input"} outputLabel={"Calorie count for top three elves with most calories"} />
  );
}

export default Day1Part2;
