import React from "react";
import { Button } from "antd";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#FFC0CB", padding: "10px 20px" }}>
      <Button type="link" style={{ marginRight: "20px" }}>
        🏠 首页
      </Button>
      <Button type="link" style={{ marginRight: "20px" }}>
        📧 邮件
      </Button>
      <Button type="link">⚙ 设置</Button>
    </div>
  );
};

export default Header;
