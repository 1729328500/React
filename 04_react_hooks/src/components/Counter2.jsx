import { useImperativeHandle, forwardRef, useState } from "react"; // 导入必要的 Hook

// Counter2 组件，使用 forwardRef 和 useImperativeHandle 来暴露一个 reset 方法
const Counter2 = forwardRef((props, ref) => {
  const [count, setCount] = useState(10); // 使用 useState Hook 创建 count 状态，初始值为 10

  // 使用 useImperativeHandle 来暴露 reset 方法
  useImperativeHandle(ref, () => ({
    reset: () => {
      setCount(0); // 重置计数为 0
    },
  }));

  // 渲染组件，显示当前计数
  return <div>Count: {count}</div>;
});

export default Counter2; // 导出 Counter2 组件
