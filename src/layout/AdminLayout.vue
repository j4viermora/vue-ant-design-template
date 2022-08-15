<template>
	<a-layout style="min-height: 100vh">
		<a-layout-sider v-model:collapsed="collapsed" collapsible>
			<div class="logo">
				<span style="color: white">Logo</span>
			</div>
			<a-menu theme="dark" mode="inline"><SideBar/></a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0" />
			<a-layout-content style="margin: 0 16px">
				<div
					:style="{
						padding: '24px',
						background: '#fff',
						minHeight: '360px',
						'margin-top': '1rem',
					}"
				>
					<router-view />
					<template>
						<a-back-top />
					</template>
				</div>
			</a-layout-content>
			<a-layout-footer style="text-align: center">
				Frontinv 2022 ©
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>
<script lang="ts" setup>
	import { ref } from 'vue';
	import { SideBar } from '../components';

	let collapsed = ref<boolean>(false);
</script>
<style>
	#components-layout-demo-side .logo {
		height: 32px;
		margin: 16px;
		background: rgba(255, 255, 255, 0.3);
	}

	.site-layout .site-layout-background {
		background: #fff;
	}
	[data-theme='dark'] .site-layout .site-layout-background {
		background: #141414;
	}
</style>
