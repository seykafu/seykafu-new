import React from 'react';
import logo from '../assets/images/logo_seykafu.png';
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
            <div className="App">
                <footer class="light">
                    <div class="site-info footer-bottom">
                    <div class="container">
                        <div class="block-left">
                            <div class="alay-widget wg-social">
                                <ul class="socials list-inline wg-social light">
                                <li><a href="https://www.instagram.com/jx.fufu/" class="swin-transition"><i class="swin-transition fa fa-instagram"></i></a></li>
                                <li><a href="http://twitter.com/jx_fufu" class="swin-transition"><i class="swin-transition fa fa-twitter"></i></a></li>
                                <li><a href="http://seykafu.medium.com" class="swin-transition"><i class="swin-transition fa fa-medium"></i></a></li>
                                <li><a href="http://linkedin.com/in/kaseyfu" class="swin-transition"><i class="swin-transition fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.honeyfeed.fm/u/13655" class="swin-transition"><i class="swin-transition fa fa-book"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="block-right">
                        <div class="content-text"><span class="text">Copyright © 2023 - by Seykafu</span></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    </div>
                </footer><a id="totop" href="#" class="animated zoomIn"><i class="fa fa-angle-up"></i></a>
                <div id="switch-mode"><span class="dark-mode mode-control"><i class="fa fa-moon-o"></i></span><span class="light-mode mode-control d-none"><i class="fa fa-sun-o"></i></span></div>
            </div>
        );
    };
    
    export default Footer;