import React from "react";
import { Card, Descriptions } from "antd";

const BookDetail = ({ book }) => {
  return (
    <Card
      title="图书详情"
      bordered={false}
      style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    >
      <Descriptions column={1} bordered>
        <Descriptions.Item label="书名">{book.title}</Descriptions.Item>
        <Descriptions.Item label="作者">{book.author}</Descriptions.Item>
        <Descriptions.Item label="出版年份">{book.year}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default BookDetail;
