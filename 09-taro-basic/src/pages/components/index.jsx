import React from "react";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

const Components = () => {
  const handleClick = (url) => {
    Taro.navigateTo({ url });
  };

  return (
    <View className="components">
      <AtList>
        <AtListItem
          title="容器"
          arrow="right"
          onClick={() => handleClick("/pages/container/index")}
        />
        <AtListItem
          title="基础内容"
          arrow="right"
          onClick={() => handleClick("/pages/basic/index")}
        />
        <AtListItem
          title="表单组件"
          arrow="right"
          onClick={() => handleClick("/pages/form/index")}
        />
        <AtListItem
          title="skyline"
          arrow="right"
          onClick={() => handleClick("/pages/skyline/index")}
        />
        <AtListItem
          title="媒体组件"
          arrow="right"
          onClick={() => handleClick("/pages/media/index")}
        />
        <AtListItem
          title="地图"
          arrow="right"
          onClick={() => handleClick("/pages/map/index")}
        />
        <AtListItem
          title="定位"
          arrow="right"
          onClick={() => handleClick("/pages/location/index")}
        />
        <AtListItem
          title="ScrollView 滚动视图"
          arrow="right"
          onClick={() => handleClick("/pages/scrollView/index")}
        />
        <AtListItem
          title="MovableView 可移动视图"
          arrow="right"
          onClick={() => handleClick("/pages/movable/index")}
        />
        <AtListItem
          title="WebView 网页容器"
          arrow="right"
          onClick={() => handleClick("/pages/webView/index")}
        />
      </AtList>
    </View>
  );
};

export default Components;
