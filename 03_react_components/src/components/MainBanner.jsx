import React from "react";
import { Carousel } from "antd";

const MainBanner = () => {
  const imageStyle = {
    width: "100%",
    height: "500px", // 您可以根据需要调整高度
    objectFit: "cover", // 确保图片覆盖整个容器，同时保持宽高比
  };

  return (
    <Carousel>
      <div>
        <img
          src="https://whyhd.oss-cn-nanjing.aliyuncs.com/%E7%89%B9%E8%95%BE%E8%A5%BF%E4%BA%9A.png"
          alt="轮播图1"
          style={imageStyle}
        />
      </div>
      <div>
        <img
          src="https://whyhd.oss-cn-nanjing.aliyuncs.com/th.jpg"
          alt="轮播图2"
          style={imageStyle}
        />
      </div>
      <div>
        <img
          src="https://whyhd.oss-cn-nanjing.aliyuncs.com/th.jpg"
          alt="轮播图3"
          style={imageStyle}
        />
      </div>
    </Carousel>
  );
};

export default MainBanner;
