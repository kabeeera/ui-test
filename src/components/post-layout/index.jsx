import React from "react";
import { Avatar, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./post-layout.scss";

const PostLayout = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="post-layout-wrapper">
      <div className="post-layout-header">
        <div className="post-user">
          <Avatar
            className="avatar"
            alt="avatar"
            src="/assets/images/avatar.svg"
          />
          <h2>
            Ahmad Nur Fawaid
            <span>12 April at 09.28 PM</span>
          </h2>
        </div>
        <div className="post-actions">
          <IconButton size="small" onClick={handleClick}>
            <MoreHorizIcon color="secondary" />
          </IconButton>
          <Menu
            MenuListProps={{ sx: { py: 0 } }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="post-content">{children}</div>

      <div className="post-layout-footer">
        <div className="post-actions">
          <Button
            startIcon={<img src={"/assets/images/heart-icon.svg"} />}
            color="secondary"
          >
            7 Comments
          </Button>
          <Button
            startIcon={<img src={"/assets/images/message.svg"} />}
            color="secondary"
          >
            12 Likes
          </Button>
          <Button
            startIcon={<img src={"/assets/images/share-icon.svg"} />}
            color="secondary"
          >
            0 Share
          </Button>
        </div>
        <div className="post-comment">
          <Avatar
            className="avatar"
            alt="avatar"
            src="/assets/images/avatar.svg"
          />
          <div className="comment-actions">
            <input placeholder="Write your comment..." />
            <IconButton size="small">
              <img src={"/assets/images/attachment.svg"} />
            </IconButton>
            <IconButton size="small">
              <img src={"/assets/images/emoji.svg"} />
            </IconButton>{" "}
            <IconButton size="small">
              <img src={"/assets/images/gallery.svg"} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
