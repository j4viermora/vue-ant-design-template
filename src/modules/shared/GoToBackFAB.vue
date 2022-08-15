<template>
	<a-button @click="goToBack" type="primary"
		><LeftOutlined /> Ir atras</a-button
	>
</template>
<script lang="ts" setup>
	import { useRouter } from 'vue-router';
	import { LeftOutlined } from '@ant-design/icons-vue';
	const router = useRouter();
	const goToBack = () => router.back();
</script>
<style lang="css" scoped></style>
