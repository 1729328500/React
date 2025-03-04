import { useState, useEffect } from "react"; // 导入必要的 Hook

// 自定义 Hook：useDebounce
// 该 Hook 用于实现防抖功能
function useDebounce(value, delay) {
  // 使用 useState Hook 创建一个状态变量 debouncedValue，用于存储防抖后的值
  const [debouncedValue, setDebouncedValue] = useState(value);

  // 使用 useEffect Hook 来处理副作用操作，即设置定时器
  useEffect(() => {
    // 设置一个定时器，在 delay 毫秒后更新 debouncedValue 状态为当前的 value
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 清理函数，在组件卸载或 effect 重新运行前执行，用于清除定时器
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // 依赖数组，当 value 或 delay 发生变化时，重新设置定时器

  // 返回防抖后的值，供组件使用
  return debouncedValue;
}

export default useDebounce; // 导出 useDebounce Hook
