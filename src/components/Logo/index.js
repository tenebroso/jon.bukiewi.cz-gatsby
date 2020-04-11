import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SiteTitle from '../SiteTitle'
import styles from './logo.module.css'

const Logo = ({
  handleClick,
}) => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const toggleHovered = () => setIsLogoHovered(!isLogoHovered);
  const logoSvg = require('../../images/logo.svg');

  return (
    <div className={styles.container}>
      <button 
        className={[styles.link, isLogoHovered ? styles.isHovered : ''].join(' ')} 
        onClick={handleClick} 
        onMouseEnter={toggleHovered} 
        onMouseLeave={toggleHovered}>
        <img
          src={logoSvg} className={styles.logo}
          alt="Colophon Logo for Jon Bukiewicz's Personal Site"  
        />
      </button>
      <SiteTitle />
    </div>
  )
};

Logo.propTypes = {
  handleClick: PropTypes.func,
};

export default Logo;
