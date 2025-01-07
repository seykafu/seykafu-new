// MainContent.js
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
import OreoandI from '../assets/images/Oreo and I.jpg';

function MainContent() {
  return (
    <div>
      <section>
              <div class="container">
                <div class="about-intro swin-panel mbsl mtsl">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="about-image mbl text-center"><img src={OreoandI} alt="Kasey Fu" class="img-responsive"/></div>
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
                      <div class="about-heading"><span class="heading-name">Kasey/JX Fu's Website!</span>
                        <span class="heading-job"><span>/</span><span>PM, Writer, Community Builder</span></span></div>
                        <p>I'm a product manager, writer, author, and community builder. I'm the co-founder of PM Hive, Vancouver's PM community.</p>

                        <h4>My main focus </h4>
                        <p>During the day, I'm a PM in the AI space. I was previously at Microsoft Bing, shipping AI models and features in their backend platform. Now I'm at Planview,
                          shipping a new AI assistant for its broad range of F500 customers. On the side, I write articles for various publications such as Product Coalition, Bootcamp, and SUPERJUMP. I'm also a published
                          fiction author and currently working on a non-fiction book. I'm interested in industries such as gaming, enterprise, and content creation.
                        </p>

                        <h4>My other projects</h4>
                        <p>I'm a part-time writer & a published fiction author; my books include a YA Fantasy/Action titled <a href="https://www.amazon.com/dp/B0BJZXKMM9" 
                          class="title"><u>"Darkness Me, Colorful You"</u></a> and a RomCom light novel titled <a href="https://www.amazon.com/Corruptions-Are-Best-Exposed-Autumn-ebook/dp/B0BJ27R74M/ref=sr_1_1?crid=24XNNFKGALXA9&keywords=corruptions+are+best+exposed+in+the+autumn&qid=1665868843&qu=eyJxc2MiOiIwLjA2IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=corruptions+are+best+exposed+in+the+autumn%2Caps%2C133&sr=8-1"> <u>"Corruptions Are Best Exposed In The Autumn!"</u>
                          </a>
                        </p>
                      
                          <h4>My Background</h4>
                          <p>Before diving into writing and PM work, I graduated with a Bachelor's of Science in Science and Business from the University of Waterloo.
                            I've completed many internships in product before graduating. 
                          </p>
                        Here, you'll find more about me, my <a href= "https://seykafu.medium.com"> <u>Medium blog</u></a>, <a href="books.html"> <u>my books</u></a>, and my <a href="manga_reviews.html"> <u>manga review blog</u></a>!
                    </div>
                  </div>
                </div>
              </div>
        </section>
    </div>
  );
}

export default MainContent;