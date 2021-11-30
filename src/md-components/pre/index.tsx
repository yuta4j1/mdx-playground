import React from "react";
import styles from "./pre.module.css";

const Pre: React.FC<{}> = ({ children }) => {
  return <pre className={styles.preContainer}>{children}</pre>;
};

export default Pre;
