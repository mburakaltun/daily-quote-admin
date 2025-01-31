import routeNames from "@/router/routeNames";
import SignUpView from "@/views/authentication/SignUpView.vue";
import DashboardView from "@/views/DashboardView.vue";
import CreateQuoteView from "@/views/CreateQuoteView.vue";
import AllQuotesView from "@/views/AllQuotesView.vue";
import SignInView from "@/views/authentication/SignInView.vue";

const routes = [
    {
        path: '/signUp',
        component: SignUpView,
        name: routeNames.SignUpView,
        meta: {
            hideSidebar: true
        }
    },
    {
        path: '/signIn',
        component: SignInView,
        name: routeNames.SignInView,
        meta: {
            hideSidebar: true
        }
    },
    {
        path: '/dashboard',
        component: DashboardView,
        name: routeNames.DashboardView,
    },
    {
        path: '/createQuoteView',
        component: CreateQuoteView,
        name: routeNames.CreateQuoteView,
    },
    {
        path: '/allQuotes',
        component: AllQuotesView,
        name: routeNames.AllQuotesView,
    }
];

export default routes;