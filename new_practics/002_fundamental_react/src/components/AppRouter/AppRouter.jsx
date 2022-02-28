import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../../routes";
import {AuthContext} from "../../context";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <Loader/>
    }
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