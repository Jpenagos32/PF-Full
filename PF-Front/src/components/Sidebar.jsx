import React from "react";
import styles from "./views/SideBar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles["sidebar-menu"]}>
        <li className={styles["sidebar-menu-item"]}>Start rating</li>
        <li className={styles["sidebar-menu-item"]}>Acomodation</li>
        <li className={styles["sidebar-menu-item"]}>Facilities</li>
      </ul>
    </div>
  );
};

export default Sidebar;
