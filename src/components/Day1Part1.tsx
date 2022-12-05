import { mostCalories } from '../modules/elfCalories';
import BasicInputOutput from './BasicInputOutput';


function Day1Part1() {
  return (
    <BasicInputOutput func={mostCalories} inputLabel={"Elf Data Input"} outputLabel={"Calorie count for elf with most calories"} />
  );
}

export default Day1Part1;
