/**
 * Name: Tamara Slone
 * Date: 12/3/24
 * Description: This is the component that holds the code for my about page.  
 */
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
              Appalachia refers to a culturally rich region of the United States, stretching along the Appalachian Mountains. Known for its breathtaking landscapes, hearty traditions, and unique history, Appalachia encompasses parts of 13 states, including Kentucky, West Virginia, Virginia, and Tennessee. The region is renowned for its deep ties to folk music, with bluegrass and country genres having their roots in the mountains. Appalachian culture is also marked by a strong sense of community, resilience, and a rich heritage of storytelling, crafts, and food traditions. Despite facing economic challenges and historical hardships, the people of Appalachia have preserved a way of life that reflects pride, perseverance, and a deep connection to the land.
              </p>
            </div>
          </div>

          <div className="text-container">
            <h2>Why the Coal Miner's Cookbook?</h2>
            <p>
            The Coal Miner’s Cookbook is a tribute to the hardworking men and women of Appalachia, celebrating their resilience and resourcefulness in the face of adversity. Many of the recipes featured in the cookbook have been passed down through generations, rooted in the region’s rich history of coal mining and the hardworking families that relied on simple, hearty meals to fuel their demanding days. These dishes reflect the spirit of Appalachian kitchens, where meals are crafted with love, often using locally sourced ingredients, and are shared with family and neighbors as a way to bond and strengthen community ties. The cookbook captures the essence of Appalachian culture, preserving both the flavors and the stories of those who have shaped the region’s past and continue to define its future.
            </p>
          </div>
        </div>
      </div>
      <Footer tagline="Recipes from the heart of Appalachia" />
    </>
  );
  
export default AboutPage;

