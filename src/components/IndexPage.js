import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <Container>
      <Link to="home/menu">1. Menu</Link>
      <Link to="home/category">2. Category</Link>
      <Link to="home/comics">3. Comics</Link>
      <Link to="home/products">4. Products</Link>
      <Link to="/home/main">5. Main</Link>
      <Link to="products/product/1">6. Specific product description page</Link>
      <Link to="/webtoon">7. Webtoon</Link>
      <Link to="/comicbook/1">8. Comicbook</Link>
      <Link to="/login">9. Login</Link>
      <Link to="/product_upload">10. Product upload</Link>
      <Link to="/banner_1">11. Banner 1</Link>
      <Link to="/banner_2">12. Banner 2</Link>
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
