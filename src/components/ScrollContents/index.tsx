import type { FC } from "react";
import styles from "./index.module.css";

export const ScrollContents: FC = () => {
  return (
    <div className={styles["scroll-contents"]}>
      <span className={styles["item"]}>コンテンツ１</span>
      <span className={styles["item"]}>コンテンツ２</span>
      <span className={styles["item"]}>コンテンツ３</span>
    </div>
  );
};
