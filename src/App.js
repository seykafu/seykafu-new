import React from 'react';
import logo from './logo.svg';
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
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/Main_Content';
import BottomContent from './components/Bottom_Content';
import Books from './pages/Books';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header" style={{ backgroundColor: '#121212' }}>
          <body class="sticky-enable dark-mode">
            <div id="pagewrap" class="pagewrap">
              <div id="html-content" class="wrapper-content">
              
                <Header />
                <Routes>
                <Route path="/" element={<HomePage />} />
                  <Route path="/books" element={<Books />} />
                  {/* Add more routes as needed */}
                </Routes>
              </div>
            </div>
          </body>
          <Footer />
        </header>
      </div>

  </Router>
  );
}

export default App;
