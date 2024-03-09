import React from "react";
import styles from "../styles/homepage.less";
import bgImg from "../assets/background.jpg";
import selfIntroduction from '../const/self-introduction';

export default function Homepage() {
  console.log(styles);

  return (
    <div className={styles.container}>
      <img className={styles.background} src={bgImg} alt="bg" />
      <div className={styles.contentContainer}>
        <div className={styles.iconContainer} />
        <div className={styles.textContainer}>
          <p>WELCOME TO MY WORLD</p>
          <h1>
            Hi, I'm <span className={styles.target}>Sean Tang</span>
          </h1>
          <h1>a Frontend Developer.</h1>
          <p>
            {selfIntroduction}
          </p>
        </div>
      </div>
    </div>
  );
}
