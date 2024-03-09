import React from "react";
import styles from "./card-item.less";

interface EducationType {
  school: string;
  degree: string;
  duration: string;
}

interface ExperienceType {
  company: string;
  description: {
    summary: string;
    bullets: string[];
  }[];
  duration: string;
}

interface IProps {
  type: "education" | "work experience" | "summary";
  info: (EducationType | ExperienceType)[] | string;
}

export default function CardItem(props: IProps) {
  const { info, type } = props;
  return (
    <div className={styles.container}>
      <h1>{type.toUpperCase()}</h1>
      {type === "summary" ? (
        <div>{info as string}</div>
      ) : type === "education" ? (
        (info as EducationType[]).map((item) => (
          <div key={item.school} className={styles.phrase}>
            <div className={styles.school}>{item.school}</div>
            <div>{item.degree}</div>
            <div className={styles.duration}>{item.duration}</div>
          </div>
        ))
      ) : (
        (info as ExperienceType[]).map((item) => (
          <div key={item.company} className={styles.phrase}>
            <div className={styles.company}>{item.company}</div>
            <div className={styles.duration}>{item.duration}</div>
            <div className={styles.desc}>
              {item.description.map((ele) => (
                <div key={ele.summary}>
                  <div className={styles.summary}>{ele.summary}</div>
                  <ul>
                    {ele.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
