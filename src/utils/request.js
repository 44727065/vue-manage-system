/*
 * @Author: your name
 * @Date: 2021-05-12 10:55:31
 * @LastEditTime: 2021-05-13 16:55:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-elementPlus/src/utils/request.js
 */
import axios from "axios";
import store from "../store/index.js";
const service = axios.create({
	// process.env.NODE_ENV === 'development' 来判断是否开发环境
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 5000,
	withCredentials: false,
});

service.interceptors.request.use(
	(config) => {
		config.headers.token = store.state.noboToken;
		return config;
	},
	(error) => {
		console.log(error);
		return Promise.reject();
	}
);

service.interceptors.response.use(
	(response) => {
		if (response.status === 200) {
			return response.data;
		} else {
			Promise.reject();
		}
	},
	(error) => {
		console.log(error);
		return Promise.reject();
	}
);

export default service;
