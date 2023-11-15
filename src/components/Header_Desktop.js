import React from 'react';
import logo from '../assets/images/logo_seykafu.png';
import '../App.css';
import '../assets/css/elements.css';
import '../assets/css/widget.css';
import '../assets/css/extra.css';
import '../assets/css/responsive.css';
import '../assets/vendors/bootstrap/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Books from '../pages/Books';

const Header_Desktop = () => {
        return (
            <div className="App">
                <header className="header">
                    <div className="header-main alay-section-full">
                        <div className="container">
                            <div className="open-menuMobile">☰</div>
                            <div className="header-logo"><a href="index.html" className="logo"><img src={logo} alt="Logo" className="logo-sticky logo-black"/><img src={logo} alt="Alay" className="logo-sticky logo-white"/></a></div>
                            <div className="utility-nav"><span id="trigger-overlay" className="trigger-search-bar"><i className="fa fa-search"></i></span></div>
                            {/* header logo*/}
                            {/* main menu*/}
                            <nav className="main-nav-wrapper">
                                <div className="main-nav">
                                    <ul id="main-nav" className="nav nav-pills">
                                        <li className="menu-item nav-item"><a href="index.html" className="dropdown-toggle nav-link"><i className="fa fa-angle-down btn-open-dropdown"></i>Home</a> </li>
                                        <li className="menu-item nav-item">
                                            <Link to="/books" className="dropdown-text nav-link">My Books</Link>
                                        </li>
                                        {/* <li className="menu-item nav-item"><a href="https://seykafu.notion.site/Seykafu-a8fda5021a274d82af74341b9a4a9f2e" className="dropdown-text nav-link">Past Projects</a></li> */}
                                        <li className="menu-item nav-item"><a href="mediums.html" className="dropdown-text nav-link">Medium Blog</a></li>

                                        <li className="menu-item nav-item menu-item-has-children dropdown current-menu-item"><a href="manga_reviews.html" className="dropdown-toggle nav-link"><i className="fa fa-angle-down btn-open-dropdown"></i>Manga Reviews</a>
                                            <ul className="dropdown-menu">
                                                <li className="menu-item nav-item"><a href="romance.html" className="dropdown-text nav-link">Romance</a></li>
                                                <li className="menu-item nav-item"><a href="comedy.html" className="dropdown-text nav-link">Comedy</a></li>
                                                <li className="menu-item nav-item"><a href="action.html" className="dropdown-text nav-link">Action</a></li>
                                                <li className="menu-item nav-item"><a href="drama.html" className="dropdown-text nav-link">Drama</a></li>
                                            </ul>
                                        </li>
                                        {/* <li className="menu-item nav-item"><a href="contact.html" className="main-text nav-link">Contact</a></li> */}
                                        <li className="menu-item nav-item"><a href="about.html" className="main-text nav-link">About</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>

                <Routes>
                    <Route path="/books" element={<Books />} />
                    {/* <Route path="/blogs" element={<Blogs />} /> 
                    <Route path="/manga" element={<Manga />} /> */}
                </Routes>
        </div>
    );
};

export default Header_Desktop;