import { useState } from "react"; // 导入 useState Hook
import ExpensiveCalculation from "./ExpensiveCalculation"; // 导入 ExpensiveCalculation 组件

const ExpensiveCalculationParent = () => {
  const [count, setCount] = useState(0); // 定义状态 count，初始值为 0

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>增加</button> {/* 增加按钮 */}
      <ExpensiveCalculation number={count} />{" "}
      {/* 渲染 ExpensiveCalculation 组件并传递 count */}
    </div>
  );
};

export default ExpensiveCalculationParent;
