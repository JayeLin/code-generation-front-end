import Axios from "axios";

/**
 * Pad: socket连接URL
 */
export const MESSAGESOCKET_URL = "ws://172.30.22.71/websocket/web/";
// export const MESSAGESOCKET_URL = "ws://172.30.22.37:7007/websocket/web/";

/**
 * 高拍仪: socket连接URL
 */
// export const PHOTOGRAPHIC_URL = "ws://localhost/:1818";


/**
 * API 配置
 */
export let HTTP_CONFIG = {
  url: "http://172.30.22.147/api",
  // url: "http://172.30.22.37/api",

  header: {},
  withCredentials: true
};

// Axios
Axios.defaults.baseURL = HTTP_CONFIG.url;

// 添加头部信息
Axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
// Axios.defaults.headers['appName'] = 'CSMS'
// Axios.defaults.headers['language'] = "ZH_CN"
Axios.defaults.withCredentials = HTTP_CONFIG.withCredentials;
