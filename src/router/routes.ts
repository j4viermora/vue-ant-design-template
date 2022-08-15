import { RouteRecordRaw } from 'vue-router';
import { routes as AuthRoutes } from '../modules/auth/router/routes';

export const routes: Array<RouteRecordRaw> = [


	{
		path: '/auth',
		name: 'auth',
		component: () => import('../layout/AuthLayout.vue'),
		children: AuthRoutes,
	},


	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('../pages/NotFound.vue'),
	},
];
