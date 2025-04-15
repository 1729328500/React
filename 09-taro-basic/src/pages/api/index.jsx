import React from "react";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

const Api = () => {
  const handleClick = (url) => {
    Taro.navigateTo({ url });
  };

  return (
    <View className="api">
      <AtList>
        <AtListItem
          title="联系人"
          arrow="right"
          onClick={() => handleClick("/pages/contact/index")}
        />
        <AtListItem
          title="设备"
          arrow="right"
          onClick={() => handleClick("/pages/device/index")}
        />
        <AtListItem
          title="截屏功能"
          note="截取并保存当前屏幕"
          arrow="right"
          onClick={() => handleClick("/pages/capture/index")}
        />
        <AtListItem
          title="蓝牙功能"
          note="蓝牙设备连接与通信"
          arrow="right"
          onClick={() => handleClick("/pages/bluetooth/index")}
        />
        <AtListItem
          title="WiFi功能"
          note="WiFi连接与管理"
          arrow="right"
          onClick={() => handleClick("/pages/wifi/index")}
        />
        <AtListItem
          title="剪贴板"
          note="复制和粘贴文本内容"
          arrow="right"
          onClick={() => handleClick("/pages/clipboard/index")}
        />
        <AtListItem
          title="震动功能"
          note="设备振动反馈"
          arrow="right"
          onClick={() => handleClick("/pages/vibration/index")}
        />
        <AtListItem
          title="扫码功能"
          note="扫描二维码和条形码"
          arrow="right"
          onClick={() => handleClick("/pages/scancode/index")}
        />
        <AtListItem
          title="电池信息"
          note="获取设备电池状态"
          arrow="right"
          onClick={() => handleClick("/pages/battery/index")}
        />
      </AtList>
    </View>
  );
};

export default Api;
