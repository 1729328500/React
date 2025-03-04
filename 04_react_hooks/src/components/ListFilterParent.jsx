import { useState } from "react"; // 导入 useState Hook
import ListFilter from "./ListFilter"; // 导入 ListFilter 组件

const ListFilterParent = () => {
  const [query, setQuery] = useState(""); // 定义状态 query，初始值为空字符串
  const items = ["Apple", "Banana", "Orange", "Grape"]; // 定义要过滤的水果项

  return (
    <div>
      <input
        type="text" // 输入框类型为文本
        value={query} // 输入框的值绑定到 query 状态
        onChange={(e) => setQuery(e.target.value)} // 当输入框值变化时更新 query 状态
        placeholder="Search" // 输入框的占位符
      />
      <ListFilter items={items} query={query} />{" "}
      {/* 渲染 ListFilter 组件并传递 items 和 query */}
    </div>
  );
};

export default ListFilterParent;
