import React, { useEffect } from "react";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Capture = () => {
  useEffect(() => {
    // 设置截屏时的视觉效果
    Taro.setVisualEffectOnCapture({
      visualEffect: "none",
      success: () => {
        console.log("设置截屏视觉效果成功");
      },
      fail: (err) => {
        console.error("设置截屏视觉效果失败:", err);
      },
    });

    // 监听用户截屏事件
    const listener = () => {
      Taro.showToast({
        title: "截屏成功",
        icon: "success",
      });
    };

    Taro.onUserCaptureScreen(listener);

    // 组件卸载时移除监听
    return () => {
      Taro.offUserCaptureScreen(listener);
    };
  }, []);

  const handleCapture = () => {
    Taro.showModal({
      title: "提示",
      content: "请使用系统截屏功能进行截屏（音量下键+电源键）",
      showCancel: false,
    });
  };

  return (
    <View className="capture-page">
      <View className="section">
        <View className="section-title">屏幕截图</View>
        <View className="section-content">
          <AtButton type="primary" onClick={handleCapture}>
            截取当前屏幕
          </AtButton>
        </View>
      </View>
    </View>
  );
};

export default Capture;
