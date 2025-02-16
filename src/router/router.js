import {createRouter, createWebHistory} from 'vue-router';
import routes from "@/router/routes.js";
import {isAuthenticated} from "@/utils/auth.js";
import routeNames from "@/router/routeNames.js";

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const publicRoutes = [routeNames.SignInView, routeNames.SignUpView];

    if (publicRoutes.includes(to.name)) {
        if (isAuthenticated()) {
            next({ name: routeNames.DashboardView });
            return;
        }
        next();
        return;
    }

    if (!isAuthenticated()) {
        next({ name: routeNames.SignInView });
        return;
    }

    next();
});

export default router;