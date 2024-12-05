import React from "react"
import PropTypes from "prop-types"

const Footer = props => (
  <footer className="bottom">
   <p>©Coal Miner's Kicthen. All images were lisense from Adobe Stock or personally taken images.</p>
  </footer>
);

Footer.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Footer;
