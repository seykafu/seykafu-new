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
import Footer from '../components/Footer';
import Header_Desktop from '../components/Header_Desktop';
import seykafu from '../assets/images/seykafu.jpeg';

function Projects() {
  return (
    <div>
    <Header_Desktop />
    <section>
        <div class="section-80">
            <div class="container">
                <div class="blog-footer">
                </div>
                <div class="row">
                <div class="col-xl-9 col-lg-8">
                <div class="mbsl"></div>
                <div class="alay-sc-blog-list style-horizontal">
                    <div class="blog-item sub-item mbl">
                        <div class="row">
                            <div class="col-lg-5">
                            <div class="item-image">
                                <div class="img-wrap landscape"><img src={demonslayer} alt="Last Game"/></div>
                            </div>
                            </div>
                            <div class="col-lg-7">
                            <div class="item-desc">
                                <div class="cat-heading">Action Reviews</div><a href="DS_Review.html" class="title"> Demon Slayer by Gotouge Koyoharu- 8/10</a>
                                <p class="content">Many will complain with their hands in the air how this manga just didn't match the stellar production of its counterpart anime. Well...</p>
                                <div class="block-footer">
                                <div class="item-left"><a href="DS_Review.html" class="readmore">KEEP READING...</a></div>
                                <div class="meta-infor box-right">
                                    <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="DS_Review.html" class="date item"> Oct 15, 2022</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-item sub-item mbl">
                        <div class="row">
                        <div class="col-lg-5">
                            <div class="item-image">
                            <div class="img-wrap landscape"><img src={tanaka} alt="Last Game"/></div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="item-desc">
                            <div class="cat-heading">Comedy Reviews</div><a href="tanaka_Review.html" class="title"> Tanaka-kun is Always Listless by Uda Nozomi - 8/10</a>
                            <p class="content">This manga was enjoyable overall if you're looking for a fun, wholesome slice of life read.</p>
                            <div class="block-footer">
                                <div class="item-left"><a href="tanaka_Review.html" class="readmore">KEEP READING...</a></div>
                                <div class="meta-infor box-right">
                                <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="tanaka_Review.html" class="date item"> Apr 14, 2022</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="blog-item sub-item mbl">
                        <div class="row">
                        <div class="col-lg-5">
                            <div class="item-image">
                            <div class="img-wrap landscape"><img src={relife} alt="Last Game"/></div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="item-desc">
                            <div class="cat-heading">Romance Reviews</div><a href="relife_Review.html" class="title"> ReLIFE by Yayoi Sou - 10/10</a>
                            <p class="content">ReLIFE is an absolute special one in so many different ways.</p>
                            <div class="block-footer">
                                <div class="item-left"><a href="relife_Review.html" class="readmore">KEEP READING...</a></div>
                                <div class="meta-infor box-right">
                                <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="relife_Review.html" class="date item"> Oct 28, 2022</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="blog-item sub-item mbl">
                    <div class="row">
                        <div class="col-lg-5">
                        <div class="item-image">
                            <div class="img-wrap landscape"><img src={lastgame} alt="Last Game"/></div>
                        </div>
                        </div>
                        <div class="col-lg-7">
                        <div class="item-desc">
                            <div class="cat-heading">Romance Reviews</div><a href="lastgame_Review.html" class="title"> Last Game by Amano Shinobu - 9/10</a>
                            <p class="content">A manga which I personally feel is one of the most underrated of all-time - not just in the shoujo genre, but in all of romance, period.</p>
                            <div class="block-footer">
                            <div class="item-left"><a href="lastgame_Review.html" class="readmore">KEEP READING...</a></div>
                            <div class="meta-infor box-right">
                                <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="lastgame_Review.html" class="date item"> Oct 5, 2022</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="blog-item sub-item mbl">
                    <div class="row">
                        <div class="col-lg-5">
                        <div class="item-image">
                            <div class="img-wrap landscape"><img src={uminomisaki} alt="KNIM"/></div>
                        </div>
                        </div>
                        <div class="col-lg-7">
                        <div class="item-desc">
                            <div class="cat-heading">Romance Reviews</div><a href="Umi_no_Misaki_Review.html" class="title"> Umi no Misaki by Fumizuki Kou - 8/10</a>
                            <p class="content">For 7 straight years, this manga continued its magical run until it got its formidable climax and conclusion.</p>
                            <div class="block-footer">
                            <div class="item-left"><a href="Umi_no_Misaki_Review.html" class="readmore">KEEP READING...</a></div>
                            <div class="meta-infor box-right">
                                <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu </a></div><a href="Umi_no_Misaki_Review.html" class="date item"> Oct 1, 2022</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="blog-item sub-item mbl">
                    <div class="row">
                        <div class="col-lg-5">
                        <div class="item-image">
                            <div class="img-wrap landscape"><img src={dnk} alt="KNIM"/></div>
                        </div>
                        </div>
                        <div class="col-lg-7">
                        <div class="item-desc">
                            <div class="cat-heading">Romance Reviews</div><a href="dnk_Review.html" class="title"> Domestic na Kanojo by Kei Sasuga- 7/10</a>
                            <p class="content">What a premise it was, and was a plot it was, for the most part. Where do I even start?</p>
                            <div class="block-footer">
                            <div class="item-left"><a href="dnk_Review.html" class="readmore">KEEP READING...</a></div>
                            <div class="meta-infor box-right">
                                <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu </a></div><a href="dnk_Review.html" class="date item"> Jun 21, 2022</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </section>
    <Footer />
</div>
);
}


export default Projects;