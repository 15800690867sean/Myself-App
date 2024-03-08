import React from 'react';
import styles from '../styles/homepage.less';
import bgImg from '../assets/Sydney.jpg';

export default function Homepage() {
  console.log(styles)

  return (
    <div className={styles.container}>
      <img className={styles.background} src={bgImg} alt="bg" />
      <div className={styles.contentContainer}>
        <div className={styles.iconContainer} />
        <div className={styles.textContainer}>
          <h1>Hello, I'm <span className={styles.target}>Sean Tang</span></h1>
          <h1>a Frontend Developer.</h1>
        </div>
      </div>
    </div>
  )
}
