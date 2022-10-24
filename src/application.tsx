import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar.component';
import logging from './config/logging';
import routes from './config/routes';

const Application: React.FunctionComponent<{}> = props => {
    useEffect(() => {
        logging.info('Loading Application');
    })
    return (<div>
        <BrowserRouter>
        <NavigationBar />
            <Routes>
                {routes.map((route) => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.element />}
                        />)
                })}

            </Routes>
        </BrowserRouter>
    </div>)
}

export default Application;