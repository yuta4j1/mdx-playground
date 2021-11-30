import React from "react";
import styles from "./heading.module.css";

const Heading: React.FC<{}> = ({ children }) => {
  return <p className={styles.h2Style}>{children}</p>;
};

export default Heading;
