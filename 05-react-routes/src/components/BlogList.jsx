import React from "react";
import blogs from "../data/blog";
import { Link } from "react-router-dom";
import { List, Card, Typography, Image, Tag, Space } from "antd";
import "antd/dist/reset.css"; // 引入 antd 的样式

const { Text, Paragraph } = Typography;

const BlogList = () => {
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={blogs}
      renderItem={(blog, index) => (
        <List.Item>
          <Card
            title={
              <Text strong style={{ color: "#1890ff" }}>
                {blog.title}
              </Text>
            }
            style={{
              marginBottom: 16,
              backgroundColor: "#f0f2f5",
              border: "1px solid #e8e8e8",
              borderRadius: 8,
              padding: 16,
            }}
          >
            <Paragraph type="secondary" ellipsis={{ rows: 2 }}>
              {blog.content}
            </Paragraph>
            <Space direction="horizontal" style={{ marginTop: 8 }}>
              {blog.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex} color="blue">
                  {tag}
                </Tag>
              ))}
            </Space>
            <Link to={`/blog/${index}`}>
              <Text type="primary" style={{ marginTop: 16, display: "block" }}>
                Read More
              </Text>
            </Link>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default BlogList;
