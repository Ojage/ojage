import React, { useEffect } from 'react';
import Logo from '../common/Logo/Logo.component';
import styles from './NavigationBar.module.css';
import { Link } from 'react-router-dom';
import Down from '../../assets/Icons/down';
import Home from '../../assets/Icons/home';
import Reso from '../../assets/Icons/resources';
import Info from '../../assets/Icons/info';

const NavigationBar: React.FunctionComponent<{}> = props => {

    return (
        <div className={styles.NavigationBarBox}>
            <div className={styles.NavLogo}>
                <Logo />
            </div>
            <div className={styles.NavItems}>
                <div>
                    <Home />
                    <Link to={'/'}>
                        Home
                    </Link>
                </div>
                <div>
                    <Reso />
                    <Link to={'resources'}>Resources</Link>
                    <Down />
                </div>
                <div>
                    <Info />
                    <Link to={'/about'}>About</Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;