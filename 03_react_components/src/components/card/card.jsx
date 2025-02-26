import React from "react";
import "./Card.css"; // 引入样式文件

const Card = ({ header, body, footer }) => {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
};
export default Card;
