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
import seykafu from '../assets/images/seykafu.jpg';
import demonslayer from '../assets/images/manga reviews/demonslayer.webp';
import tanaka from '../assets/images/manga reviews/tanaka.jpeg';
import relife from '../assets/images/manga reviews/relifecover2.jpg';
import lastgame from '../assets/images/manga reviews/lastgame.jpg';
import uminomisaki from '../assets/images/manga reviews/uminomisaki.jpeg';
import dnk from '../assets/images/manga reviews/dnk.jpeg';
import halfies from '../assets/images/manga reviews/halfies.jpg';
import fuuka from '../assets/images/manga reviews/fuuka.jpeg';
import suzuka from '../assets/images/manga reviews/suzuka.jpeg';
import GE from '../assets/images/manga reviews/GE.jpeg';
import knim from '../assets/images/manga reviews/knim.jpeg';
import kot from '../assets/images/manga reviews/kono_oto_tomare.jpeg';
import Header_Desktop from '../components/Header_Desktop';
import Footer from '../components/Footer';

const Manga = () => {
    return (
        <div>
            <Header_Desktop />
            <section>
                <div class="section-80">
                    <div class="container">
                        <div class="blog-footer">
                            <div class="blog-tags">
                            <ul class="list-inline mb-0">
                                <li><a href="action.html" class="swin-transition">#Action</a></li>
                                <li><a href="romance.html" class="swin-transition">#Romance</a></li>
                                <li><a href="drama.html" class="swin-transition">#Drama</a></li>
                                <li><a href="comedy.html" class="swin-transition">#Comedy</a></li>
                            </ul>
                            </div>
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
                            <div class="blog-item sub-item mbl">
                            <div class="row">
                                <div class="col-lg-5">
                                <div class="item-image">
                                    <div class="img-wrap landscape"><img src={halfies} alt="Half and Half"/></div>
                                </div>
                                </div>
                                <div class="col-lg-7">
                                <div class="item-desc">
                                    <div class="cat-heading">Romance Reviews</div><a href="half&half_Review.html" class="title"> Half & Half by Seo Kouji - 9/10</a>
                                    <p class="content">I gave everything a 9/10 except for "Enjoyment" because I'm just too sad and unfulfilled to give this manga any higher.                            </p>
                                    <div class="block-footer">
                                    <div class="item-left"><a href="half&half_Review.html" class="readmore">KEEP READING...</a></div>
                                    <div class="meta-infor box-right">
                                        <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="half&half_Review.html" class="date item"> May 25, 2022</a>
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
                                    <div class="img-wrap landscape"><img src={fuuka} alt="Fuuka"/></div>
                                </div>
                                </div>
                                <div class="col-lg-7">
                                <div class="item-desc">
                                    <div class="cat-heading">Romance Reviews</div><a href="fuuka_Review.html" class="title"> Fuuka by Seo Kouji - 8/10</a>
                                    <p class="content">Fuuka was an incredibly different yet refreshing sequel to Seo's Suzuka, and it bore both positive and negative aspects worth diving into.</p>
                                    <div class="block-footer">
                                    <div class="item-left"><a href="fuuka_Review.html" class="readmore">KEEP READING...</a></div>
                                    <div class="meta-infor box-right">
                                        <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="fuuka_Review.html" class="date item"> May 18, 2022</a>
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
                                    <div class="img-wrap landscape"><img src={suzuka} alt="Suzuka"/></div>
                                </div>
                                </div>
                                <div class="col-lg-7">
                                <div class="item-desc">
                                    <div class="cat-heading">Romance Reviews</div><a href="Suzuka_Review.html" class="title"> Suzuka by Seo Kouji - 8/10</a>
                                    <p class="content">"There's no way I could like this manga, right? I mean c'mon...It's from the mid 2000s, and the reviews seem to be mixed!"</p>
                                    <div class="block-footer">
                                    <div class="item-left"><a href="Suzuka_Review.html" class="readmore">KEEP READING...</a></div>
                                    <div class="meta-infor box-right">
                                        <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="Suzuka_Review.html" class="date item"> May 8, 2022</a>
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
                                    <div class="img-wrap landscape"><img src={GE} alt="GE"/></div>
                                </div>
                                </div>
                                <div class="col-lg-7">
                                <div class="item-desc">
                                    <div class="cat-heading">Romance Reviews</div><a href="GE_Review.html" class="title"> GE: Good Ending by Kei Sasuga - 8/10</a>
                                    <p class="content">(Spoiler Free) This manga was simply a wild ride with a satisfying (yet somewhat rushed) ending.</p>
                                    <div class="block-footer">
                                    <div class="item-left"><a href="GE_Review.html" class="readmore">KEEP READING...</a></div>
                                    <div class="meta-infor box-right">
                                        <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="GE_Review.html" class="date item"> May 3, 2022</a>
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
                                        <div class="img-wrap landscape"><img src={knim} alt="KNIM"/></div>
                                    </div>
                                    </div>
                                    <div class="col-lg-7">
                                    <div class="item-desc">
                                        <div class="cat-heading">Romance Reviews</div><a href="KNIM_Review.html" class="title"> Kimi no Iru Machi by Seo Kouji - 8/10</a>
                                        <p class="content">Before we dig into more of the details, I'm going to step back and say this: no matter the ups and downs throughout this manga...</p>
                                        <div class="block-footer">
                                        <div class="item-left"><a href="KNIM_Review.html" class="readmore">KEEP READING...</a></div>
                                        <div class="meta-infor box-right">
                                            <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu </a></div><a href="KNIM_Review.html" class="date item"> Apr 27, 2022</a>
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
                                    <div class="img-wrap landscape"><img src={kot} alt="Kono Oto Tomare!"/></div>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="item-desc">
                                    <div class="cat-heading">Drama Reviews</div><a href="KOT_Review.html" class="title"> Kono Oto Tomare! by Sakura Amyuu - 10/10</a>
                                    <p class="content">This review only contains a few minor spoilers. Should be okay for those who haven't started yet.</p>
                                    <div class="block-footer">
                                        <div class="item-left"><a href="KOT_Review.html" class="readmore">KEEP READING...</a></div>
                                        <div class="meta-infor box-right">
                                        <div class="author item"><span class="pre">By</span><a href="about.html" class="text">J.X. Fu</a></div><a href="KOT_Review.html" class="date item"> Jan 21, 2022</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>
                    <div class="mbsl d-block d-lg-none"></div>
                    </div>
                    <div class="col-12 col-lg-4 col-xl-3">
                        <div class="alay-sc-about-me sc-wg">
                            <div class="information">
                            <div class="title"><span>About Me</span></div>
                            <div class="avatar"><img src={seykafu} alt="Me"/></div>
                            <div class="author"><a href="about.html">J.X. Fu</a></div>
                            <div class="des">A writer, product manager, and manga reviewer!</div>
                            <ul class="socials list-inline">
                                <li><a href="https://www.instagram.com/jx.fufu/" class="swin-transition"><i class="swin-transition fa fa-instagram"></i></a></li>
                                <li><a href="http://twitter.com/jx_fufu" class="swin-transition"><i class="swin-transition fa fa-twitter"></i></a></li>
                                <li><a href="http://seykafu.medium.com" class="swin-transition"><i class="swin-transition fa fa-medium"></i></a></li>
                                <li><a href="https://www.honeyfeed.fm/u/13655" class="swin-transition"><i class="swin-transition fa fa-book"></i></a></li>
                            </ul>
                            </div>
                        </div>
                        <div class="alay-sc-category sc-wg">
                            <div class="title"><span>Manga Review Genres</span></div>
                            <ul>
                            <li class="cat-item"><a href="comedy.html">Comedy</a> 1 </li>
                            <li class="cat-item"><a href="romance.html">Romance</a> 8 </li>
                            <li class="cat-item"><a href="action.html">Action</a> 0 </li>
                            <li class="cat-item"><a href="drama.html">Drama</a> 1 </li>
                            </ul>
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
export default Manga;