import routes from "@/router/routes";

function redirect(routeName) {
    const route = routes.find(route => route.name === routeName);
    if (route) {
        window.location.href = route.path;
    } else {
        console.error(`Route with name ${routeName} not found`);
    }
}

export default redirect;
