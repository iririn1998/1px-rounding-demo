import type { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface ScrollContainerProps {
  children?: ReactNode;
}

export const ScrollContainer: FC<ScrollContainerProps> = ({ children }) => {
  return <div className={styles["scroll-container"]}>{children}</div>;
};
