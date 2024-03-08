import React from "react";
// import styles from './tab-bar.module.less';
import styles from "./tab-bar.less";

export default function Tabbar() {
  const tabItems = [
    {
      name: "About Me",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Feedback",
      link: "/feedback",
    },
  ];

  return (
    <div className={styles.tabBarContainer}>
      {tabItems.map((item) => (
        <div className={styles.tab} key={item.link}>{item.name}</div>
      ))}
    </div>
  );
}
