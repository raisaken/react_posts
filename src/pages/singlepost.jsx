import React, { useState, useEffect } from "react";
import api from "../config/api";
import { useParams } from "react-router-dom";
//MaterialUI
import { CssBaseline, Container, Typography } from "@mui/material";

export default function Singlepost() {
  const { slug } = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await api.get(slug);
        console.log(data.data);
        setPost(data.data);
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    }
    getPosts();
  }, [setPost]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div>this is a single page</div>
      <div>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {post.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {post.excerpt}
          </Typography>
        </Container>
      </div>
    </Container>
  );
}
