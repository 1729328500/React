import { useContext } from "react";
import { UserContext } from "../context/UserContext"; // 导入用户上下文

const UserProfile = () => {
  const user = useContext(UserContext); // 从 UserContext 中获取用户信息

  return <div>欢迎你, {user.name}!</div>;
};

export default UserProfile;
