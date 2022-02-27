import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../../routes";

const AppRouter = () => {
    const isAuth = true;
    return (
        <div>
            <Routes>
                {isAuth ? privateRoutes.map(({element, path, exact}, i) =>
                            <Route key={i} element={element} path={path} exact={exact}/>)
                        : publicRoutes.map(({element, path, exact}, i) =>
                            <Route key={i} element={element} path={path} exact={exact}/>)
                }
                <Route path={'*'} element={<Navigate to={isAuth ? '/posts' :'/login'}/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;