<!--
 * @Author: your name
 * @Date: 2021-05-12 10:55:31
 * @LastEditTime: 2021-05-12 11:45:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-elementPlus/src/views/Home.vue
-->
<template>
	<div class="about">
		<v-header />
		<v-sidebar />
		<div class="content-box" :class="{'content-collapse': collapse}">
			<v-tags></v-tags>
			<div class="content">
				{{ token + "ppppppp" }}
				<router-view v-slot="{Component}">
					<transition name="move" mode="out-in">
						<keep-alive :include="tagsList">
							<component :is="Component" />
						</keep-alive>
					</transition>
				</router-view>
				<!-- <el-backtop target=".content"></el-backtop> -->
			</div>
		</div>
	</div>
</template>
<script>
import vHeader from "../components/Header";
import vSidebar from "../components/Sidebar";
import vTags from "../components/Tags.vue";
import {mapGetters} from "vuex";
export default {
	components: {
		vHeader,
		vSidebar,
		vTags,
	},
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapGetters([
			"token",
			"tagsList",
			"collapse",
			// ...
		]),
	},
	mounted() {
		console.log(this.$store.state, "----", this.tagsList);
		console.log(this.token, "----", this.tagsList);
	},
};
</script>
