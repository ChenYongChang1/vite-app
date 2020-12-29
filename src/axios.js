import axios from "axios";
import { _user } from "./store/user/user";
// axios.defaults.baseURL = 'http://106.14.212.56/api'  //正式
// axios.defaults.baseURL = 'http://test' //测试

async function tokenLogin() {
  return await axios.post("/dblogin", {
    userName: "cyc",
    userPassword: "Asd12345!",
  });
}

//post请求头
axios.defaults.headers.post["Content-Type"] = "application/json";

//设置超时
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  async (config) => {
    if (config.url === "/dblogin") {
      return config;
    }
    const { state } = _user;
    if (!(state.userInfo && state.userInfo.assToken)) {
      const userRes = await tokenLogin();
      const { data } = userRes;
      _user.setUserInfo(data.data);
    }
    config.headers.assToken = state.userInfo.assToken || "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    alert(`异常请求：${JSON.stringify(error.message)}`);
  }
);

export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url,
        data: JSON.stringify(data),
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  get(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url,
        params: data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
