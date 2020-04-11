import React from 'react'
import styles from './site-title.module.css'

const SiteTitle = () => (
  <h1 className={styles.title}>
    Jon Bukiewicz &bull;&nbsp;
    <span className={styles.subTitle}>
      Web Solutions Engineer&nbsp;
    </span>
    <span className={styles.location}>
      &bull; Chicago, Illinois
    </span>
  </h1>
);

export default SiteTitle;
