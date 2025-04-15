import React from "react";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Vibration = () => {
  // 短震动
  const handleShortVibrate = () => {
    Taro.vibrateShort({
      success: () => {
        console.log("短震动执行成功");
      },
      fail: (error) => {
        console.error("短震动执行失败:", error);
        Taro.showToast({
          title: "震动执行失败",
          icon: "error",
        });
      },
    });
  };

  // 长震动
  const handleLongVibrate = () => {
    Taro.vibrateLong({
      success: () => {
        console.log("长震动执行成功");
      },
      fail: (error) => {
        console.error("长震动执行失败:", error);
        Taro.showToast({
          title: "震动执行失败",
          icon: "error",
        });
      },
    });
  };

  return (
    <View className="vibration-page">
      <View className="section">
        <View className="section-title">设备震动</View>
        <View className="section-content">
          <AtButton
            type="primary"
            onClick={handleShortVibrate}
            className="vibrate-button"
          >
            短震动
          </AtButton>
          <AtButton
            type="secondary"
            onClick={handleLongVibrate}
            className="vibrate-button"
          >
            长震动
          </AtButton>
        </View>
      </View>
    </View>
  );
};

export default Vibration;
