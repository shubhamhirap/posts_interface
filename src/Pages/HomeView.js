import React from "react";
import { Row, Col } from "react-bootstrap";
import UserList from "../Components/UserList";
import PostsList from "../Components/PostsList";
import Comments from "../Components/Comments"

const HomeView = () => {
  return (
       <Row>
            <Col md="3">
                <UserList />
            </Col>
            <Col>
                <PostsList />
            </Col>
            <Col md="3">
                <Comments />
            </Col>   
        </Row> 
  );
};

export default HomeView;
