import { useChannelContext } from "../hooks/useChannelContext";
import "./ChannelList.scss";

export const ChannelList = () => {
  const { channels, selectChannel, channel } = useChannelContext();

  return (
    <div id="channel_list">
      {channels.map((channelMap) => (
        <div
          key={channelMap.name}
          id="channel_list_option"
          className={channel?.name === channelMap.name ? "selected" : ""}
          onClick={() => {
            const sendName =
              channel?.name == channelMap.name ? "" : channelMap.name;
            selectChannel(sendName);
          }}
        >
          {channelMap.name}
        </div>
      ))}
    </div>
  );
};
