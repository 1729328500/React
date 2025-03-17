import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { get } from "../api/request";
import { Card, Typography, Space, Spin, Alert, Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const data = await get(`/posts/${id}`);
      setPost(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
      </div>
    );
  if (error) return <Alert message={error} type="error" showIcon />;
  if (!post) return <Alert message="文章不存在" type="info" showIcon />;

  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <Breadcrumb
        items={[
          {
            title: (
              <Link to="/">
                <Space>
                  <LeftOutlined />
                  返回文章列表
                </Space>
              </Link>
            ),
          },
        ]}
        style={{ marginBottom: "16px" }}
      />
      <Card
        cover={
          post.image && (
            <img
              alt={post.title}
              src={post.image}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          )
        }
      >
        <Typography>
          <Title level={1} style={{ marginBottom: "16px" }}>
            {post.title}
          </Title>
          <Space
            split={<Text type="secondary">|</Text>}
            style={{ marginBottom: "24px" }}
          >
            {post.author && <Text type="secondary">{post.author}</Text>}
            {post.date && <Text type="secondary">{post.date}</Text>}
          </Space>
          <Paragraph
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
            }}
          >
            {post.body}
          </Paragraph>
        </Typography>
      </Card>
    </div>
  );
};

export default PostDetail;
