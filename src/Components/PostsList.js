import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container} from "react-bootstrap"

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  });

  const postsList = {
      "height" : "75vh",
      "overflow" : "auto"
  }

  return (
    //   <div className="mt-4">
    //       <ol>
    //           {
    //               posts.map(post => (
    //               <li key={post.id}>{post.title}</li>
    //               ))
    //           }
    //       </ol>
    //   </div>
        <Container className="mt-4 border" style={postsList}>
            <ol>
                {
                    posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                    ))
                }
            </ol>
        </Container>
  )
};

export default PostsList;
