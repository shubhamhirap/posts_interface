import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  });

  const listStyle = {
    listStyleType: "none",
  };
  const listClass = {
    height: "75vh",
  };

  return (
    <Container className="mt-4 border ml-2" style={listClass}>
      <ul style={listStyle}>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default UserList;
