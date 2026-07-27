import { useState } from "react";
import styles from "./App.module.css";
import { Demo1 } from "./components/Demo1";
import { Header, type DemoId } from "./components/Header";

const App = () => {
  const [activeDemo, setActiveDemo] = useState<DemoId>("demo1");

  return (
    <div className={styles["app-layout"]}>
      <Header activeDemo={activeDemo} onSelectDemo={setActiveDemo} />
      <main className={styles.content}>
        {activeDemo === 'demo1' && <Demo1 />}
      </main>
    </div>
  );
};

export default App;
