/*
 * @Author: your name
 * @Date: 2021-05-12 10:55:31
 * @LastEditTime: 2021-05-13 15:20:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-elementPlus/src/store/index.js
 */
import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import {login} from "../api/index";

export default createStore({
	state: {
		tagsList: [],
		collapse: false,
		userInfo: {},
		noboToken: "",
	},
	mutations: {
		delTagsItem(state, data) {
			state.tagsList.splice(data.index, 1);
		},
		setTagsItem(state, data) {
			state.tagsList.push(data);
		},
		clearTags(state) {
			state.tagsList = [];
		},
		closeTagsOther(state, data) {
			state.tagsList = data;
		},
		closeCurrentTag(state, data) {
			for (let i = 0, len = state.tagsList.length; i < len; i++) {
				const item = state.tagsList[i];
				if (item.path === data.$route.fullPath) {
					if (i < len - 1) {
						data.$router.push(state.tagsList[i + 1].path);
					} else if (i > 0) {
						data.$router.push(state.tagsList[i - 1].path);
					} else {
						data.$router.push("/");
					}
					state.tagsList.splice(i, 1);
					break;
				}
			}
		},
		// 侧边栏折叠
		hadndleCollapse(state, data) {
			state.collapse = data;
		},
		setUserInfo(state, data) {
			state.userInfo = data;
		},
		setToken(state, data) {
			state.noboToken = data;
		},
	},
	actions: {
		userLogin(context, loginparam) {
			console.log("登录参数", loginparam);
			return new Promise((resolve, reject) => {
				login(loginparam)
					.then((res) => {
						console.log(res);
						context.commit("setToken", loginparam);
						resolve(res);
					})
					.catch((err) => {
						reject(err);
						context.commit("setToken", loginparam);
						// console.log(err);
					});
				// setTimeout(() => {
				// 	if (Math.random() > 0.5) {
				// 		console.log("走进来");
				// 		context.commit("setToken", loginparam);
				// 		resolve();
				// 	} else {
				// 		reject("登录失败");
				// 	}
				// }, 1000);
			});
		},
	},
	getters: {
		token: (state) => {
			return state.noboToken;
		},
		tagsList: (state) => {
			return state.tagsList.map((item) => item.name);
		},
		collapse: (state) => state.collapse,
	},
	modules: {},
	plugins: [
		// 将其持久化存储到 localStorage
		createPersistedState({storage: window.localStorage}),
	],
});
