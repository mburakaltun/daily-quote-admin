import routeNames from "@/router/routeNames";
import SignUpView from "@/views/authentication/SignUpView.vue";
import DashboardView from "@/views/DashboardView.vue";
import CreateQuoteView from "@/views/CreateQuoteView.vue";
import AllQuotesView from "@/views/AllQuotesView.vue";
import SignInView from "@/views/authentication/SignInView.vue";
import pathNames from "@/router/pathNames.js";

const routes = [
    {
        path: pathNames.SignUp,
        component: SignUpView,
        name: routeNames.SignUpView,
        meta: {
            hideSidebar: true
        }
    },
    {
        path: pathNames.SignIn,
        component: SignInView,
        name: routeNames.SignInView,
        meta: {
            hideSidebar: true
        }
    },
    {
        path: pathNames.Dashboard,
        component: DashboardView,
        name: routeNames.DashboardView,
    },
    {
        path: pathNames.CreateQuote,
        component: CreateQuoteView,
        name: routeNames.CreateQuoteView,
    },
    {
        path: pathNames.AllQuotes,
        component: AllQuotesView,
        name: routeNames.AllQuotesView,
    }
];

export default routes;