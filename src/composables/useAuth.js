import { useRouter } from 'vue-router';
import { logout } from '@/utils/auth';
import routeNames from '@/router/routeNames';

export function useAuth() {
    const router = useRouter();

    const handleLogout = async () => {
        logout();
        await router.push({ name: routeNames.SignInView });
    };

    return {
        handleLogout
    };
}