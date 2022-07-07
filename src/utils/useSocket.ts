import { API_URL } from "./../../constant";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = () => {
  const [serverMsg, setServerMsg] = useState<string | null>(null);
  const socket = io(API_URL);

  useEffect(() => {
    socket.on("updated", (data) => {
      setServerMsg(data);
    });
  }, [socket]);

  return {
    serverMsg,
  };
};
