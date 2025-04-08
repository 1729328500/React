import { useState } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtForm, AtInput, AtButton } from "taro-ui";
import "./index.scss";

export default function Login() {
  const [username, setUsername] = useState("whyh");
  const [password, setPassword] = useState("123456");
  const handleLogin = () => {
    if (!username || !password) {
      Taro.showToast({
        title: "输入用户名和密码",
        icon: "none",
      });
      return;
    }
    Taro.setStorageSync("isLoggedIn", true);
    Taro.setStorageSync("username", username);

    Taro.setStorageSync(
      "avatarUrl",
      "https://whyhd.oss-cn-nanjing.aliyuncs.com/2024/11/19/0499fd08-70d4-45f1-afb8-251ce6a88c52.png"
    );

    Taro.eventCenter.trigger("loginSucess");
    Taro.showModal({
      title: "登录成功",
      icon: "success",
      success: (res) => {
        if (res.confirm) {
          Taro.switchTab({
            url: "/pages/index/index",
          });
        }
      },
    });
  };
  return (
    <View className="login">
      <AtForm className="login-from">
        <AtInput
          name="username"
          title="用户名"
          type="text"
          placeholder="请输入用户名"
          value={username}
          onChange={setUsername}
        />
        <AtInput
          name="password"
          title="密码"
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={setPassword}
        />
        <AtButton type="primary" className="login-btn" onClick={handleLogin}>
          登录
        </AtButton>
      </AtForm>
    </View>
  );
}
