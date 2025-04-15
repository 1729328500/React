import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import { AtButton, AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Wifi = () => {
  const [wifiList, setWifiList] = useState([]);
  const [scanning, setScanning] = useState(false);

  // 初始化WiFi模块
  const initWifi = () => {
    Taro.startWifi({
      success: () => {
        Taro.showToast({
          title: "WiFi初始化成功",
          icon: "success",
        });
        startWifiScan();
      },
      fail: (error) => {
        Taro.showToast({
          title: "WiFi初始化失败",
          icon: "error",
        });
        console.error("WiFi初始化失败:", error);
      },
    });
  };

  // 开始搜索WiFi
  const startWifiScan = () => {
    setScanning(true);
    Taro.getWifiList({
      success: () => {
        // 监听获取到WiFi列表事件
        Taro.onGetWifiList((res) => {
          setWifiList(res.wifiList);
          setScanning(false);
        });
      },
      fail: (error) => {
        setScanning(false);
        console.error("获取WiFi列表失败:", error);
      },
    });
  };

  // 连接WiFi
  const connectWifi = (SSID) => {
    Taro.connectWifi({
      SSID,
      success: () => {
        Taro.showToast({
          title: "WiFi连接成功",
          icon: "success",
        });
      },
      fail: (error) => {
        Taro.showToast({
          title: "WiFi连接失败",
          icon: "error",
        });
        console.error("WiFi连接失败:", error);
      },
    });
  };

  return (
    <View className="wifi-page">
      <View className="section">
        <View className="section-title">WiFi设置</View>
        <View className="section-content">
          <AtButton type="primary" onClick={initWifi} loading={scanning}>
            {scanning ? "搜索中..." : "搜索WiFi"}
          </AtButton>

          <AtList>
            {wifiList.map((wifi, index) => (
              <AtListItem
                key={index}
                title={wifi.SSID}
                note={`信号强度: ${wifi.signalStrength}`}
                arrow="right"
                onClick={() => connectWifi(wifi.SSID)}
              />
            ))}
          </AtList>
        </View>
      </View>
    </View>
  );
};

export default Wifi;
