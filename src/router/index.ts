import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHashHistory(),
	routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
	const meta = to.meta || {}
	const needAuth = meta.needAuth || false
	if (needAuth && !localStorage.getItem('token')) {
		next({ name: 'login-page' })
	} else {
		next()
	}
})

export { router }