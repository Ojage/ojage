import { Link } from 'react-router-dom';
import React from 'react';
// Import the style sheet
import styles from './Logo.module.css';
// Importing the three main Logo variations
// import cover from '../../../assets/Logo/cover.png';
// import Default from '../../../assets/Logo/Default.png';
import DefaultSide from '../../../assets/Logo/DefaultSide.png';
// import profile from '../../../assets/Logo/profile.png';
// Import Vector Variations


const Logo: React.FunctionComponent<{}> = props => {

    return (
        <Link to='/'>
            <img className={styles.logo} src={DefaultSide} alt="Ojage_Logo" />
        </Link>
    )
}

export default Logo;