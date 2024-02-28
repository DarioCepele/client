import React from "react";
import styles from "../bubble.module.css";

const Discover = () => {
  return (
    <h2 className="text-center text-6xl font-thin text-neutral-50 tracking-wide">
      {"Discover new recipe ideas!".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Discover;
