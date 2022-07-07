import { useSocket } from "./../utils/useSocket";
import { UserProps } from "./../UserGenerator/logic";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

interface UserInfoProps extends UserProps {
  createdAt: string;
  updatedAt: string;
}

export const useFetchUser = () => {
  const [userList, setUserList] = useState<UserInfoProps[] | []>([]);
  const { serverMsg } = useSocket();

  const fetchUser = async () => {
    const res = await axios.get("/user");
    if (res?.data) {
      setUserList(res.data);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchUser();
  }, [serverMsg]);

  return {
    data: userList,
  };
};
