import React, { useState, useEffect } from "react";
import { Card, Typography, Alert, Row, Col, Space } from "antd";
import { getTianjuData } from "../api/tianjuapi";

const { Title } = Typography;

const TianjuData = () => {
  const [data, setData] = useState([]);
  // 添加loading状态展示
  const [loading, setLoading] = useState(true);
  {
    loading && <div>Loading...</div>;
  }
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTianjuData();
        if (response.code === 200) {
          setData(response.result.newslist || []);
        } else {
          setError(response.msg || "获取数据失败");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Card>
        <Title level={2} style={{ marginBottom: "24px", textAlign: "center" }}>
          热门电影数据
        </Title>
        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            style={{ marginBottom: "24px" }}
          />
        )}
        <Row gutter={[24, 24]}>
          {data.map((item) => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <Card
                hoverable
                className="movie-card"
                cover={
                  <div style={{ overflow: "hidden", height: 240 }}>
                    <img
                      alt={item.title}
                      src={
                        item.picUrl ||
                        "https://via.placeholder.com/300x200?text=暂无图片"
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/300x200?text=图片加载失败";
                      }}
                    />
                  </div>
                }
                style={{
                  height: "100%",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
              >
                <Card.Meta
                  title={
                    <Typography.Text
                      strong
                      style={{
                        fontSize: "16px",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.title}
                    </Typography.Text>
                  }
                  description={
                    <Space
                      direction="vertical"
                      style={{ width: "100%" }}
                      size={12}
                    >
                      <Typography.Paragraph
                        ellipsis={{ rows: 2 }}
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          color: "rgba(0,0,0,0.65)",
                          lineHeight: "1.5",
                        }}
                      >
                        {item.description}
                      </Typography.Paragraph>
                      <Space
                        split={
                          <Typography.Text type="secondary">|</Typography.Text>
                        }
                        style={{ fontSize: "12px" }}
                      >
                        <Typography.Text type="secondary">
                          {item.source}
                        </Typography.Text>
                        <Typography.Text type="secondary">
                          {item.ctime}
                        </Typography.Text>
                      </Space>
                    </Space>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default TianjuData;
