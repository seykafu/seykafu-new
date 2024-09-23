import React from 'react';
import '../App.css';
import '../assets/css/elements.css';
import '../assets/css/widget.css'
import '../assets/css/extra.css'
import '../assets/css/responsive.css'
import '../assets/vendors/bootstrap/css/bootstrap.min.css'


const Header_Mobile = () => {
        return (
                <header className="header">
                <div className="header-mobile">
                        <div className="toggle-header-mobile">×</div>
                        <nav className="main-nav-mobile">
                            <ul>
                                <li className="menu-item nav-item menu-item-has-children dropdown"><a href="index.html" className="dropdown-toggle nav-link"><i className="fa fa-angle-down btn-open-dropdown"></i>Home</a>
                                    <ul className="dropdown-menu">
                                        <li className="menu-item nav-item current-menu-item"><a href="index.html" className="dropdown-text nav-link">Home</a></li>
                                        <li className="menu-item nav-item"><a href="books.html" className="dropdown-text nav-link">My Books</a></li>
                                        {/* <li className="menu-item nav-item"><a href="https://seykafu.notion.site/Seykafu-a8fda5021a274d82af74341b9a4a9f2e" className="dropdown-text nav-link">Past Projects</a></li> */}
                                        <li className="menu-item nav-item"><a href="mediums.html" className="dropdown-text nav-link">Medium Blog</a></li>
                                        <li className="menu-item nav-item"><a href="https://www.amazon.com/dp/B0BJZXKMM9" className="dropdown-text nav-link">My Latest Book</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item nav-item menu-item-has-children dropdown"><a href="manga_reviews.html" className="dropdown-toggle nav-link"><i className="fa fa-angle-down btn-open-dropdown"></i>Manga Reviews</a>
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
                        </nav>
                    </div>
                <div className="header-mobile-backdrop"></div>
            </header>
        );
};

export default Header_Mobile;