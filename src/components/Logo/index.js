import React from 'react'
import styles from './logo.module.css'

const logoSvg = require('./logo.svg');

const Logo = () => (
  <a className={styles.link}>
	<img src={logoSvg} className={styles.logo} />
  </a>
)

export default Logo
