import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import Product from "./Product";
import { products } from "../../data/products";
import { filterVal } from "../../data/filterVal";
import FilterDropdown from "./FilterDropdown";
import { useNavigate, useLocation } from "react-router-dom";

const Products = () => {
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const pageTitle = searchParams.get("string");
  return (
    <Container switch={dropdown}>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon onClick={() => navigate(-1)} />
          <h1>{pageTitle}</h1>
          <p>924,251 소장품</p>
          <ShoppingCartTwoToneIcon />
        </div>
      </div>
      <div className="orange-tab">
        <SearchIcon sx={{ color: "#ffffff" }} />
        <p>물품의 상세조건을 변경해서 검색해보세요</p>
        <button
          onClick={() => setDropdown((prev) => !prev)}
          className="filter-btn"
        >
          FILTER
        </button>
      </div>
      <FilterDropdown dropdown={dropdown} filterArr={filterVal} />

      <section className="products">
        {products.map((el, i) => (
          <Product
            key={i}
            id={i}
            img_title={el.img_title}
            img_sub_title={el.img_sub_title}
            username={el.username}
            followers={el.followers}
            nft_img_src={require(`../../img/nft_sample_${i}.png`)}
            profile_src={require(`../../img/profile_picture_${i}.png`)}
          />
        ))}
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
    background-color: ${(props) => (props.switch ? "#999999" : "#ff9771")};
    width: 100%;
    height: 70px;

    p {
      font-size: 12px;
      color: #ffffff;
    }
    .filter-btn {
      border-radius: 6px;
      background-color: ${(props) => (props.switch ? "#ff9771" : "#f7f7f7")};
      color: #000000;
      font-size: 14px;
      padding: 5px;
      outline: none;
      border: none;
      font-weight: 600;
      width: 75px;
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
    background-color: #f6f6f6;
  }
`;
