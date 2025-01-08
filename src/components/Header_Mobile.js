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
                                        <li className="menu-item nav-item"><Link to="/" className="dropdown-text nav-link"><i className="fa fa-angle-down btn-open-dropdown"></i>Home</Link> </li>
                                        <li className="menu-item nav-item">
                                            <Link to="/books" className="dropdown-text nav-link">My Books</Link>
                                        </li>
                                        <li className="menu-item nav-item"><Link to="https://seykafu.notion.site/seykafu/Seykafu-a8fda5021a274d82af74341b9a4a9f2e" className="dropdown-text nav-link">Projects</Link></li>
                                        <li className="menu-item nav-item"><Link to="/blog" className="main-text nav-link">Other Writing</Link></li>
                                    </ul>
                                </li>
                                {/*
                                <li className="menu-item nav-item menu-item-has-children dropdown"><a href="manga_reviews.html" className="dropdown-toggle nav-link"><i className="fa fa-angle-down btn-open-dropdown"></i>Manga Reviews</a>
                                    <ul className="dropdown-menu">
                                        <li className="menu-item nav-item"><a href="romance.html" className="dropdown-text nav-link">Romance</a></li>
                                        <li className="menu-item nav-item"><a href="comedy.html" className="dropdown-text nav-link">Comedy</a></li>
                                        <li className="menu-item nav-item"><a href="action.html" className="dropdown-text nav-link">Action</a></li>
                                        <li className="menu-item nav-item"><a href="drama.html" className="dropdown-text nav-link">Drama</a></li>
                                    </ul>
                                </li>
                                */}
                                {/* <li className="menu-item nav-item"><a href="contact.html" className="main-text nav-link">Contact</a></li> */}
                            </ul>
                        </nav>
                    </div>
                <div className="header-mobile-backdrop"></div>
            </header>
        );
};

export default Header_Mobile;