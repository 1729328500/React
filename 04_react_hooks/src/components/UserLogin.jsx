import React, { useState } from "react";
import { useUser } from "./UserContext";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, logout } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>欢迎, {username}!</p>
          <button onClick={handleLogout}>登出</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>用户名:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>密码:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">登录</button>
        </form>
      )}
    </div>
  );
};

export default UserLogin;
