import React from "react";
import { Form, Input, Button } from "antd";

const BookInput = ({ addBook }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addBook(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      style={{
        padding: "20px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Form.Item
        name="title"
        label="书名"
        rules={[{ required: true, message: "请输入书名" }]}
      >
        <Input placeholder="请输入书名" />
      </Form.Item>

      <Form.Item
        name="author"
        label="作者"
        rules={[{ required: true, message: "请输入作者" }]}
      >
        <Input placeholder="请输入作者" />
      </Form.Item>

      <Form.Item
        name="year"
        label="出版年份"
        rules={[{ required: true, message: "请输入出版年份" }]}
      >
        <Input type="number" placeholder="请输入出版年份" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          添加图书
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookInput;
