import { Link } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";
import "./ChannelList.scss";

export const ChannelList = () => {
  const { channels } = useChannelContext();

  return (
    <div id="channel_list">
      {channels.map((channel) => (
        <div key={channel.id} id="channel_list_option">
          <Link to={`channel/${channel.id}`}>{channel.name}</Link>
        </div>
      ))}
    </div>
  );
};
