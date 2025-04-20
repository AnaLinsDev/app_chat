import { useEffect, useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";
import "./ChannelCreate.scss";
import { useNavigate } from "react-router-dom";

export const ChannelCreate = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel, userName } = useChannelContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate("/login");
      return;
    }
  });

  return (
    <div id="channel_create">
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
    </div>
  );
};
