import { createContext, useEffect, useState } from "react";
import { getChannelsAPI, createChannelAPI, joinChannelWS } from "../api/modules/channel";

interface IMessage {
  userName: string;
  message: string;
}

export interface IChannel {
  name: string;
  private: boolean;
  messages: IMessage[];
}

interface IChannelContext {
  channels: IChannel[];
  channel: IChannel | undefined;
  userName: string;

  updateChannels: () => void;

  createChannel: (name: string) => void;
  createMessage: (message: string) => void;
  selectChannel: (channelName: string) => void;

  joinChannel: (userName: string) => void;
}

export const ChannelContext = createContext<IChannelContext>(
  {} as IChannelContext
);

export const ChannelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userName, setuserName] = useState("");
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [channel, setChannel] = useState<IChannel>();

  useEffect(() => {
    updateChannels();
  }, []);

  const updateChannels = () => {
    getChannelsAPI().then((resp) => {
      const data = resp.data;
      const data_reverse = data.reverse();
      setChannels(data_reverse);
    });
  };

  const createChannel = (channelName: string) => {
    createChannelAPI(channelName).then((resp) => {
      const nameResp = resp.data.name;
      const privateResp = resp.data.private;
      const messagesResp: IMessage[] = [];

      setChannel({
        name: nameResp,
        private: privateResp,
        messages: messagesResp,
      });

      updateChannels();
    });
  };

  const selectChannel = (channelName: string) => {
    const selectedChannel = channels.find(
      (channel) => channel.name == channelName
    );

    setChannel(selectedChannel);
  };

  const joinChannel = (userName: string) => {

    joinChannelWS(channel?.name, userName)
    //socket.current?.emit("channel:join", channelId);
  };

  const createMessage = (message: string) => {
    /*
    socket.current?.emit("message:create", {
      message,
      channelId: channel?.id,
      userName,
    });
    */
  };

  return (
    <ChannelContext.Provider
      value={{
        updateChannels,
        createChannel,
        joinChannel,
        createMessage,
        selectChannel,
        userName,
        channels,
        channel,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
