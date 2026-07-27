import type { FC } from "react";
import styles from "./index.module.css";

export type DemoId = "demo1" | "demo2" | "demo3";

export interface HeaderProps {
  activeDemo: DemoId;
  onSelectDemo: (id: DemoId) => void;
}

const DEMO_ITEMS: { id: DemoId; label: string }[] = [
  { id: "demo1", label: "デモ１" },
  { id: "demo2", label: "デモ２" },
  { id: "demo3", label: "デモ３" },
];

export const Header: FC<HeaderProps> = ({ activeDemo, onSelectDemo }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>1px Rounding Demo</div>
        <nav className={styles.nav}>
          {DEMO_ITEMS.map((item) => {
            const isActive = activeDemo === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`${styles["nav-item"]} ${isActive ? styles.active : ""}`}
                onClick={() => onSelectDemo(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
