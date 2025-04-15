import React from "react";
import { View, MovableArea, MovableView } from "@tarojs/components";
import "./index.scss";

const MovablePage = () => {
  return (
    <View className="movable-page">
      <View className="section">
        <View className="section-title">基础用法</View>
        <MovableArea className="movable-area">
          <MovableView className="movable-view" direction="all" x={30} y={30}>
            可拖拽视图
          </MovableView>
        </MovableArea>
      </View>

      <View className="section">
        <View className="section-title">限制方向</View>
        <MovableArea className="movable-area">
          <MovableView
            className="movable-view"
            direction="horizontal"
            x={30}
            y={30}
          >
            只能横向移动
          </MovableView>
        </MovableArea>
      </View>

      <View className="section">
        <View className="section-title">带有惯性</View>
        <MovableArea className="movable-area">
          <MovableView
            className="movable-view"
            direction="all"
            inertia
            x={30}
            y={30}
          >
            带惯性
          </MovableView>
        </MovableArea>
      </View>
    </View>
  );
};

export default MovablePage;
