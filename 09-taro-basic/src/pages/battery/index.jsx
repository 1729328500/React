import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Battery = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    level: 0,
    isCharging: false,
  });

  const getBatteryStatus = () => {
    Taro.getBatteryInfo({
      success: (res) => {
        console.log("获取电池信息成功:", res);
        setBatteryInfo({
          level: res.level,
          isCharging: res.isCharging,
        });
        Taro.showToast({
          title: "获取电池信息成功",
          icon: "success",
        });
      },
      fail: (error) => {
        console.error("获取电池信息失败:", error);
        Taro.showToast({
          title: "获取电池信息失败",
          icon: "error",
        });
      },
    });
  };

  useEffect(() => {
    getBatteryStatus();
  }, []);

  return (
    <View className="battery-page">
      <View className="section">
        <View className="section-title">电池信息</View>
        <View className="section-content">
          <View className="battery-info">
            <View className="battery-level">
              <AtIcon
                value={
                  batteryInfo.isCharging ? "lightning-bolt" : "battery-full"
                }
                size="30"
                color="#333"
              />
              <Text className="level-text">{batteryInfo.level}%</Text>
            </View>
            <View className="charging-status">
              {batteryInfo.isCharging ? "正在充电" : "未充电"}
            </View>
          </View>
          <AtButton type="primary" onClick={getBatteryStatus}>
            刷新电池信息
          </AtButton>
        </View>
      </View>
    </View>
  );
};

export default Battery;
