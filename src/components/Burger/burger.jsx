import React, { useState } from 'react';
import './YourMenuStyles.css';

const YourMenuComponent = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
        setOpenSubMenus({}); // Close all submenus when burger menu is toggled
    };

    const handleSubMenuToggle = (menu) => {
        setOpenSubMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    return (
        <nav>
            <button className={`burger-button ${isBurgerMenuOpen ? 'open' : ''}`} onClick={toggleBurgerMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
            <ul className={`topmenu ${isBurgerMenuOpen ? 'burger-open' : ''}`}>
                <li className={openSubMenus['about'] ? 'submenu-open' : ''}>
                    <a href="/home" onClick={(e) => { e.preventDefault(); handleSubMenuToggle('about'); }} className={`active ${openSubMenus['about'] ? 'arrow-up' : 'arrow-down'}`}>
                        О нас
                    </a>
                    <ul className={`submenu ${openSubMenus['about'] ? 'submenu-open' : ''}`}>
                        <li><a href="/manag" className="submenu-link">Руководство</a></li>
                    </ul>
                </li>
                <li><a href="/company">о компании</a></li>
                <li><a href="/cleaning">Продукция</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="/contact">Контакты</a></li>
            </ul>
        </nav>
    );
};

export default YourMenuComponent;