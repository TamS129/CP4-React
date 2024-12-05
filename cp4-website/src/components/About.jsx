
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/about.css';
const AboutPage = () => (
      <>
      <Header tagline="Recipes from the heart of Appalachia" />
      <div className="aboutPage-container">
        <div className="aboutPage">
          <div className="text-image-container">
            <div className="image-section">
              <img
                src="../images/map.png"
                alt="Map showcasing where the Appalachian mountains are located."
              />
            </div>
            <div className="text-section">
              <h2>Appalachia? What's that?</h2>
              <p>
                Appalachia refers to a culturally rich region of the United States, stretching
                along the Appalachian Mountains. Known for its breathtaking landscapes, hearty
                traditions, and unique history, Appalachia encompasses parts of 13 states, including
                Kentucky, West Virginia, Virginia, and Tennessee...
              </p>
            </div>
          </div>

          <div className="text-container">
            <h2>Why the Coal Miner's Cookbook?</h2>
            <p>
              The Coal Miner’s Cookbook is a tribute to the hardworking men and women of Appalachia...
            </p>
          </div>
        </div>
      </div>
      <Footer tagline="Recipes from the heart of Appalachia" />
    </>
  );
  
export default AboutPage;

