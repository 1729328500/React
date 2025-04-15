import React, { useState } from "react";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Scancode = () => {
  const [scanResult, setScanResult] = useState("");

  // 扫码
  const handleScan = (onlyFromCamera = true) => {
    Taro.scanCode({
      onlyFromCamera, // true 只能使用相机扫码，false 可以选择相册
      success: (res) => {
        setScanResult(`类型：${res.scanType}\n结果：${res.result}`);
      },
      fail: (error) => {
        console.error("扫码失败:", error);
        Taro.showToast({
          title: "扫码失败",
          icon: "error",
        });
      },
    });
  };

  return (
    <View className="scancode-page">
      <View className="section">
        <View className="section-title">扫码功能</View>
        <View className="section-content">
          <AtButton
            type="primary"
            onClick={() => handleScan(true)}
            className="scan-button"
          >
            打开相机扫码
          </AtButton>
          <AtButton
            type="secondary"
            onClick={() => handleScan(false)}
            className="scan-button"
          >
            从相册选择二维码
          </AtButton>

          {scanResult && (
            <View className="scan-result">
              <View className="result-title">扫描结果：</View>
              <View className="result-content">{scanResult}</View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Scancode;
