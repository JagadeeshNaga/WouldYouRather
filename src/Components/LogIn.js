import React, { useState } from "react";
import { users } from "../_Data";
import { useDispatch } from "react-redux";
import DisplayUsers from "./DisplayUsers";
import { UserHeader } from "./UserHeader";
import { USER_SIGN_IN } from "../redux/actions";

export default function LogIn() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      dispatch({ type: USER_SIGN_IN, payload: inputValue });
    }
  };

  const availableUsers = users.map((user) => {
    return { value: user.id, display: user.name };
  });

  return (
    <div className="account-signin">
      <UserHeader />
      <DisplayUsers />
      <div className="Form">
        <p className="account-subtext">Login to your account</p>
        <form className="signinform" onSubmit={handleSubmit}>
          <select
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="account-select"
          >
            <option key={new Date().getTime()} hidden={true}>
              Select User
            </option>
            {availableUsers.map((user) => {
              return (
                <option key={user.value} value={user.name}>
                  {user.display}
                </option>
              );
            })}
          </select>
          <button className="button-sign-in">Submit</button>
        </form>
      </div>
    </div>
  );
}


