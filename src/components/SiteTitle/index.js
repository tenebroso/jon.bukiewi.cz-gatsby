import React from 'react'
import styles from './site-title.module.css'

const SiteTitle = () => (
  <h1 className={styles.title}>
    Jon Bukiewicz &bull;&nbsp;
    <span className={styles.subTitle}>
      Engineering Manager&nbsp;
    </span>
    <span className={styles.location}>
      &bull; Milwaukee, Wisconsin
    </span>
  </h1>
);

export default SiteTitle;
