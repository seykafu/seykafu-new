import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/elements.css';
import './assets/css/widget.css';
import './assets/css/extra.css';
import './assets/css/responsive.css';
import './assets/vendors/bootstrap/css/bootstrap.min.css';
import './assets/vendors/font-awesome/css/font-awesome.min.css';
import './assets/fonts/font-icon/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <body class="sticky-enable dark-mode">
          <div id="pagewrap" class="pagewrap">
            <div class="col-lg-8">
              <Header />
                <div class="about-heading"><span class="heading-name">Kasey/JX Fu's Website!</span>
                  <span class="heading-job"><span>/</span><span>PM, Writer, and Game + Manga fanatic!</span></span></div>
                  <p>I'm a product manager, writer, aspiring entrepreneur, and game enthusiast (I like strategy and tactical RPG). I hold many interests and have worked on many side projects.</p>

                  <h4>What do I do?</h4>
                  <p>I'm a PM in the AI space. I was previously at Microsoft Bing, shipping AI models and features in their backend platform, and now I'm at Planview,
                    shipping a new AI copilot for its broad client base. In general, I'm interested in industries such as gaming, enterprise, and content creation.
                  </p>

                  <h4>My other projects</h4>
                <p>I'm a part-time writer & a published fiction author; my books include a YA Fantasy/Action titled <a href="https://www.amazon.com/dp/B0BJZXKMM9" 
                    class="title"><u>"Darkness Me, Colorful You"</u></a> and a RomCom light novel titled 
                    <a href="https://www.amazon.com/Corruptions-Are-Best-Exposed-Autumn-ebook/dp/B0BJ27R74M/ref=sr_1_1?crid=24XNNFKGALXA9&keywords=corruptions+are+best+exposed+in+the+autumn&qid=1665868843&qu=eyJxc2MiOiIwLjA2IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=corruptions+are+best+exposed+in+the+autumn%2Caps%2C133&sr=8-1"> <u>"Corruptions Are Best Exposed In The Autumn!"</u>
                    </a>
                </p>
                
                  <h4>My Background</h4>
                    <p>Before diving into writing and PM work, I graduated with a Bachelor's of Science in Science and Business from the University of Waterloo.
                      I've completed many internships in product before graduating. I've been involved in many activities - you can see them all here. 
                    </p>
                  Here, you'll find more about me, my <a href= "https://seykafu.medium.com"> <u>Medium blog</u></a>, <a href="books.html"> <u>my books</u></a>, and my <a href="manga_reviews.html"> <u>manga review blog</u></a>!
                </div>
          </div>
        </body>
        <Footer />
      </header>
    </div>
  );
}

export default App;
