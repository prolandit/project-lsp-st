import { Route, Routes } from 'react-router-dom';
import { RouteParam } from './common/types';

interface Props {
    routes: RouteParam[];
}

const generateRoutes = (routes: RouteParam[]) => {
    return routes.map((route, index) => {
        if (route.children) {
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                >
                    {generateRoutes(route.children)}
                </Route>
            );
        }
        return (
            <Route
                key={index}
                path={route.path}
                element={route.element}
            />
        );
    });
};

const AppRouter = ({ routes }: Props) => {
    return <Routes>{generateRoutes(routes)}</Routes>;
};

export default AppRouter;
