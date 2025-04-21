import { useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";
import "./ChannelCreate.scss";


export const ChannelCreate = () => {
  const [channelName, setChannelName] = useState("");
  const [userName, setUserName] = useState("");

  const { createChannel, joinChannel, channel, channels } = useChannelContext();

  return (
    <div id="channel_create">
      {channel?.name}

      {channels.length == 0 || !(channel?.name && channel.name !== "") ? (
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            createChannel(channelName);
            setChannelName("");
          }}
        >
          <input
            type="text"
            value={channelName}
            id="channel_create_input"
            placeholder="Enter a cool name for your channel"
            onChange={(ev) => {
              setChannelName(ev.target.value);
            }}
          />

          <button id="channel_create_btn" type="submit">
            Create Channel
          </button>
        </form>
      ) : (
        <form
          onSubmit={(ev) => {
            ev.preventDefault();

            joinChannel(userName);

          }}
        >
          <input
            type="text"
            value={userName}
            id="channel_join_input_user"
            placeholder="Enter a nickname"
            onChange={(ev) => {
              setUserName(ev.target.value);
            }}
          />

          <button id="channel_join_btn" type="submit">
            Enter Room
          </button>
        </form>
      )}
    </div>
  );
};
