import React from 'react';
import './header.css'
import logo from './../../img/Group 12.svg';
import map from './../../img/acetone-20231123-214954-947 1.png';
import YourMenuComponent from '../Burger/burger';
function Header() {

    return (
        <header className='header'>
            <div className="container-head">
                <div className="header_row">
                <img src={logo} className="logo" alt="logo" /> 
                    <YourMenuComponent></YourMenuComponent>
                </div>
            </div>
        </header>
    )
}

export default Header;