import React from "react";
import { Avatar } from "@mui/material";
import "./User.scss";

const User = ({ className, name, photoUrl }) => {
  return (
    <Avatar className={className} src={photoUrl}>
      <span className="initials">
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join(".")}
      </span>
    </Avatar>
  );
};

export default User;
