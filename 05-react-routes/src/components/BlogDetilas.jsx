import React from "react";
import blogs from "../data/blog";
import { useParams } from "react-router-dom";
import { Card, Image, Typography, Row, Col, Divider, Space, Tag } from "antd";
import "antd/dist/reset.css"; // 引入 antd 的样式

const { Title, Paragraph, Text } = Typography;

const BlogDetilas = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Card
      style={{ width: "100%", maxWidth: 800, margin: "0 auto", marginTop: 24 }}
    >
      <Card
        title={<Title level={3}>{blog.title}</Title>}
        cover={
          <Image
            src={blog.image}
            alt={blog.title}
            style={{ width: "100%", height: 300, objectFit: "cover" }}
          />
        }
        style={{
          width: "100%",
          backgroundColor: "#f9f9f9",
          border: "1px solid #e8e8e8",
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Paragraph
          style={{
            marginBottom: 24,
            fontSize: 16,
            color: "#333",
          }}
        >
          {blog.content}
        </Paragraph>
        <Divider />
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={6}>
            <Text strong>作者:</Text>
            <Text>{blog.author}</Text>
          </Col>
          <Col span={6}>
            <Text strong>阅读量:</Text>
            <Text>{blog.readingCount}</Text>
          </Col>
          <Col span={6}>
            <Text strong>❤:</Text>
            <Text>{blog.favoriteCount}</Text>
          </Col>
          <Col span={6}>
            <Text strong>👍️:</Text>
            <Text>{blog.likeCount}</Text>
          </Col>
        </Row>
        <Divider />
        <Row justify="center" style={{ marginTop: 16 }}>
          <Col>
            <Text strong>标签:</Text>
            <Space>
              {blog.tags.map((tag, index) => (
                <Tag key={index} color="blue">
                  {tag}
                </Tag>
              ))}
            </Space>
          </Col>
        </Row>
      </Card>
    </Card>
  );
};

export default BlogDetilas;
