import { RouteRecordRaw } from 'vue-router';
import { DemoPage } from '../pages/';

export const routes: RouteRecordRaw[] = [
	{
		path: 'demo',
		name: 'demo-page',
		component: DemoPage,
	},
];
