import React, { useEffect } from 'react';
// Import the style sheet
import style from './Logo.module.css';
// Importing the three main Logo variations
import cover from '../../../assets/Logo/cover.png';
import Default from '../../../assets/Logo/Default.png';
import DefaultSide from '../../../assets/Logo/DefaultSide.png';
import profile from '../../../assets/Logo/profile.png';
// Import Vector Variations


const Logo: React.FunctionComponent<{}> = props => {

    return (<div className={style.logoBox}>
        <img src={DefaultSide} alt="Ojage_Logo" />
    </div>)
}

export default Logo;