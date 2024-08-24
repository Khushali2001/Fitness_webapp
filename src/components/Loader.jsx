import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <div className="loader"></div>
      <p>Loading</p>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  background: #6f6de8;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
`;

export default Loader;
