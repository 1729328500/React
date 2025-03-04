import React, { createContext, useState, useContext } from "react";

// 创建上下文
const UserContext = createContext();

// 提供者组件
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 登录方法
  const login = (username, password) => {
    // 这里可以添加实际的登录逻辑，比如调用API验证用户名和密码
    setUser({ username });
    setUser({ password });
  };

  // 登出方法
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// 自定义钩子，方便在其他组件中使用上下文
export const useUser = () => useContext(UserContext);
