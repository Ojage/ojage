import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import Logo from '../components/common/Logo/Logo.component';

const Landing: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [])
    return (<div><p>This is the Landing Page</p> </div>)
}

export default Landing;