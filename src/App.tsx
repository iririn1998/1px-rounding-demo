import styles from "./App.module.css";
import { ScrollContents } from "./components/ScrollContents";

const App = () => {
  return (
    <div className={styles['app-content']}>
      <ScrollContents />
    </div>
  );
};

export default App;
