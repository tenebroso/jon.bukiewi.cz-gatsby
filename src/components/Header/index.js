import React from 'react'
import Logo from '../Logo'
import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.pullDown}>
      Stuff in here.
    </div>
    <Logo />
  </header>
)

export default Header
