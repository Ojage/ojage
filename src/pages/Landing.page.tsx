import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const Landing: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [])
    return (<div>Hello Landing <p>This is the Landing Page</p> </div>)
}

export default Landing;