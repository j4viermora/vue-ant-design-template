<template>
	<div>
		<h2>Demo Page</h2>
		<p>{{ store.counter }}</p>
		<section>
			<button @click="store.increment">+ counter</button>
			<button @click="store.decrement">- counter</button>
			<button @click="store.reset">0 counter</button>
		</section>
	</div>
</template>

<script setup lang="ts">
	import { useCounterStore } from '../stores/counter';
	const store = useCounterStore();
</script>

<style scoped>
	section {
		display: flex;
		gap: 0.5rem;
	}
</style>
