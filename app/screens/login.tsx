import { useState } from "react";
import "./login.scss";
import { useChannelContext } from "../hooks/useChannelContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const { login } = useChannelContext();
  const navigate = useNavigate()

  return (
    <div className="center_h_container">
      <div id="signin_block">
        <h1>Log in</h1>

        <form
          id="signin_form"
          onSubmit={(ev) => {
            ev.preventDefault();
            login(userName);
            navigate('/channels')
          }}
        >
          <div className="input_block">
            <p>Username</p>
            <input
              type="text"
              id="signin_input"
              placeholder="User"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
            />
          </div>
          <button id="signin_btn" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
