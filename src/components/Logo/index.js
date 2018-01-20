import React from 'react'
import SiteTitle from '../SiteTitle'
import styles from './logo.module.css'

const logoSvg = require('./logo.svg');

const Logo = () => (
	<div className={styles.container}>
		<a className={styles.link}>
			<img src={logoSvg} className={styles.logo} />
		</a>
		<SiteTitle />
	</div>
)

export default Logo
