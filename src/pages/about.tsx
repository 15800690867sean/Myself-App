import React from "react";
import bgImg from "../assets/wall.jpeg";
import styles from "../styles/about.less";
import CardItem from "../components/card-item";
import education from "../const/education";
import experience from "../const/experience";

export default function About() {
  return (
    <div className={styles.container}>
      <img src={bgImg} alt="background" className={styles.background} />
      <div className={styles.contentContainer}>
        <CardItem
          type={"summary"}
          info={
            "Results-driven Front-End Developer with 2+ years of hands-on experience in front-end development. Proficient in JavaScript, TypeScript, React.js, and Vue.js, complemented by a robust understanding of data structures and algorithms. Demonstrated ability to collaborate effectively with diverse teams to achieve business objectives, evidenced by a track record of delivering high-performance web applications that drive tangible results."
          }
        />
        <CardItem type={"education"} info={education} />
        <CardItem type={"work experience"} info={experience} />
      </div>
    </div>
  );
}
