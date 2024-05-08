// HomePage.js
import React from 'react';
import MainContent from '../components/MainContent';
import BottomContent from '../components/BottomContent';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <MainContent />
      <BottomContent />
      <Footer />
    </div>
  );
}

export default HomePage;