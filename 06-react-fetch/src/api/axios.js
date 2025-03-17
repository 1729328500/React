import axios from "axios";

// 创建axios实例
const request = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在这里可以添加loading状态
    // 添加token等通用header
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 统一处理响应数据
    return response.data;
  },
  (error) => {
    // 统一错误处理
    let message = "";
    if (error.response) {
      switch (error.response.status) {
        case 400:
          message = "请求错误";
          break;
        case 401:
          message = "未授权";
          break;
        case 403:
          message = "拒绝访问";
          break;
        case 404:
          message = "请求地址不存在";
          break;
        case 500:
          message = "服务器内部错误";
          break;
        default:
          message = "网络错误";
      }
    } else {
      message = error.message;
    }
    console.error("请求错误:", message);
    return Promise.reject(error);
  }
);

export default request;
