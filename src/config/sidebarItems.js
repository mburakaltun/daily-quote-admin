import pathNames from "@/router/pathNames.js";

export const topSidebarItems = [
    { to: pathNames.Dashboard, icon: 'tachometer-alt', text: 'Dashboard' },
    { to: pathNames.CreateQuote, icon: 'plus-circle', text: 'Create Quote' },
    { to: pathNames.AllQuotes, icon: 'list', text: 'All Quotes' },
    { to: '#', icon: 'chart-line', text: 'Analytics' },
    { to: '#', icon: 'users', text: 'Users' },
];

export const bottomSidebarItems = [
    { to: '#', icon: 'cog', text: 'Settings' },
    { to: '#', icon: 'sign-out-alt', text: 'Logout' },
];