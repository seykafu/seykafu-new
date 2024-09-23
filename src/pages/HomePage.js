// HomePage.js
import React from 'react';
import MainContent from '../components/Main_Content';
import BottomContent from '../components/Bottom_Content';
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