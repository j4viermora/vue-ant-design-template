import { RouteRecordRaw } from 'vue-router';
import { LoginPage, SignupPage } from '../pages/';

export const routes: RouteRecordRaw[] = [
	{
		path: 'login',
		name: 'login-page',
		component: LoginPage,
	},
	{
		path: 'signup',
		name: 'signup-page',
		component: SignupPage
	},
];
