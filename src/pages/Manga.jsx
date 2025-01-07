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
import { Link } from 'react-router-dom';

const Manga = () => {
    return (
        <div>
            <Header_Desktop />
            <section>
                <div className="section-80">
                    <div className="container">
                        <div className="blog-footer">
                            <div className="blog-tags">
                            <ul className="list-inline mb-0">
                                <li><a href="action.html" className="swin-transition">#Action</a></li>
                                <li><a href="romance.html" className="swin-transition">#Romance</a></li>
                                <li><a href="drama.html" className="swin-transition">#Drama</a></li>
                                <li><a href="comedy.html" className="swin-transition">#Comedy</a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-xl-9 col-lg-8">
                        <div className="mbsl"></div>
                        <div className="alay-sc-blog-list style-horizontal">
                            <div className="blog-item sub-item mbl">
                                <div className="row">
                                    <div className="col-lg-5">
                                    <div className="item-image">
                                        <div className="img-wrap landscape"><img src={demonslayer} alt="Last Game"/></div>
                                    </div>
                                    </div>
                                    <div className="col-lg-7">
                                    <div className="item-desc">
                                    <div className="cat-heading">Action Reviews</div><Link to="/demon-slayer" className="title"> Demon Slayer by Gotouge Koyoharu- 8/10</Link>
                                        <p className="content">Many will complain with their hands in the air how this manga just didn't match the stellar production of its counterpart anime. Well...</p>
                                        <div className="block-footer">
                                        <div className="item-left"><Link to="/demon-slayer" className="readmore">KEEP READING...</Link></div>
                                        <div className="meta-infor box-right">
                                            <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu</a></div><a href="DS_Review.html" className="date item"> Oct 15, 2022</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                                <div className="row">
                                <div className="col-lg-5">
                                    <div className="item-image">
                                    <div className="img-wrap landscape"><img src={tanaka} alt="Last Game"/></div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="item-desc">
                                    <div className="cat-heading">Comedy Reviews</div><a href="tanaka_Review.html" className="title"> Tanaka-kun is Always Listless by Uda Nozomi - 8/10</a>
                                    <p className="content">This manga was enjoyable overall if you're looking for a fun, wholesome slice of life read.</p>
                                    <div className="block-footer">
                                        <div className="item-left"><a href="tanaka_Review.html" className="readmore">KEEP READING...</a></div>
                                        <div className="meta-infor box-right">
                                        <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu</a></div><a href="tanaka_Review.html" className="date item"> Apr 14, 2022</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                                <div className="row">
                                <div className="col-lg-5">
                                    <div className="item-image">
                                    <div className="img-wrap landscape"><img src={relife} alt="Last Game"/></div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="item-desc">
                                    <div className="cat-heading">Romance Reviews</div><a href="relife_Review.html" className="title"> ReLIFE by Yayoi Sou - 10/10</a>
                                    <p className="content">ReLIFE is an absolute special one in so many different ways.</p>
                                    <div className="block-footer">
                                        <div className="item-left"><a href="relife_Review.html" className="readmore">KEEP READING...</a></div>
                                        <div className="meta-infor box-right">
                                        <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu</a></div><a href="relife_Review.html" className="date item"> Oct 28, 2022</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                            <div className="row">
                                <div className="col-lg-5">
                                <div className="item-image">
                                    <div className="img-wrap landscape"><img src={lastgame} alt="Last Game"/></div>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="item-desc">
                                    <div className="cat-heading">Romance Reviews</div><a href="lastgame_Review.html" className="title"> Last Game by Amano Shinobu - 9/10</a>
                                    <p className="content">A manga which I personally feel is one of the most underrated of all-time - not just in the shoujo genre, but in all of romance, period.</p>
                                    <div className="block-footer">
                                    <div className="item-left"><a href="lastgame_Review.html" className="readmore">KEEP READING...</a></div>
                                    <div className="meta-infor box-right">
                                        <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu</a></div><a href="lastgame_Review.html" className="date item"> Oct 5, 2022</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                            <div className="row">
                                <div className="col-lg-5">
                                <div className="item-image">
                                    <div className="img-wrap landscape"><img src={uminomisaki} alt="KNIM"/></div>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="item-desc">
                                    <div className="cat-heading">Romance Reviews</div><a href="Umi_no_Misaki_Review.html" className="title"> Umi no Misaki by Fumizuki Kou - 8/10</a>
                                    <p className="content">For 7 straight years, this manga continued its magical run until it got its formidable climax and conclusion.</p>
                                    <div className="block-footer">
                                    <div className="item-left"><a href="Umi_no_Misaki_Review.html" className="readmore">KEEP READING...</a></div>
                                    <div className="meta-infor box-right">
                                        <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu </a></div><a href="Umi_no_Misaki_Review.html" className="date item"> Oct 1, 2022</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                            <div className="row">
                                <div className="col-lg-5">
                                <div className="item-image">
                                    <div className="img-wrap landscape"><img src={dnk} alt="KNIM"/></div>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="item-desc">
                                    <div className="cat-heading">Romance Reviews</div><a href="dnk_Review.html" className="title"> Domestic na Kanojo by Kei Sasuga- 7/10</a>
                                    <p className="content">What a premise it was, and was a plot it was, for the most part. Where do I even start?</p>
                                    <div className="block-footer">
                                    <div className="item-left"><a href="dnk_Review.html" className="readmore">KEEP READING...</a></div>
                                    <div className="meta-infor box-right">
                                        <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu </a></div><a href="dnk_Review.html" className="date item"> Jun 21, 2022</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                            <div className="row">
                                <div className="col-lg-5">
                                <div className="item-image">
                                    <div className="img-wrap landscape"><img src={halfies} alt="Half and Half"/></div>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="item-desc">
                                    <div className="cat-heading">Romance Reviews</div><a href="half&half_Review.html" className="title"> Half & Half by Seo Kouji - 9/10</a>
                                    <p className="content">I gave everything a 9/10 except for "Enjoyment" because I'm just too sad and unfulfilled to give this manga any higher.                            </p>
                                    <div className="block-footer">
                                    <div className="item-left"><a href="half&half_Review.html" className="readmore">KEEP READING...</a></div>
                                    <div className="meta-infor box-right">
                                        <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu</a></div><a href="half&half_Review.html" className="date item"> May 25, 2022</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                            <div className="row">
                                <div className="col-lg-5">
                                <div className="item-image">
                                    <div className="img-wrap landscape"><img src={fuuka} alt="Fuuka"/></div>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="item-desc">
                                    <div className="cat-heading">Romance Reviews</div><a href="fuuka_Review.html" className="title"> Fuuka by Seo Kouji - 8/10</a>
                                    <p className="content">Fuuka was an incredibly different yet refreshing sequel to Seo's Suzuka, and it bore both positive and negative aspects worth diving into.</p>
                                    <div className="block-footer">
                                    <div className="item-left"><a href="fuuka_Review.html" className="readmore">KEEP READING...</a></div>
                                    <div className="meta-infor box-right">
                                        <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu</a></div><a href="fuuka_Review.html" className="date item"> May 18, 2022</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                            <div className="row">
                                <div className="col-lg-5">
                                <div className="item-image">
                                    <div className="img-wrap landscape"><img src={suzuka} alt="Suzuka"/></div>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="item-desc">
                                    <div className="cat-heading">Romance Reviews</div><a href="Suzuka_Review.html" className="title"> Suzuka by Seo Kouji - 8/10</a>
                                    <p className="content">"There's no way I could like this manga, right? I mean c'mon...It's from the mid 2000s, and the reviews seem to be mixed!"</p>
                                    <div className="block-footer">
                                    <div className="item-left"><a href="Suzuka_Review.html" className="readmore">KEEP READING...</a></div>
                                    <div className="meta-infor box-right">
                                        <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu</a></div><a href="Suzuka_Review.html" className="date item"> May 8, 2022</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                            <div className="row">
                                <div className="col-lg-5">
                                <div className="item-image">
                                    <div className="img-wrap landscape"><img src={GE} alt="GE"/></div>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="item-desc">
                                    <div className="cat-heading">Romance Reviews</div><a href="GE_Review.html" className="title"> GE: Good Ending by Kei Sasuga - 8/10</a>
                                    <p className="content">(Spoiler Free) This manga was simply a wild ride with a satisfying (yet somewhat rushed) ending.</p>
                                    <div className="block-footer">
                                    <div className="item-left"><a href="GE_Review.html" className="readmore">KEEP READING...</a></div>
                                    <div className="meta-infor box-right">
                                        <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu</a></div><a href="GE_Review.html" className="date item"> May 3, 2022</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                                <div className="row">
                                    <div className="col-lg-5">
                                    <div className="item-image">
                                        <div className="img-wrap landscape"><img src={knim} alt="KNIM"/></div>
                                    </div>
                                    </div>
                                    <div className="col-lg-7">
                                    <div className="item-desc">
                                        <div className="cat-heading">Romance Reviews</div><a href="KNIM_Review.html" className="title"> Kimi no Iru Machi by Seo Kouji - 8/10</a>
                                        <p className="content">Before we dig into more of the details, I'm going to step back and say this: no matter the ups and downs throughout this manga...</p>
                                        <div className="block-footer">
                                        <div className="item-left"><a href="KNIM_Review.html" className="readmore">KEEP READING...</a></div>
                                        <div className="meta-infor box-right">
                                            <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu </a></div><a href="KNIM_Review.html" className="date item"> Apr 27, 2022</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-item sub-item mbl">
                                <div className="row">
                                <div className="col-lg-5">
                                    <div className="item-image">
                                    <div className="img-wrap landscape"><img src={kot} alt="Kono Oto Tomare!"/></div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="item-desc">
                                    <div className="cat-heading">Drama Reviews</div><a href="KOT_Review.html" className="title"> Kono Oto Tomare! by Sakura Amyuu - 10/10</a>
                                    <p className="content">This review only contains a few minor spoilers. Should be okay for those who haven't started yet.</p>
                                    <div className="block-footer">
                                        <div className="item-left"><a href="KOT_Review.html" className="readmore">KEEP READING...</a></div>
                                        <div className="meta-infor box-right">
                                        <div className="author item"><span className="pre">By</span><a href="about.html" className="text">J.X. Fu</a></div><a href="KOT_Review.html" className="date item"> Jan 21, 2022</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>
                    <div className="mbsl d-block d-lg-none"></div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="alay-sc-about-me sc-wg">
                            <div className="information">
                            <div className="title"><span>About Me</span></div>
                            <div className="avatar"><img src={seykafu} alt="Me"/></div>
                            <div className="author"><a href="about.html">J.X. Fu</a></div>
                            <div className="des">A writer, product manager, and manga reviewer!</div>
                            <ul className="socials list-inline">
                                <li><a href="https://www.instagram.com/jx.fufu/" className="swin-transition"><i className="swin-transition fa fa-instagram"></i></a></li>
                                <li><a href="http://twitter.com/jx_fufu" className="swin-transition"><i className="swin-transition fa fa-twitter"></i></a></li>
                                <li><a href="http://seykafu.medium.com" className="swin-transition"><i className="swin-transition fa fa-medium"></i></a></li>
                                <li><a href="https://www.honeyfeed.fm/u/13655" className="swin-transition"><i className="swin-transition fa fa-book"></i></a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="alay-sc-category sc-wg">
                            <div className="title"><span>Manga Review Genres</span></div>
                            <ul>
                            <li className="cat-item"><a href="comedy.html">Comedy</a> 1 </li>
                            <li className="cat-item"><a href="romance.html">Romance</a> 8 </li>
                            <li className="cat-item"><a href="action.html">Action</a> 0 </li>
                            <li className="cat-item"><a href="drama.html">Drama</a> 1 </li>
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