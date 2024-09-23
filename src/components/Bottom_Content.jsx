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
import dmcy from '../assets/images/My Books/dmcyu_.jpeg';
import medium from '../assets/images/writing.jpeg';
import msft from '../assets/images/msft.jpeg';

function BottomContent() {
  return (
          <div className="section-80">
            <div className="container">
              <div className="alay-sc-blog-list-cat style-cover">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <div className="cat-item"><a href="books.html" className="img-wrap"><img src={dmcy} alt="Books"/>
                        <h2 className="heading">My Books</h2></a></div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="cat-item"><a href="writing.html" className="img-wrap"><img src={medium} alt="Writing"/>
                        <h2 className="heading">My Articles & Blogs</h2></a></div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="cat-item"><a href="https://seykafu.notion.site/Seykafu-a8fda5021a274d82af74341b9a4a9f2e" className="img-wrap"><img src={msft} alt="Product"/>
                        <h2 className="heading">Product Work</h2></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}

export default BottomContent