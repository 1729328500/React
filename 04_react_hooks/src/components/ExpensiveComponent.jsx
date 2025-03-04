const ExpensiveComponent = ({ onAction }) => {
  return (
    <button onClick={onAction}>Do Action</button> // 渲染按钮，点击时调用 onAction
  );
};

export default ExpensiveComponent; // 导出 ExpensiveComponent 组件
