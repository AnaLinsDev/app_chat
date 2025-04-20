import { createContext, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface IMessage {
  userName: string;
  message: string;
}

export interface IChannel {
  name: string;
  id: number;
  messages: IMessage[];
}

interface IChannelContext {
  channels: IChannel[];
  channel: IChannel | undefined;
  userName: string;

  createChannel: (name: string) => void;
  createMessage: (message: string) => void;
  login: (userName: string) => void;
  joinChannel: (channelId: string) => void;
}

export const ChannelContext = createContext<IChannelContext>(
  {} as IChannelContext
);

export const ChannelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const socket = useRef<Socket>(null);
  const [userName, setuserName] = useState("");
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [channel, setChannel] = useState<IChannel>();

  useEffect(() => {
    socket.current = io("http://localhost:3333");

    socket.current?.on("channels:get", (data) => {
      const data_reverse = data.reverse();
      setChannels(data_reverse);
    });

    socket.current?.on("channel:get", (channel) => {
      setChannel(channel);
    });
  }, []);

  const login = (userName: string) => {
    socket.current?.emit("user:login", userName);
    setuserName(userName);
  };

  const createChannel = (channelName: string) => {
    socket.current?.emit("channel:create", channelName);
  };

  const joinChannel = (channelId: string) => {
    socket.current?.emit("channel:join", channelId);
  };

  const createMessage = (message: string) => {
    socket.current?.emit("message:create", {
      message,
      channelId: channel?.id,
      userName,
    });
  };

  return (
    <ChannelContext.Provider
      value={{
        login,
        createChannel,
        joinChannel,
        createMessage,
        userName,
        channels,
        channel,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
