import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Navbar = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src="./svg/logo.svg" alt="credpal_logo" />
        </Logo>

        <NavLinks>
          <li>Product</li>
          <li>Business</li>
          <li>What We do</li>
        </NavLinks>
      </Content>

      <NavInfo>
        <p>FAQ</p>
        <span>
          <img src="./svg/naij.svg" alt="naij_dropdown" />
        </span>
        <Button/>
      </NavInfo>
    </Container>
  );
};

const Container = styled.div`
  height:125px;

  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  align-items:center;
`;
const Logo = styled.a`
  padding-right:40px;
`;

const NavLinks = styled.div`
  display: flex;
  gap:40px;
  li {
    list-style: none;
  }


`;

const NavInfo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;

  p {
    font-size: 14px;
    color:#FFFFFF;
    
  }
`;

export default Navbar;
