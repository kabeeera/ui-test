import React from "react";
import PostLayout from "../post-layout";
import { Grid } from "@mui/material";

const PostList = () => {
  return (
    <>
      <PostLayout>
        <p>Peace On Earth A Wonderful Wish But No Way</p>
      </PostLayout>
      <PostLayout>
        <p>
          One of the perks of working in an international company is sharing
          knowledge with your colleagues.
        </p>

        <Grid container columnSpacing={2}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <div className="img-box">
              <img src={"/assets/images/post-img3.svg"} />
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Grid container rowSpacing={2}>
              <Grid item sm={12} md={12} lg={12} xl={12}>
                <div className="img-box">
                  <img src={"/assets/images/post-img2.svg"} />
                </div>
              </Grid>
              <Grid item sm={12} md={12} lg={12} xl={12}>
                <div className="img-box">
                  <img src={"/assets/images/post-img1.svg"} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PostLayout>
    </>
  );
};

export default PostList;
