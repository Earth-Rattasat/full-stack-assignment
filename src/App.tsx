import { Button, Typography } from "antd";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.homePage}>
      <Typography.Title level={1} className={styles.title}>
        What page you want to go?
      </Typography.Title>

      <Button shape="round" className={styles.btn} href="/user">
        User List
      </Button>
      <Button shape="round" className={styles.btn} href="/user/generator">
        User Generator
      </Button>

      <Typography.Text className={styles.author}>
        by Rattasat Sittimongkol
      </Typography.Text>
    </div>
  );
}

export default App;
