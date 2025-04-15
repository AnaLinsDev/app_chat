import { useState } from "react";
import "./login.scss";

export const Login = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="center_h_container">
        <div id="signin_block">
      <h1>Log in</h1>

      <form
        id="signin_form"
        onSubmit={(ev) => {
          ev.preventDefault();
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
