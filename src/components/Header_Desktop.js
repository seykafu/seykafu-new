import React from 'react';
import logo from '../assets/images/logo_seykafu-modified.png';
import '../App.css';
import '../assets/css/elements.css';
import '../assets/css/widget.css';
import '../assets/css/extra.css';
import '../assets/css/responsive.css';
import '../assets/vendors/bootstrap/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Books from '../pages/Books';

const Header_Desktop = () => {
        return (
            <div id="pagewrap" class="pagewrap">
                <div id="html-content" class="wrapper-content">
                <header className="header">
                    <div className="header-main alay-section-full">
                        <div className="container">
                            <div className="open-menuMobile">☰</div>
                            <div className="header-logo"><Link to="/" className="logo"><img src={logo} alt="Logo" className="logo-sticky logo-black"/><img src={logo} alt="Alay" className="logo-sticky logo-white"/></Link></div>
                            <div className="utility-nav"><span id="trigger-overlay" className="trigger-search-bar"><i className="fa fa-search"></i></span></div>
                            {/* header logo*/}
                            {/* main menu*/}
                            <nav className="main-nav-wrapper">
                                <div className="main-nav">
                                    <ul id="main-nav" className="nav nav-pills">
                                        <li className="menu-item nav-item"><Link to="/" className="dropdown-text nav-link"><i className="fa fa-angle-down btn-open-dropdown"></i>Home</Link> </li>
                                        <li className="menu-item nav-item">
                                            <Link to="/books" className="dropdown-text nav-link">My Books</Link>
                                        </li>
                                        <li className="menu-item nav-item"><Link to="https://seykafu.notion.site/seykafu/Seykafu-a8fda5021a274d82af74341b9a4a9f2e" className="dropdown-text nav-link">Projects</Link></li>
                                        {/*}
                                        <li className="menu-item nav-item menu-item-has-children dropdown"><Link to="/manga" className="dropdown-text nav-link"><i className="fa fa-angle-down btn-open-dropdown"></i>Manga Reviews</Link>
                                            <ul className="dropdown-menu">
                                                <li className="menu-item nav-item"><Link to="/comedy" className="dropdown-text nav-link">Comedy</Link></li>
                                                <li className="menu-item nav-item"><Link to="/action" className="dropdown-text nav-link">Action</Link></li>
                                                <li className="menu-item nav-item"><Link to="/drama" className="dropdown-text nav-link">Drama</Link></li>
                                                <li className="menu-item nav-item"><Link to="/romance" className="dropdown-text nav-link">Romance</Link></li>
                                            </ul>
                                        </li>
                                        {/* <li className="menu-item nav-item"><Link to="/contact" className="main-text nav-link">Contact</Link></li> */}
                                        <li className="menu-item nav-item"><Link to="/blog" className="main-text nav-link">Other Writing</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header_Desktop;