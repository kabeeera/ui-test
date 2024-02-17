import React from "react";
import "./photo-gallery.scss";
import { Dialog, Grid, Stack } from "@mui/material";
const images = [
  { url: "img1.svg" },
  { url: "img2.svg" },
  { url: "img3.svg" },
  { url: "img4.svg" },
];
const PhotoGallery = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="gallery-wrapper">
      <Stack
        sx={{ mb: 2 }}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <h2>Photo</h2>
        <a href="#" className="view-btn">
          View All
        </a>
      </Stack>
      <Grid container spacing={1}>
        {images?.map((item, index) => {
          return (
            <Grid item lg={6} md={6} sm={6} xs={6} key={index}>
              <div className="img-box">
                <img
                  src={`/assets/images/${item?.url}`}
                  alt={`photo-${item?.url}`}
                  onClick={handleClickOpen}
                />
              </div>
              <Dialog open={open} onClose={handleClose}>
                <img
                  src={`/assets/images/${item?.url}`}
                  alt={`photo-${item?.url}`}
                />
              </Dialog>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PhotoGallery;
