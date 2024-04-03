import React from "react";
import styles from "../../loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.worm}></div>
      <div className={styles.circleMiddle}></div>
    </div>
  );
};
