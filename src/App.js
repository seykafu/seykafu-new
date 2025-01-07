import React from 'react';
import './App.css';
import './assets/vendors/bootstrap/css/bootstrap.min.css';
import './assets/vendors/font-awesome/css/font-awesome.min.css';
import './assets/vendors/slick/slick.min.css';
import './assets/vendors/slick/slick-theme.min.css';
import './assets/vendors/animate.min.css';
import './assets/vendors/magnific-popup/magnific-popup.css';
import './assets/vendors/bootstrap-datepicker/css/bootstrap-datepicker.min.css';
import './assets/vendors/fullscreen-overlay/css/style5.css';
import './assets/vendors/lightbox/css/lightbox.min.css';
import './assets/fonts/font-icon/style.css';
import './assets/css/layout.css';
import './assets/css/elements.css';
import './assets/css/shortcode.css';
import './assets/css/widget.css';
import './assets/css/extra.css';
import './assets/css/responsive.css';
import HomePage from './pages/HomePage';
import Books from './pages/Books';
import Blogs from './pages/Blogs';
import Manga from './pages/Manga';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DemonSlayer from './pages/manga/DS';

function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header" style={{ backgroundColor: '#121212' }}>
          <body class="sticky-enable dark-mode">
            <div id="pagewrap" class="pagewrap">
              <div id="html-content" class="wrapper-content">
              
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/blog" element={<Blogs />} />
                    <Route path="/manga" element={<Manga />} />
                    <Route path="/demon-slayer" element={<DemonSlayer />} />
                      {/* Add more routes as needed */}
                  </Routes>
              </div>
              
            </div>
            
          </body>
        </header>
      </div>

  </Router>
  );
}

export default App;
