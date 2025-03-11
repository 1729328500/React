import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const locarion = useLocation();
  const params = new URLSearchParams(locarion.search);
  const name = params.get("name");
  const age = params.get("age");
  return (
    <div>
      <h2> About Page </h2>
      <h3>name:{name}</h3>
      <h4>age:{age}</h4>
    </div>
  );
};

export default About;
