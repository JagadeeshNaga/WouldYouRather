import React from "react";
import { users } from "../_Data";
import User from "./User";

const DisplayUsers = () => {
  return (
    <div className="account-image">
      {users.map((user) => {
        return <User user={user} key={user.id}/>;
      })}
    </div>
  );
};

export default DisplayUsers;
