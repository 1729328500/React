import React from "react";
import { Row, Col } from "antd";
import MyCard from "./my-card";

const MainProductList = () => {
  const products = [
    {
      coverImg: "https://whyhd.oss-cn-nanjing.aliyuncs.com/th.jpg",
      avatar:
        "https://whyhd.oss-cn-nanjing.aliyuncs.com/2024/11/19/0499fd08-70d4-45f1-afb8-251ce6a88c52.png",
      title: "标题01",
      content: "标题01的描述",
    },
    {
      coverImg: "https://whyhd.oss-cn-nanjing.aliyuncs.com/th.jpg",
      avatar:
        "https://whyhd.oss-cn-nanjing.aliyuncs.com/2024/11/19/3eec7db0-3a11-4c2f-baea-dd0722ae9656.png",
      title: "标题02",
      content: "标题02的描述",
    },
    {
      coverImg: "https://whyhd.oss-cn-nanjing.aliyuncs.com/th.jpg",
      avatar: "https://whyhd.oss-cn-nanjing.aliyuncs.com/DD.jpg",
      title: "标题03",
      content: "标题03的描述",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((product, index) => (
          <Col span={6} key={index}>
            <MyCard product={product} />
          </Col>
        ))}
      </div>
    </>
  );
};

export default MainProductList;
