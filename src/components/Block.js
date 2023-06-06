import React from "react";
import styled from "styled-components";
const Block = () => {
  return (
    <Container>
      <h1>서류에 서명하고 도장 찍어서 보내주세요~</h1>
    </Container>
  );
};

export default Block;

const Container = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 50px;
  height: 100vh;
  text-align: center;
`;
