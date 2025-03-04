import React, { useState, useEffect, useDebugValue } from "react"; // 导入 React 以及必要的 Hook

// 自定义 Hook，用于从指定 URL 获取 API 数据
function useApi(url) {
  const [data, setData] = useState(null); // 创建状态变量 data，初始值为 null
  useDebugValue(data ? "Data Loaded" : "Loading"); // 显示调试信息

  useEffect(() => {
    // 使用 fetch API 获取数据
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json)); // 将获取的数据存储到 state
  }, [url]); // 依赖于 url，当 url 变化时重新获取数据

  return data; // 返回获取到的数据
}

// 主应用组件
const ApiList = () => {
  const data = useApi("https://api.xygeng.cn/one"); // 调用自定义 Hook 获取数据

  if (!data) return <p>加载中...</p>; // 如果数据尚未加载，显示加载提示

  return (
    <div>
      <h2>{data.data.content}</h2>
      <p>来源：{data.data.origin}</p>
      <p>作者：{data.data.name}</p>
      <p>标签：{data.data.tag}</p>
    </div>
  );
};

export default ApiList; // 导出 ApiList 组件
