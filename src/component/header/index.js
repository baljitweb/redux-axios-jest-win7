import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.png';

const Header = (props) => {
    return (
        <header className="header-component">
            <div className="wrap">
                <div className="logo">
                    <img alt="logo" src={Logo} />
                </div>
            </div>
        </header>
    )
}

export default Header;
