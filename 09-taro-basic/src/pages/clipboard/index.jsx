import React, { useState } from "react";
import { View } from "@tarojs/components";
import { AtInput, AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Clipboard = () => {
  const [inputText, setInputText] = useState("");
  const [clipboardText, setClipboardText] = useState("");

  // 复制文本到剪贴板
  const handleCopy = () => {
    if (!inputText) {
      Taro.showToast({
        title: "请输入要复制的文本",
        icon: "none",
      });
      return;
    }

    Taro.setClipboardData({
      data: inputText,
      success: () => {
        Taro.showToast({
          title: "复制成功",
          icon: "success",
        });
      },
    });
  };

  // 从剪贴板获取文本
  const handlePaste = () => {
    Taro.getClipboardData({
      success: (res) => {
        setClipboardText(res.data);
        Taro.showToast({
          title: "获取成功",
          icon: "success",
        });
      },
    });
  };

  return (
    <View className="clipboard-page">
      <View className="section">
        <View className="section-title">剪贴板</View>
        <View className="section-content">
          <AtInput
            name="text"
            title="文本"
            type="text"
            placeholder="请输入要复制的文本"
            value={inputText}
            onChange={(value) => setInputText(value)}
          />
          <AtButton type="primary" onClick={handleCopy}>
            复制到剪贴板
          </AtButton>

          <View className="divider" />

          <View className="clipboard-content">
            <View className="content-title">剪贴板内容：</View>
            <View className="content-text">{clipboardText}</View>
          </View>
          <AtButton type="secondary" onClick={handlePaste}>
            获取剪贴板内容
          </AtButton>
        </View>
      </View>
    </View>
  );
};

export default Clipboard;
