import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get, del, put } from "../api/request";
import dayjs from "dayjs";
import {
  Card,
  Button,
  Form,
  Input,
  DatePicker,
  Modal,
  List,
  Typography,
  Space,
  message,
  Spin,
  Empty,
  Divider,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editDate, setEditDate] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await get("/posts");
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: "确认删除",
      content: "确定要删除这篇文章吗？",
      okText: "确定",
      cancelText: "取消",
      onOk: async () => {
        try {
          await del(`/posts/${id}`);
          setPosts(posts.filter((post) => post.id !== id));
          message.success("删除成功");
        } catch (err) {
          message.error(err.message);
        }
      },
    });
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setEditTitle(post.title);
    setEditBody(post.body);
    setEditAuthor(post.author || "");
    setEditImage(post.image || "");
    setEditDate(post.date || "");
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setEditTitle("");
    setEditBody("");
    setEditAuthor("");
    setEditImage("");
    setEditDate("");
  };

  const handleUpdate = async (id) => {
    if (!editTitle.trim() || !editBody.trim()) {
      alert("标题和内容不能为空");
      return;
    }

    try {
      const updatedPost = await put(`/posts/${id}`, {
        title: editTitle,
        body: editBody,
        author: editAuthor,
        image: editImage,
        date: editDate,
      });
      setPosts(posts.map((post) => (post.id === id ? updatedPost : post)));
      handleCancelEdit();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
      </div>
    );
  if (error) return <Alert message={error} type="error" showIcon />;

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Space
        style={{
          marginBottom: "24px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Title level={2}>文章列表</Title>
        <Link to="/create">
          <Button type="primary">新建文章</Button>
        </Link>
      </Space>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        dataSource={posts}
        locale={{ emptyText: <Empty description="暂无文章" /> }}
        renderItem={(post) => (
          <List.Item key={post.id}>
            <Card
              cover={
                post.image && (
                  <img
                    alt={post.title}
                    src={post.image}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                )
              }
              actions={[
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(post)}
                >
                  编辑
                </Button>,
                <Button
                  type="text"
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(post.id)}
                >
                  删除
                </Button>,
              ]}
            >
              {editingPost?.id === post.id ? (
                <Form layout="vertical">
                  <Form.Item label="标题">
                    <Input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="请输入标题"
                    />
                  </Form.Item>
                  <Form.Item label="作者">
                    <Input
                      value={editAuthor}
                      onChange={(e) => setEditAuthor(e.target.value)}
                      placeholder="请输入作者"
                    />
                  </Form.Item>
                  <Form.Item label="图片URL">
                    <Input
                      value={editImage}
                      onChange={(e) => setEditImage(e.target.value)}
                      placeholder="请输入图片URL"
                    />
                  </Form.Item>
                  <Form.Item label="日期">
                    <DatePicker
                      value={editDate ? dayjs(editDate) : null}
                      onChange={(date) =>
                        setEditDate(date ? date.format("YYYY-MM-DD") : "")
                      }
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item label="内容">
                    <TextArea
                      value={editBody}
                      onChange={(e) => setEditBody(e.target.value)}
                      placeholder="请输入内容"
                      rows={4}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Space>
                      <Button
                        type="primary"
                        onClick={() => handleUpdate(post.id)}
                      >
                        保存
                      </Button>
                      <Button onClick={handleCancelEdit}>取消</Button>
                    </Space>
                  </Form.Item>
                </Form>
              ) : (
                <>
                  <Card.Meta
                    title={<Link to={`/post/${post.id}`}>{post.title}</Link>}
                    description={
                      <Space direction="vertical" style={{ width: "100%" }}>
                        <Space split={<Divider type="vertical" />}>
                          {post.author && (
                            <Text type="secondary">{post.author}</Text>
                          )}
                          {post.date && (
                            <Text type="secondary">{post.date}</Text>
                          )}
                        </Space>
                        <Paragraph ellipsis={{ rows: 3 }}>
                          {post.body}
                        </Paragraph>
                      </Space>
                    }
                  />
                </>
              )}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PostList;
