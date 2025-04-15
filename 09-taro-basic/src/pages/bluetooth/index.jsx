import React, { useState } from "react";
import { View } from "@tarojs/components";
import { AtButton, AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Bluetooth = () => {
  const [devices, setDevices] = useState([]);
  const [scanning, setScanning] = useState(false);

  // 初始化蓝牙适配器
  const initBluetooth = () => {
    Taro.openBluetoothAdapter({
      success: () => {
        Taro.showToast({
          title: "蓝牙初始化成功",
          icon: "success",
        });
        startBluetoothDevicesDiscovery();
      },
      fail: (error) => {
        Taro.showToast({
          title: "请打开蓝牙",
          icon: "error",
        });
        console.error("蓝牙初始化失败:", error);
      },
    });
  };

  // 开始搜索蓝牙设备
  const startBluetoothDevicesDiscovery = () => {
    setScanning(true);
    Taro.startBluetoothDevicesDiscovery({
      success: () => {
        onBluetoothDeviceFound();
      },
      fail: (error) => {
        setScanning(false);
        console.error("搜索蓝牙设备失败:", error);
      },
    });
  };

  // 监听发现新设备事件
  const onBluetoothDeviceFound = () => {
    Taro.onBluetoothDeviceFound((res) => {
      res.devices.forEach((device) => {
        if (!device.name && !device.localName) {
          return;
        }
        setDevices((prevDevices) => {
          const existingDevice = prevDevices.find(
            (d) => d.deviceId === device.deviceId
          );
          if (!existingDevice) {
            return [...prevDevices, device];
          }
          return prevDevices;
        });
      });
    });
  };

  // 停止搜索蓝牙设备
  const stopBluetoothDevicesDiscovery = () => {
    Taro.stopBluetoothDevicesDiscovery({
      success: () => {
        setScanning(false);
        Taro.showToast({
          title: "已停止搜索",
          icon: "success",
        });
      },
    });
  };

  // 连接蓝牙设备
  const connectDevice = (deviceId) => {
    Taro.createBLEConnection({
      deviceId,
      success: () => {
        Taro.showToast({
          title: "连接成功",
          icon: "success",
        });
      },
      fail: (error) => {
        Taro.showToast({
          title: "连接失败",
          icon: "error",
        });
        console.error("连接设备失败:", error);
      },
    });
  };

  return (
    <View className="bluetooth-page">
      <View className="section">
        <View className="section-title">蓝牙设备</View>
        <View className="section-content">
          <AtButton
            type="primary"
            onClick={scanning ? stopBluetoothDevicesDiscovery : initBluetooth}
          >
            {scanning ? "停止搜索" : "搜索设备"}
          </AtButton>

          <AtList>
            {devices.map((device) => (
              <AtListItem
                key={device.deviceId}
                title={device.name || device.localName}
                note={device.deviceId}
                arrow="right"
                onClick={() => connectDevice(device.deviceId)}
              />
            ))}
          </AtList>
        </View>
      </View>
    </View>
  );
};

export default Bluetooth;
