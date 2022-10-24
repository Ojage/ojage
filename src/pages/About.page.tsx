import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const About: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`loading About`)
    }, [])
    return (<div>Hello About <p>This is the About Page</p> </div>)
}

export default About;