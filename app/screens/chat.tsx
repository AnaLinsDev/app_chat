import { useEffect, useRef, useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./Chat.scss";

import Icon from "@mdi/react";
import { mdiKeyboardBackspace } from "@mdi/js";
import { mdiSend } from "@mdi/js";

export const Chat = () => {
  const [message, setMessage] = useState("");
  const { channel, joinChannel, createMessage, userName } = useChannelContext();
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();

  const divRef = useRef<HTMLDivElement>(null);

  const goToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    goToBottom();
  }, [channel?.messages]);

  useEffect(() => {
    if (!channelId) {
      navigate("/channels");
      return;
    }

    joinChannel(channelId);
  }, []);

  return (
    <div id="chat_page_block">
      <div id="chat_page">
        <div id="chat_page_channel_info">
          <button id="chat_page_channel_info_btn">
            <Link to="/channels">
              <Icon path={mdiKeyboardBackspace} size={1} />
            </Link>
          </button>

          <h3> {channel?.name} </h3>
        </div>

        <div id="chat_page_message_form">
          <div id="chat_page_messages" ref={divRef}>
            {channel?.messages.map((message, index) => (
              <div
                key={index}
                className={
                  userName === message.userName
                    ? "dialog current_user_dialog"
                    : "dialog other_dialog"
                }
              >
                <strong>{message.userName}</strong>

                <p>{message.message}</p>
              </div>
            ))}
          </div>

          <form
            id="chat_page_form"
            onSubmit={(ev) => {
              ev.preventDefault();
              createMessage(message);
              setMessage("");
            }}
          >
            <input
              type="text"
              id="chat_page_input"
              value={message}
              placeholder="Write your message"
              onChange={(ev) => {
                setMessage(ev.target.value);
              }}
            />

            <button type="submit" id="chat_page_btn">
              {" "}
              <Icon path={mdiSend} size={1} color="white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
