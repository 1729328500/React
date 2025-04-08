import React, { useState } from "react";
import { View, Image, Text } from "@tarojs/components";
import {
  AtForm,
  AtInput,
  AtTextarea,
  AtButton,
  AtCard,
  AtIcon,
  AtAvatar,
} from "taro-ui";

import "./index.scss";

const Card = () => {
  const defaultAvatar =
    "https://whyhd.oss-cn-nanjing.aliyuncs.com/2024/11/19/8f79d503-e0e1-4e5d-af8d-ccd6144e7b17.png";

  const [cardInfo, setCardInfo] = useState({
    name: "",
    title: "",
    company: "",
    phone: "",
    email: "",
    description: "",
    avatar: defaultAvatar,
  });

  const [isPreview, setIsPreview] = useState(false);

  const handleChange = (value, field) => {
    setCardInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    setIsPreview(true);
  };

  const handleEdit = () => {
    setIsPreview(false);
  };

  return (
    <View className="card">
      {!isPreview ? (
        <AtForm onSubmit={handleSubmit}>
          <View style={{ textAlign: "center", padding: "20px" }}></View>
          <AtInput
            name="name"
            title="姓名"
            type="text"
            placeholder="请输入姓名"
            value={cardInfo.name}
            onChange={(value) => handleChange(value, "name")}
          />
          <AtInput
            name="title"
            title="职位"
            type="text"
            placeholder="请输入职位"
            value={cardInfo.title}
            onChange={(value) => handleChange(value, "title")}
          />
          <AtInput
            name="company"
            title="公司"
            type="text"
            placeholder="请输入公司名称"
            value={cardInfo.company}
            onChange={(value) => handleChange(value, "company")}
          />
          <AtInput
            name="phone"
            title="电话"
            type="phone"
            placeholder="请输入电话号码"
            value={cardInfo.phone}
            onChange={(value) => handleChange(value, "phone")}
          />
          <AtInput
            name="email"
            title="邮箱"
            type="email"
            placeholder="请输入邮箱地址"
            value={cardInfo.email}
            onChange={(value) => handleChange(value, "email")}
          />
          <AtTextarea
            value={cardInfo.description}
            onChange={(value) => handleChange(value, "description")}
            maxLength={200}
            placeholder="请输入个人简介"
          />
          <AtButton type="primary" formType="submit">
            预览名片
          </AtButton>
        </AtForm>
      ) : (
        <View className="preview">
          <AtCard
            title={cardInfo.name}
            note={cardInfo.company}
            extra={cardInfo.title}
            renderIcon={
              <AtAvatar circle image={cardInfo.avatar} size="small" />
            }
          >
            <View className="card-content">
              <View className="info-item">
                <AtIcon value="phone" size="16" color="#666" />
                <Text>{cardInfo.phone}</Text>
              </View>
              <View className="info-item">
                <AtIcon value="mail" size="16" color="#666" />
                <Text>{cardInfo.email}</Text>
              </View>
              <View className="description">{cardInfo.description}</View>
            </View>
          </AtCard>
          <AtButton onClick={handleEdit}>编辑名片</AtButton>
        </View>
      )}
    </View>
  );
};

export default Card;
