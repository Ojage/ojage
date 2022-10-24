import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const Landing: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`loading Landing`)
    }, [])
    return (<div><p>This is the Landing Page</p> </div>)
}

export default Landing;