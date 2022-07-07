import { LeftOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";
import { useUserGenerator } from "./logic";
import styles from "./UserGenerator.module.scss";

export const UserGenerator: React.FC = () => {
  const { generate, userinfo } = useUserGenerator();

  return (
    <div className={styles.generatorPage}>
      <Button
        className={styles.btn}
        href="/"
        type="link"
        icon={<LeftOutlined />}
      >
        Back to home
      </Button>
      <div className={styles.container}>
        <Typography.Title level={1} className={styles.title}>
          User generator page
        </Typography.Title>
        <Button shape="round" size="large" onClick={generate}>
          Generate
        </Button>
        <div>
          {userinfo && (
            <textarea
              style={{ width: 600 }}
              rows={10}
              value={JSON.stringify(userinfo, null, "\t")}
            />
          )}
        </div>
      </div>
    </div>
  );
};
