import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <Container>
      <Link to="Menu">1. Menu</Link>
      <Link to="category">2. Category</Link>
      <Link to="comics">3. Comics</Link>
      <Link to="products">4. Products</Link>
      <Link to="products/product/1">5. Specific product description page</Link>
      <Link to="/webtoon">6. Webtoon</Link>
      <Link to="/comicbook/1">7. Comicbook</Link>
    </Container>
  );
};

export default IndexPage;

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 30px;
  height: 100vh;
  gap: 20px;
`;
