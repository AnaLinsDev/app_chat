import { useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";
import "./ChannelCreate.scss";

export const ChannelCreate = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel } = useChannelContext();

  return (
    <div id="channel_create">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          createChannel(channelName);
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
          Create
        </button>
      </form>
    </div>
  );
};
