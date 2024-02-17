import React, { useRef } from "react";
import { Avatar, IconButton } from "@mui/material";
import "./add-post.scss";

const AddPost = () => {
  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };
  return (
    <div className="add-post-wrapper">
      <Avatar alt="avatar" src="/assets/images/avatar.svg" />
      <input type="text" placeholder="Post something..." />
      <IconButton
        onClick={onButtonClick}
        aria-label="fingerprint"
        color="secondary"
      >
        <img src="/assets/images/upload.svg" alt="upload" />
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          hidden
        />
      </IconButton>
    </div>
  );
};

export default AddPost;
