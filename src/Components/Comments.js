import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container} from "react-bootstrap";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  });

  const commentStyle = {
      "height" : "75vh",
      "overflow" : "auto"
  }

  return (
        <Container className="mt-4 border" style={commentStyle}>
            <ul>
                {
                    comments.map(comment=>(<li key={comment.id}>{comment.body}</li>))
                }
            </ul>
        </Container>
    )
};

export default Comments;
