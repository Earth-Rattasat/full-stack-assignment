import { LeftOutlined } from "@ant-design/icons";
import { Button, Table, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
import { UserProps } from "../UserGenerator/logic";
import { useFetchUser } from "./logic";
import styles from "./TableFetcher.module.scss";

export const TableFetcher: React.FC = () => {
  const { data } = useFetchUser();

  const columns: ColumnsType<UserProps> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Profile image",
      dataIndex: "profile_image",
      key: "profile_image",
      render: (url: string) => <img src={url} />,
    },
    {
      title: "Joined date",
      dataIndex: "joined_date",
      key: "joined_date",
      render: (date: string) => <>{new Date(date).toLocaleDateString()}</>,
    },
  ];

  return (
    <div className={styles.userPage}>
      <Button className={styles.btn} href="/" type="link" icon={<LeftOutlined />}>
        Back to home
      </Button>
      <div className={styles.container}>
        <Typography.Title level={1} className={styles.title}>
          User list page
        </Typography.Title>
        <Table
          columns={columns}
          dataSource={data}
          rowKey={(record) => record.id}
        />
      </div>
    </div>
  );
};
