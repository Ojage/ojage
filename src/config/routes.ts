import IRoute from "../interfaces/route";
import About from "../pages/About.page";
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
]
export default routes;