import request from "./axios";

// 封装GET请求
export const get = (url, params) => {
  return request({
    method: "get",
    url,
    params,
  });
};

// 封装POST请求
export const post = (url, data) => {
  return request({
    method: "post",
    url,
    data,
  });
};

// 封装DELETE请求
export const del = (url) => {
  return request({
    method: "delete",
    url,
  });
};

// 封装PUT请求
export const put = (url, data) => {
  return request({
    method: "put",
    url,
    data,
  });
};

// 导出request实例
export default request;
