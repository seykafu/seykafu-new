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
import gamedev from '../assets/images/gamedev.jpeg';
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
                                    <li><a href="http://twitter.com/jx_fufu" class="swin-transition"><i class="swin-transition fa fa-twitter"></i></a></li>
                                    <li><a href="http://seykafu.medium.com" class="swin-transition"><i class="swin-transition fa fa-medium"></i></a></li>
                                    <li><a href="http://linkedin.com/in/kaseyfu" class="swin-transition"><i class="swin-transition fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.honeyfeed.fm/u/13655" class="swin-transition"><i class="swin-transition fa fa-book"></i></a></li>

                                </ul>
                                <p class="text-center"><a href="mailto:authorjxfu@gmail.com" class="swin-text-primary">authorjxfu@gmail.com</a></p>
                                </div>
                                <div class="col-lg-8">
                                <div class="about-heading"><span class="heading-name">J.X. Fu</span><span class="heading-job"><span>/</span><span>Product Manager, Writer, & Manga Fanatic!</span></span></div>
                                <p>I'm a product manager at Planview AI, and was previously on Microsoft Bing AI. I'm also a blogger. Here you'll find links to my non-fiction blogs on Medium, focusing on:
                                    <li>Product Management & Tech</li>
                                    <li>Developing Writing Skills</li>
                                    <li>Career & Life Advice For Early Professionals</li>
                                    Here, you'll find more about me, my <a href= "https://seykafu.medium.com"> <u> Medium blog </u></a> , <a href="books.html"> <u> my books </u> </a>, and my <a href="https://seykafu.notion.site/seykafu/Seykafu-a8fda5021a274d82af74341b9a4a9f2e"> <u> projects </u> </a>!
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>


        <div class="section section-80">
            <div class="container">
            <div class="alay-sc-blog-list alay-sc-blog-slider style-interesting blog-slider-item-m-5">
                <div class="heading">
                <h6> <a href="https://seykafu.medium.com"> I Write Medium Articles! </a></h6>
                </div>
                <div data-slides="{&quot;slidesToScroll&quot;:&quot;1&quot;,&quot;slidesToShow&quot;:&quot;4&quot;,&quot;dots&quot;:&quot;false&quot;,&quot;arrows&quot;:&quot;true&quot;}" data-slides-md="{&quot;slidesToShow&quot;: &quot;2&quot;}" class="blog-slick">
                <div class="blog-item hover-dark"><a href="https://seykafu.medium.com/product-manager-vs-technical-program-manager-vs-producer-17519ff5aee5" class="img-wrap"><img src="./assets/images_/pm_330x350.jpeg" alt="Medium Articles"/>
                    <h5 class="title">Product vs TPM vs Producer </h5></a></div>
                <div class="blog-item hover-dark"><a href="https://medium.com/uwaterloo-voice/one-year-after-obtaining-my-bachelors-3-lessons-i-learned-in-the-working-force-35cf761b5def" class="img-wrap"><img src="./assets/images_/meaftercollege copy.jpeg" alt="Medium Articles"/>
                    <h5 class="title">3 Lessons I learned from One Year Working After College</h5></a></div>
                <div class="blog-item hover-dark"><a href="https://seykafu.medium.com/3-realistic-tips-for-you-while-on-the-pm-job-hunt-76a54d7d250e" class="img-wrap"><img src="./assets/images_/medium.jpeg" alt="Medium Articles"/>
                    <h5 class="title">3 Realistic Tips on the PM Job Hunt</h5></a></div>
                <div class="blog-item hover-dark"><a href="https://medium.com/uwaterloo-voice/how-to-combine-passion-with-work-as-a-knowledge-worker-the-hard-way-7169106df885" class="img-wrap"><img src="./assets/images_/flowers_330x350.jpeg" alt="Medium Articles"/>
                    <h5 class="title">How to Combine Passion with Work, the HARD Way</h5></a></div>
                <div class="blog-item hover-dark"><a href="https://medium.com/uwaterloo-voice/should-you-relocate-for-a-career-while-being-in-a-relationship-1249fab2662b" class="img-wrap"><img src="./assets/images_/passion copy.jpeg" alt="Medium Articles"/>
                    <h5 class="title">Should You Relocate for a Career During a Relationship?</h5></a></div>
                </div>
            </div>
            </div>
        </div>

        <div class="section-80">
            <div class="container">
            <div class="row">
                <div class="col-lg-9">
                <div class="alay-sc-blog-list style-vertical">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-item main-item blog-center">
                        <div class="img-wrap"><img src={writing} alt="Writing"/></div>
                        <div class="cat-heading">Medium Articles</div><a href="https://seykafu.medium.com/want-to-become-a-writer-here-are-tips-and-tricks-to-get-started-4f0cafa0a236" class="title"> Want to become a writer? Here are tips and tricks to get started!</a>
                        <p class="content">Due to a busy day job, school, or whatever it is, here is how you can make time.</p>
                        <div class="block-footer">
                            <div class="item-left"><a href="news-detail.html" class="readmore">KEEP READING...</a></div>
                            <div class="meta-infor box-right">
                            <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="https://seykafu.medium.com/" class="date item"> Sept 19, 2022</a>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                        <div class="blog-item sub-item blog-center">
                        <div class="img-wrap"><img src="./assets/images/meaftercollege.jpeg" alt="Me After College"/></div>
                        <div class="cat-heading">Advice Articles</div><a href="https://seykafu.medium.com/becoming-career-ready-5-pragmatic-steps-a-recent-grad-must-take-75d60d1fbdf5" class="title"> How to Become Career Ready</a>
                        <p class="content">Here are 5 KEY STEPS that a recent grad must take while walking into life-after-college!</p>
                        <div class="block-footer">
                            <div class="meta-infor">
                            <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="https://seykafu.medium.com/" class="date item"> June 2, 2021</a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="blog-item sub-item blog-center">
                        <div class="img-wrap"><img src={gamedev} alt="Game Dev"/></div>
                        <div class="cat-heading">Advice Articles</div><a href="https://seykafu.medium.com/what-exactly-is-game-development-in-the-cloud-89ae05adb5e7" class="title"> What exactly is 'Game Development in the Cloud?'</a>
                        <p class="content">It’s a sophisticated yet simple system of services...</p>
                        <div class="block-footer">
                            <div class="meta-infor">
                            <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="https://seykafu.medium.com" class="date item"> May 15, 2021</a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="mbxxl d-block d-lg-none"></div>
                </div>
                <div class="col-lg-3">
                <div class="alay-sc-recent-post sc-wg">
                    <div class="title"><span>Recent Posts</span></div>
                    <div class="content">
                    <div class="blog-item">
                        <div class="media"><img src="./assets/images/pm_330x350.jpeg" alt="PM" class="mr-3"/>
                        <div class="media-body">
                            <h6 class="title mt-0"><a href="https://medium.com/uwaterloo-voice/one-year-after-obtaining-my-bachelors-3-lessons-i-learned-in-the-working-force-35cf761b5def">Product vs TPM vs Producer </a></h6><span class="date">Oct 8, 2022</span>
                        </div>
                        </div>
                    </div>
                    <div class="blog-item">
                        <div class="media"><img src="./assets/images_/meaftercollege.jpeg" alt="Me after college" class="mr-3"/>
                        <div class="media-body">
                            <h6 class="title mt-0"><a href="https://medium.com/uwaterloo-voice/one-year-after-obtaining-my-bachelors-3-lessons-i-learned-in-the-working-force-35cf761b5def">3 Lessons I Learned Working 1 Year After College</a></h6><span class="date">Oct 4, 2022</span>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                
                {/* <div class="alay-sc-image block-center sc-wg"><img src="./assets/images/ad.jpg" alt="Alay"></div/> */}
                
                </div>
            </div>
            </div>
        </div>
        <div class="section-80">
            <div class="container">
            <div class="alay-sc-newsletter">
                <div class="newsletter-heading">
                <div class="title"><span>Sign up to receive updates on my books! </span></div>
                <div class="description">
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