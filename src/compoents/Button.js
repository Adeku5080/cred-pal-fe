import React from 'react'
import styled from "styled-components";

const Button = () => {
  return (
    <Container>
      Download Credpal App
    </Container>
  );
}

const Container = styled.div`
  background: white;
  color: black;
  border-radius: 90px;
  padding: 12px 16px 12px 16px;
  z-index:10;
  font-family: Poppins;
font-size: 12px;
font-weight: 500;
line-height: 16px;
display:flex;
justify-content:center;
align-items:center

`;
export default Button