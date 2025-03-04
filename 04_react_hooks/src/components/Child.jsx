import React from "react"; // 导入 React

const Child = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>Click me</button> // 渲染按钮并绑定点击事件
  );
};

export default Child; // 导出 Child 组件
