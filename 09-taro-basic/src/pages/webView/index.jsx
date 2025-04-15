import React, { useState } from "react";
import { View, WebView } from "@tarojs/components";
import "./index.scss";

const WebViewPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 处理WebView加载完成
  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  // 处理WebView加载错误
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <View className="webview-page">
      <View className="section">
        <View className="section-title">网页浏览</View>
        <View className="webview-container">
          {loading && <View className="loading">加载中...</View>}
          {error && <View className="error">加载失败，请检查网络连接</View>}
          <WebView
            src="https://www.baidu.com"
            onLoad={handleLoad}
            onError={handleError}
          />
        </View>
      </View>
    </View>
  );
};

export default WebViewPage;
