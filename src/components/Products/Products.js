import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import Product from "./Product";

const Products = () => {
  return (
    <Container>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon />
          <h1>단행본</h1>
          <p>924,251 소장품</p>
          <ShoppingCartTwoToneIcon />
        </div>
      </div>
      <div className="orange-tab">
        <SearchIcon sx={{ color: "#ffffff" }} />
        <p>물품의 상세조건을 변경해서 검색해보세요</p>
        <button className="filter-btn">FILTER</button>
      </div>

      <section className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-top: 20px;

  .header {
    display: flex;
    align-items: center;
    width: 100%;

    .inner-wrap {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      h1 {
        font-size: 20px;
        font-weight: 600;
        color: #191919;
      }
      p {
        margin-top: 20px;
        margin-right: 40px;
        font-size: 12px;
        color: #999999;
        text-align: bottom;
        font-weight: 600;
      }
    }
  }

  .orange-tab {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ff9771;
    width: 100%;
    height: 70px;
    p {
      font-size: 12px;
      color: #ffffff;
    }
    .filter-btn {
      border-radius: 6px;
      background-color: #f7f7f7;
      color: #000000;
      font-size: 10px;
      padding: 5px;
      outline: none;
      border: none;
      font-weight: 600;
      width: 60px;
    }
  }

  .products {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 10px;
    gap: 10px;
    flex-wrap: wrap;
    overflow-x: scroll;
    padding-bottom: 120px;
  }
`;
