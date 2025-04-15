import React, { useState } from "react";
import { View, ScrollView } from "@tarojs/components";
import "./index.scss";

const ScrollViewPage = () => {
  const [list, setList] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  // 模拟加载数据的延迟
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 处理下拉刷新
  const handleRefresh = async () => {
    setRefreshing(true);
    await delay(1000); // 模拟网络请求
    setList(Array.from({ length: 20 }, (_, i) => i + 1));
    setRefreshing(false);
  };

  // 处理上拉加载更多
  const handleLoadMore = async () => {
    if (loading) return;
    setLoading(true);
    await delay(1000); // 模拟网络请求
    const newItems = Array.from({ length: 10 }, (_, i) => list.length + i + 1);
    setList([...list, ...newItems]);
    setLoading(false);
  };

  return (
    <View className="scroll-view-page">
      <View className="section">
        <View className="section-title">下拉刷新 & 上拉加载</View>
        <ScrollView
          className="scroll-view"
          scrollY
          refresherEnabled
          refresherTriggered={refreshing}
          onRefresherRefresh={handleRefresh}
          onScrollToLower={handleLoadMore}
          lowerThreshold={100}
        >
          {list.map((item) => (
            <View key={item} className="scroll-item">
              列表项 {item}
            </View>
          ))}
          {loading && <View className="loading">加载中...</View>}
        </ScrollView>
      </View>
    </View>
  );
};

export default ScrollViewPage;
