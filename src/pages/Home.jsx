/*eslint-disable*/
import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <h1>Welcome home, {username}</h1>
    </div>
  );
};

export default Home;
