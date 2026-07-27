import { useState } from "react";
import styles from "./App.module.css";
import { Header, type DemoId } from "./components/Header";
import { ScrollContainer } from "./components/ScrollContainer";
import { ScrollContents } from "./components/ScrollContents";

const App = () => {
  const [activeDemo, setActiveDemo] = useState<DemoId>("demo1");

  return (
    <div className={styles["app-wrapper"]}>
      <Header activeDemo={activeDemo} onSelectDemo={setActiveDemo} />
      <main className={styles["app-content"]}>
        <ScrollContainer>
          <ScrollContents />
        </ScrollContainer>
      </main>
    </div>
  );
};

export default App;
