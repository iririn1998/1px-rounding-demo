import type { FC } from "react";
import styles from "./index.module.css";

export const ScrollContents: FC = () => {
  return (
    <div className={styles["scroll-contents"]}>
      <span>コンテンツ１</span>
      <span>コンテンツ２</span>
      <span>コンテンツ３</span>
    </div>
  );
};
