import React, { useState, useDebugValue } from "react"; // 导入 React 和必要的 Hook

// 自定义 Hook，用于显示调试信息
function useCustomHook(value) {
  useDebugValue(value ? "Active" : "Inactive"); // 根据 value 为调试提供相应标签
  return value; // 返回传入的值
}

// 主应用组件
const Custom = () => {
  const [isActive, setIsActive] = useState(false); // 状态变量，初始值为 false
  useCustomHook(isActive); // 使用自定义 Hook

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Deactivate" : "Activate"} {/* 按钮文本根据状态切换 */}
      </button>
    </>
  );
};

export default Custom; // 导出 App 组件
