import axios from "axios";

// 创建axios实例
const tianjuRequest = axios.create({
  baseURL: "https://apis.tianapi.com",
  timeout: 5000,
});

// 请求拦截器
tianjuRequest.interceptors.request.use(
  (config) => {
    // 添加key和num参数
    config.params = {
      ...config.params,
      key: "0cbf4e450ec7f3a28a2c4f5f6a1f9851",
      num: 10,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
tianjuRequest.interceptors.response.use(
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

// 封装GET请求
export const getTianjuData = () => {
  return tianjuRequest({
    method: "get",
    url: "/film/index",
  });
};

export default tianjuRequest;
