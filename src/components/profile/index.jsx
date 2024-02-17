import React from "react";
import "./profile.scss";
import { Box, Button } from "@mui/material";

const Profile = () => {
  return (
    <Box className="profile-wrapper">
      <img className="cover-img" src="/assets/images/cover.svg" />
      <Box className="profile-content">
        <Box className="content-inner">
          <Box className="display-wrapper">
            <img src="/assets/images/profile-img.png" />
          </Box>
          <Box>
            <h1>
              Ahmad Nur Fawaid <span>@fawait</span>
            </h1>
          </Box>
        </Box>

        <Box className="profile-actions">
          <Button
            variant="contained"
            startIcon={<img src="/assets/images/edit.svg" />}
          >
            Edit Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
