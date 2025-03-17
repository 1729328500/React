import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../api/request";
import { Form, Input, Button, Card, Alert, Typography, DatePicker } from "antd";
import dayjs from "dayjs";

const { TextArea } = Input;
const { Title } = Typography;

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("标题和内容不能为空");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      await post("/posts", {
        title,
        body,
        author: author.trim(),
        image: image.trim(),
        date: date ? dayjs(date).format("YYYY-MM-DD") : "",
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <Card>
        <Title level={2} style={{ marginBottom: "24px" }}>
          新建文章
        </Title>
        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            style={{ marginBottom: "24px" }}
          />
        )}
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="标题"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="请输入文章标题"
            />
          </Form.Item>
          <Form.Item label="作者">
            <Input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="请输入作者名称"
            />
          </Form.Item>
          <Form.Item label="图片URL">
            <Input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="请输入图片URL地址"
            />
          </Form.Item>
          <Form.Item label="发布日期">
            <DatePicker
              value={date ? dayjs(date) : null}
              onChange={(date) => setDate(date ? date.toISOString() : "")}
              style={{ width: "100%" }}
              placeholder="请选择发布日期"
            />
          </Form.Item>
          <Form.Item
            label="内容"
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            <TextArea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="请输入文章内容"
              rows={8}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={submitting} block>
              {submitting ? "提交中..." : "提交"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreatePost;
