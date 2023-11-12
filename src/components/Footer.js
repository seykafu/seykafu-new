import React from 'react';
import logo from '../assets/images/logo_seykafu.png';
import '../App.css';
import '../assets/css/elements.css';
import '../assets/css/layout.css';
import '../assets/css/widget.css';
import '../assets/css/extra.css';
import '../assets/css/responsive.css';
import '../assets/css/shortcode.css';
import '../assets/vendors/bootstrap/css/bootstrap.min.css';

const Footer = () => {
        return (
            <div>
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
                </div>
        );
    };
    
    export default Footer;