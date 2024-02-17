import { Container, Grid } from "@mui/material";
import {
  About,
  Profile,
  PhotoGallery,
  AddPost,
  PostList,
  Footer,
} from "./components";
import "./App.scss";

function App() {
  return (
    <Container sx={{ maxWidth: "1050px" }} maxWidth="1000px">
      <Grid container columnSpacing={2}>
        <Grid item lg={12}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={4.5} lg={4.5} xl={4.5}>
          <About />
          <PhotoGallery />
        </Grid>
        <Grid item xs={12} sm={12} md={7.5} lg={7.5} xl={7.5}>
          <AddPost />
          <PostList />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
