import React from "react";
import styles from "./tab-bar.less";
import portrait from '../assets/portrait.png';
import { Link, useNavigate } from 'react-router-dom';
import tabs from "../const/tabItems";

export default function Tabbar() {
  const navigate = useNavigate();

  const tabItems = tabs;

  const handleIconClick = () => {
    navigate('/');
  }

  return (
    <div className={styles.tabBarContainer}>
      <img onClick={handleIconClick} src={portrait} className={styles.portrait} alt="Icon" />
      <div className={styles.tabList}>
        {tabItems.map((item) => (
          <Link to={item.link} className={styles.tab} key={item.link}>{item.name}</Link>
        ))}
      </div>
    </div>
  );
}
