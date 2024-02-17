import React from "react";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import "./search.scss";

const Search = () => {
  return (
    <div className="search-wrapper">
      <input
        style={{ backgroundImage: 'url("/assets/images/search.svg")' }}
        className="search-input"
        placeholder="Search"
        type="text"
      />
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img preview={false} src="/assets/images/pin.svg" alt="icon" />
            </InputAdornment>
          ),
        }}
        select
        SelectProps={{
          defaultValue: "Canada",
        }}
        className="location-select"
        size="small"
      >
        <MenuItem value={"Canada"}>Canada</MenuItem>
        <MenuItem value={"UK"}>UK</MenuItem>
        <MenuItem value={"France"}>France</MenuItem>
      </TextField>
    </div>
  );
};

export default Search;
