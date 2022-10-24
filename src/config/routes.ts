import IRoute from "../interfaces/route";
import About from "../pages/About.page";
import Login from "../pages/auth/Login.page";
import SignUp from "../pages/auth/SignUp.page";
import Landing from "../pages/Landing.page";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Landing',
        element: Landing,
        exact: true

    },
    {
        path: '/about',
        name: 'About',
        element: About,
        exact: true

    },
    {
        path: '/login',
        name: 'Login',
        element: Login,
        exact: true

    },
    {
        path: '/signup',
        name: 'Signup',
        element: SignUp,
        exact: true

    },
]
export default routes;