import UserProfile from "./UserProfile"; // 导入 UserProfile 组件
import { UserContext } from "../context/UserContext"; // 导入用户上下文

const UserPage = () => {
  const user = { name: "张三" }; // 定义用户对象

  return (
    <UserContext.Provider value={user}>
      <UserProfile /> {/* 渲染 UserProfile 组件 */}
    </UserContext.Provider>
  );
};

export default UserPage;
