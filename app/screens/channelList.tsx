import { Link } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";
import "./ChannelList.scss";

export const ChannelList = () => {
  const { channels } = useChannelContext();

  return (
    <div id="channel_list">
      {channels.map((channel) => (
        <Link key={channel.id} to={`/chat/${channel.id}`}>
          <div id="channel_list_option">
            {channel.name}
          </div>
        </Link>
      ))}
    </div>
  );
};
