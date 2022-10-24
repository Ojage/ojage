import React, { useEffect } from 'react';
import Logo from '../common/Logo/Logo.component';
import styles from './NavigationBar.module.css';
import {Link} from 'react-router-dom';

const NavigationBar: React.FunctionComponent<{}> = props => {

    return (
    <div className={styles.NavigationBarBox}>
        <div className={styles.NavLogo}>
            <Logo />
        </div>
        <div className={styles.NavItems}>
            <Link to={'/'}>Home</Link>
            <Link to={'resources'}>Resources</Link>
            <Link to={'/about'}>About</Link>
        </div>
    </div>
    )
}

export default NavigationBar;