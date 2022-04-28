import {
  Card,
  CardContent,
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import Header from "../components/Header";
import api from "../config/api";
import ProvinceMap from "./ProvinceMap";

// const url = "http://localhost:8000/blog/";

function Home() {
  // const [posts, setPosts] = useState([]);

  const [posts, setPosts] = useState({ loading: true, blog: null });

  const navigate = useNavigate()

  useEffect(()=>{
    const access = localStorage.getItem('access_token')
    if(!access){
      navigate('/login')
    }
    // else{
    //   navigate('/')
    // }
  },[])


  useEffect(() => {
    async function getPosts() {
      try {
        const data = await api.get();
        // console.log(data.data);
        setPosts({ loading: false, blog: data.data });
        // console.log(posts);
      } catch (err) {
        console.log(err);
      }
    }
    getPosts();
  }, [setPosts]);

  // useEffect(() => {
  //   api.get().then((res) => {
  //     const getPosts = res.data;
  //     setPosts({ posts: getPosts });
  //   });
  // }, [setPosts]);

  // if (!posts.blog)
  //   return (
  //     <Container>
  //       <Typography variant="h4" sx={{ my: 10 }}>
  //         Please login or register to view posts
  //       </Typography>
  //     </Container>
  //   );
  
  return (
    <>
    <Header />
      <Container sx={{ my: 10 }}>
        <Typography align={"center"} variant="h3" sx={{ pb: 5 }}>
          Latest Posts
        </Typography>

        <Grid container spacing={5}>
          {posts.loading
            ? "loading...."
            : posts.blog.map((post) => {
                return (
                  <Grid key={post.id} item xs={3}>
                    <Card>
                      <ImageListItem sx={{ height: 300 }}>
                        <img
                          src={"https://source.unsplash.com/random"}
                          alt=""
                        ></img>
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
    </>
  );
}

export default Home;
