import { useState } from "react";
const RegistForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 防止页面刷新
    onSubmit({ name, email }); // 通过 onSubmit 将数据传递给父组件
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)} // 更新姓名状态
          placeholder="请输入姓名...."
        />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)} // 更新邮箱状态
          placeholder="请输入邮箱...."
        />
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default RegistForm;
