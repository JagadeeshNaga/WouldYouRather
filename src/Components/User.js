import React from "react";

const User = (props) => {
  return (
    <div>
      <img src={props.user.avatarURL} alt="User Avatar" />
      <h2>{props.user.name}</h2>
    </div>
  );
};

export default User;
