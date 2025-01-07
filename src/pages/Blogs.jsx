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
import superjump from '../assets/images/Superjump.png';
import writing from '../assets/images/writing.jpeg';
import sunset from '../assets/images/sunsetglow.jpg';

import Header_Desktop from '../components/Header_Desktop';
import Footer from '../components/Footer';

const Blogs = () => {
    return (
        <div className="App">
        <Header_Desktop />
        <section/>
            <div class="page-container">
                <div class="page-content">
                    <section>
                        <div class="container">
                            <div class="about-intro swin-panel mbsl mtsl">
                            <div class="row">
                                <div class="col-lg-4">
                                <div class="about-image mbl text-center"><img src={sunset} alt="alay" class="img-responsive"/></div>
                                <ul class="socials list-inline wg-social text-center mbm">
                                    <li><a href="https://www.instagram.com/jx.fufu/" class="swin-transition"><i class="swin-transition fa fa-instagram"></i></a></li>
                                    <li><a href="http://twitter.com/seykafu" class="swin-transition"><i class="swin-transition fa fa-twitter"></i></a></li>
                                    <li><a href="http://seykafu.medium.com" class="swin-transition"><i class="swin-transition fa fa-medium"></i></a></li>
                                    <li><a href="http://linkedin.com/in/kaseyfu" class="swin-transition"><i class="swin-transition fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.honeyfeed.fm/u/13655" class="swin-transition"><i class="swin-transition fa fa-book"></i></a></li>

                                </ul>
                                <p class="text-center"><a href="mailto:authorjxfu@gmail.com" class="swin-text-primary">authorjxfu@gmail.com</a></p>
                                </div>
                                <div class="col-lg-8">
                               
                                <p class="text-left">My writing endeavours cover three areas:
                                    <li>Product Management & Tech & The PM Hive Newsletter</li>
                                    <li>My upcoming non-fiction book about passion and career</li>
                                    <li>Game and Manga reviews on SUPERJUMP</li>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

        {/*}    
        <div class="section section-80">
            <div class="container">
            <div class="alay-sc-blog-list alay-sc-blog-slider style-interesting blog-slider-item-m-5">
                <div class="heading">
                <h6> <a href="https://seykafu.medium.com"> Product Management & Tech </a></h6>
                </div>
                <div data-slides="{&quot;slidesToScroll&quot;:&quot;1&quot;,&quot;slidesToShow&quot;:&quot;4&quot;,&quot;dots&quot;:&quot;false&quot;,&quot;arrows&quot;:&quot;true&quot;}" data-slides-md="{&quot;slidesToShow&quot;: &quot;2&quot;}" class="blog-slick">
                <div class="blog-item hover-dark"><a href="https://medium.com/uwaterloo-voice/one-year-after-obtaining-my-bachelors-3-lessons-i-learned-in-the-working-force-35cf761b5def"> <img src={aftercollege} alt="Medium Articles"/>
                    <h5 class="title">3 Lessons I learned from One Year Working After College</h5></a></div>
                <div class="blog-item hover-dark"><a href="https://seykafu.medium.com/3-realistic-tips-for-you-while-on-the-pm-job-hunt-76a54d7d250e" class="img-wrap"><img src="./assets/images/medium.jpeg" alt="Medium Articles"/>
                    <h5 class="title">3 Realistic Tips on the PM Job Hunt</h5></a></div>
                <div class="blog-item hover-dark"><a href="https://medium.com/uwaterloo-voice/how-to-combine-passion-with-work-as-a-knowledge-worker-the-hard-way-7169106df885" class="img-wrap"><img src="./assets/images/flowers_330x350.jpeg" alt="Medium Articles"/>
                    <h5 class="title">How to Combine Passion with Work, the HARD Way</h5></a></div>
                </div>
            </div>
            </div>
        </div>
        */}
        <div class="section-80">
            <div class="container">
            <div class="row">
                <div class="col-lg-9">
                <div class="alay-sc-blog-list style-vertical">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-item main-item blog-center">
                        <div class="img-wrap"><img src={writing} alt="Writing"/></div>
                        <div class="cat-heading">Upcoming Book</div><a href="https://medium.com/uwaterloo-voice/how-to-combine-passion-with-work-as-a-knowledge-worker-the-hard-way-7169106df885" class="title"> Finding a career while pursuing a passion for Gen Z.</a>
                        <p class="content">My upcoming book is about 5 key rules to ensure Gen Z chase their dream careers.</p>
                        <div class="block-footer">
                            <div class="item-left"><a href="https://medium.com/uwaterloo-voice/how-to-combine-passion-with-work-as-a-knowledge-worker-the-hard-way-7169106df885" class="readmore">KEEP READING...</a></div>
                            <div class="meta-infor box-right">
                            <div class="author item"><span class="pre">By</span><a href="about.html" class="text">Kasey Fu</a></div><a href="https://seykafu.medium.com/" class="date item"> Coming 2025</a>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        </div>
                    </div>
                    </div>
            
                </div>
                <div class="mbxxl d-block d-lg-none"></div>
                </div>
            
            </div>
            </div>
        </div>
        <div class="section-80">
            <div class="container">
            <div class="alay-sc-newsletter">
                <div class="newsletter-heading">
                <div class="title"><span>Sign up to receive updates on my books! </span></div>
                <div class="description" text>
                    You'll get exclusive details on my books, including being the first to be notified when they're ready!
                </div>
                </div>
                <div class="newsletter-form">
                <form>
                    <div class="form-group mb-0">
                    <input type="text" placeholder="Your Email ... " class="swin-form-control"/>
                    </div>
                    <button type="submit" class="btn swin-btn swin-btn-primary">Subcribe</button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <section/>
    <Footer />
    </div>
);
}

export default Blogs;