import { useRef } from "react"; // 导入 useRef Hook
import Counter2 from "./Counter2"; // 导入 Counter2 组件

// Parent2 组件，用于演示如何通过 ref 操控子组件 Counter2
const Parent2 = () => {
  const counterRef = useRef(); // 创建一个 ref 对象用于访问 Counter2 组件

  return (
    <div>
      <Counter2 ref={counterRef} /> {/* 将 counterRef 传递给 Counter2 组件 */}
      <button onClick={() => counterRef.current.reset()}>
        Reset Count
      </button>{" "}
      {/* 点击按钮重置计数 */}
    </div>
  );
};

export default Parent2; // 导出 Parent2 组件
