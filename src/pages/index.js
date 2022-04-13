import {
  Card,
  CardContent,
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:8000/blog/";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await axios.get(url);
        console.log(data.data);
        setPosts(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getPosts();
  }, []);

  return (
    <React.Fragment>
      <Container sx={{ my: 10 }}>
        <Typography align={"center"} variant="h3" sx={{ pb: 5 }}>
          Latest Posts
        </Typography>
        <Grid container spacing={5}>
          {posts.map((post) => {
            return (
              <Grid key={post.id} item xs={3}>
                <Card>
                  <ImageListItem sx={{ height: 300 }}>
                    <img src={"https://source.unsplash.com/random"} alt=""></img>
                  </ImageListItem>

                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {post.title.substr(0, 50)}...
                    </Typography>
                    <div>
                      <Typography color="textPrimary"></Typography>
                      <Typography color="textSecondary">
                        {post.excerpt.substr(0, 60)}...
                      </Typography>

                      <Typography color="textSecondary">
                        {post.content}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Home;
