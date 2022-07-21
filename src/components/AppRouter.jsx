import React from 'react';
import Error from '../pages/Error';
import Posts from '../pages/Posts';
import Login from '../pages/Login';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import { Navigate } from "react-router-dom";

const AppRouter = () => {
    const isAuth = false;

    return (
        isAuth
            ?

            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component} />
                )}

                <Route path="/*" element={<Navigate to="/posts" replace />} />

            </Routes>


            :

            <Routes>

                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component} />
                )}

                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>

    );
};





export default AppRouter;
