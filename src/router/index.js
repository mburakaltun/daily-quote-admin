import {createRouter, createWebHistory} from 'vue-router'
import DashboardView from "@/views/DashboardView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: DashboardView,
        },
        {
            path: '/createQuote',
            name: 'CreateQuote',
            component: () => import('@/views/CreateQuoteView.vue'),
        },
        {
            path: '/allQuotes',
            name: 'AllQuotes',
            component: () => import('@/views/AllQuotesView.vue'),
        }
    ],
})

export default router
