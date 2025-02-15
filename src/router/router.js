import {createRouter, createWebHashHistory} from 'vue-router';
import routes from "@/router/routes.js";

const router = createRouter({
    history: createWebHashHistory('/daily-quote-admin/'),
    routes
});

export default router;