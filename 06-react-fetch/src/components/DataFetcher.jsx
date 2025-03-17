import { useState, useEffect } from "react";

// 创建 DataFetcher 组件，用于获取和展示数据
const DataFetcher = () => {
  // 使用 useState 管理数据状态
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用 useEffect 在组件挂载时获取数据
  useEffect(() => {
    // 定义异步数据获取函数
    const fetchData = async () => {
      try {
        // 发起 GET 请求获取数据
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts_limit:5"
        );

        // 检查响应状态
        if (!response.ok) {
          throw new Error("网络请求失败");
        }

        // 解析响应数据
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    // 调用获取数据函数
    fetchData();
  }, []); // 空依赖数组表示仅在组件挂载时执行

  // 根据不同状态渲染不同内容
  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>错误: {error}</div>;
  }

  // 渲染获取到的数据
  return (
    <div>
      <h2>文章列表(Fech)</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{ border: "1px solid #ddd", padding: "1rem" }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
