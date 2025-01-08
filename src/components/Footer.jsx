import React from 'react';
import '../App.css';
import '../assets/vendors/bootstrap/css/bootstrap.min.css';
import '../assets/vendors/font-awesome/css/font-awesome.min.css';
import '../assets/vendors/slick/slick.min.css';
import '../assets/vendors/slick/slick-theme.min.css';
import '../assets/vendors/animate.min.css';
import '../assets/vendors/magnific-popup/magnific-popup.css';
import '../assets/vendors/bootstrap-datepicker/css/bootstrap-datepicker.min.css';
import '../assets/vendors/fullscreen-overlay/css/style5.css';
import '../assets/vendors/lightbox/css/lightbox.min.css';
import '../assets/fonts/font-icon/style.css';
import '../assets/css/layout.css';
import '../assets/css/elements.css';
import '../assets/css/shortcode.css';
import '../assets/css/widget.css';
import '../assets/css/extra.css';
import '../assets/css/responsive.css';

const Footer = () => {
        return (
            <div classNameName="App">
                <footer className="light">
                    <div className="site-info footer-bottom">
                    <div className="container">
                        <div className="block-left">
                            <div className="alay-widget wg-social">
                                <ul className="socials list-inline wg-social light">
                                <li><a href="https://www.instagram.com/jx.fufu/" className="swin-transition"><i className="swin-transition fa fa-instagram"></i></a></li>
                                <li><a href="http://twitter.com/jx_fufu" className="swin-transition"><i className="swin-transition fa fa-twitter"></i></a></li>
                                <li><a href="http://seykafu.medium.com" className="swin-transition"><i className="swin-transition fa fa-medium"></i></a></li>
                                <li><a href="http://linkedin.com/in/kaseyfu" className="swin-transition"><i className="swin-transition fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.honeyfeed.fm/u/13655" className="swin-transition"><i className="swin-transition fa fa-book"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="block-right">
                        <div className="content-text"><span className="text">Copyright © 2025 - Kasey Fu</span></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    </div>
                </footer><a id="totop" href="#" className="animated zoomIn"><i className="fa fa-angle-up"></i></a>
            </div>
        );
    };
    
    export default Footer;