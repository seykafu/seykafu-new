import React from 'react';
import '../App.css';
import '../assets/css/elements.css';
import '../assets/css/widget.css'
import '../assets/css/extra.css'
import '../assets/css/responsive.css'
import '../assets/vendors/bootstrap/css/bootstrap.min.css'


const HeaderMobile = () => {
        return (
                <header className="header">
                <div className="header-mobile">
                        <div className="toggle-header-mobile">×</div>
                        <nav className="main-nav-mobile">
                            <ul>
                                <li className="menu-item nav-item menu-item-has-children dropdown"><a href="index.html" className="dropdown-toggle nav-link"><i className="fa fa-angle-down btn-open-dropdown"></i>Home</a>
                                    <ul className="dropdown-menu">
                                        <li className="menu-item nav-item"><a href="books.html" className="dropdown-text nav-link">My Books & Writing</a></li>
                                        <li className="menu-item nav-item"><a href="https://seykafu.medium.com/" className="dropdown-text nav-link">Medium Blog</a></li>
                                        <li className="menu-item nav-item"><a href="https://seykafu.notion.site/seykafu/Seykafu-a8fda5021a274d82af74341b9a4a9f2e" className="dropdown-text nav-link">Projects</a></li>
                                        <li className="menu-item nav-item"><a href="https://www.amazon.com/dp/B0BJZXKMM9" className="dropdown-text nav-link">My Latest Book</a></li>
                                        <li className="menu-item nav-item"><a href="https://linktr.ee/pmhive" className="main-text nav-link">PM Hive</a></li>
                                    </ul>
                                </li>
                                {/* <li className="menu-item nav-item"><a href="contact.html" className="main-text nav-link">Contact</a></li> */}
                            </ul>
                        </nav>
                    </div>
                <div className="header-mobile-backdrop"></div>
            </header>
        );
};

export default HeaderMobile;