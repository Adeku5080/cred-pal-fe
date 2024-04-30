import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

const Container = styled.div`
  background: #006df7;
`;

export default Home;
