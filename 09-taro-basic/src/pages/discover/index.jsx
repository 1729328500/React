import React from "react";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

const Discover = () => {
  const handleClick = (item, index) => {
    const pages = [
      "/pages/note/index",
      "/pages/music/index",
      "/pages/card/index",
    ];
    Taro.navigateTo({
      url: pages[index],
    });
  };

  return (
    <View
      className="discover"
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "10px",
      }}
    >
      <AtList>
        <AtListItem
          title="记事本"
          thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
          arrow="right"
          onClick={() => handleClick(null, 0)}
        />
        <AtListItem
          title="音乐盒子"
          thumb="https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png"
          arrow="right"
          onClick={() => handleClick(null, 1)}
        />
        <AtListItem
          title="个人名片"
          thumb="https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
          arrow="right"
          onClick={() => handleClick(null, 2)}
        />
      </AtList>
    </View>
  );
};

export default Discover;
