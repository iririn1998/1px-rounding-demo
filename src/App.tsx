import styles from "./App.module.css";
import { ScrollContainer } from "./components/ScrollContainer";
import { ScrollContents } from "./components/ScrollContents";

const App = () => {
  return (
    <div className={styles["app-content"]}>
      <ScrollContainer>
        <ScrollContents />
      </ScrollContainer>
    </div>
  );
};

export default App;
