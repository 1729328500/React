// src/pages/Login.jsx
import React from "react";
import { Card, Form, Input, Button, Typography, message } from "antd"; // 引入 message
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const users = [{ username: "DDD", password: "123" }];

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const user = users.find(
      (u) => u.username === values.username && u.password === values.password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      message.success("登录成功！"); // 使用 message 成功提示
      navigate("/");
    } else {
      message.error("用户名或密码错误！"); // 使用 message 错误提示
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url('https://whyhd.oss-cn-nanjing.aliyuncs.com/2c778e30-19d1-49c8-bcf9-40188eb3cd0a_%E4%BC%81%E9%B9%85.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card
        title={<Title level={3}>登录</Title>}
        style={{ width: 400, backgroundColor: "#f0f9eb" }} // 修改背景色为 #f0f9eb
      >
        <Form
          form={form}
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
