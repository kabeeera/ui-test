import React from "react";
import {
  Avatar,
  Container,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import Search from "../search";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Container maxWidth="1230px" sx={{ maxWidth: "1230px" }}>
        <div className="header-inner">
          <div className="logo">
            <img src="/assets/images/logo.svg" alt="logo" />
          </div>

          <div className="search">
            <Search />
          </div>

          <div className="actions">
            <TextField
              select
              label="Explore"
              placeholder="Explore"
              className="explore-select"
              size="small"
            >
              <MenuItem value={10}>Option 1</MenuItem>
              <MenuItem value={20}>Option 2</MenuItem>
            </TextField>

            <IconButton>
              <img preview={false} src="/assets/images/bell.svg" alt="icon" />
            </IconButton>
            <IconButton>
              <img preview={false} src="/assets/images/chat.svg" alt="icon" />
            </IconButton>
            <IconButton>
              <img preview={false} src="/assets/images/add.svg" alt="icon" />
            </IconButton>
            <Avatar alt="avatar" src="/assets/images/avatar.svg" />
          </div>
        </div>
        <div className="header-bottom">
          <Search />
          <TextField
            select
            label="Explore"
            placeholder="Explore"
            className="explore-select"
            size="small"
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
          </TextField>
        </div>
      </Container>
    </header>
  );
};

export default Header;
