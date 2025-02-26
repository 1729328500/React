import RegistForm from "./RegistForm";
import { useState } from "react";

const RegistPage = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleFormSubmit = (data) => {
    setUserData(data); // 更新用户数据
  };

  return (
    <>
      <div>
        <RegistForm onSubmit={handleFormSubmit} />
        <h2>Name: {userData.name}</h2>
        <h2>Email: {userData.email}</h2>
      </div>
    </>
  );
};

export default RegistPage;
