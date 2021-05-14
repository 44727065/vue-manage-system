/*
 * @Author: your name
 * @Date: 2021-05-12 10:55:31
 * @LastEditTime: 2021-05-13 15:20:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-elementPlus/src/api/index.js
 */
import request from "../utils/request";

export const fetchData = (query) => {
	return request({
		url: "./table.json",
		method: "get",
		params: query,
	});
};
export const login = (data) => {
	return request({
		url: "/login",
		method: "post",
		data,
	});
};
