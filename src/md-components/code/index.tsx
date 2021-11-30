import React from "react";
import styles from "./code.module.css";

const Code: React.FC<{}> = ({ children }) => {
  return <code className={styles.container}>{children}</code>;
};

export default Code;
