import React, { useState } from "react"
import styles from './header.module.css'

import Logo from '../Logo';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => setIsActive(!isActive);
  const headerClasses = [styles.header, isActive ? styles.activeHeader : ''];

  return (
    <header
      className={headerClasses.join(' ')}
    >
    <div className={styles.pullDown}>
      <button
        onClick={toggleIsActive}
        className="header-close"
      >
        <div className="close-btn">
          <span></span>
        </div>
      </button>
    </div>
    <Logo
      handleClick={toggleIsActive}
    />
  </header>
  )
};

export default Header;
