import { createRouter, createWebHistory } from 'vue-router';
import routeNames from "@/router/routeNames";
import SignUpView from "@/views/SignUpView.vue";
import DashboardView from "@/views/DashboardView.vue";
import CreateQuoteView from "@/views/CreateQuoteView.vue";
import AllQuotesView from "@/views/AllQuotesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: routeNames.DashboardView,
            component: DashboardView,
        },
        {
            path: '/signUp',
            name: routeNames.SignUpView,
            component: SignUpView,
            meta: {
                hideSidebar: true
            }
        },
        {
            path: '/createQuote',
            name: routeNames.CreateQuoteView,
            component: CreateQuoteView,
        },
        {
            path: '/allQuotes',
            name: routeNames.AllQuotesView,
            component: AllQuotesView,
        }
    ],
});

export default router;