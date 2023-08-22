import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import mana_pay from "../img/mana_pay.png";

import { useNavigate, useParams, useLocation } from "react-router-dom";
import { map_type_to_content } from "../data/products";
import Item from "./Market/Item";
const blocks = [
  "웹툰",
  "웹소설",
  "보물섬",
  "태권브이",
  "마블코믹",
  "철인28호",
  "황금날개",
  "챔프",
];

const Content = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const location = useLocation();

  useEffect(() => {
    // auto-scroll page to the top upon view change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon onClick={() => navigate(-1)} />
          <h1>{map_type_to_content[type]["title"].toUpperCase()}</h1>
        </div>
        <img width="16px" src={require("../img/stats.png")} alt="stats" />
      </div>
      <div className="blocks">
        {blocks.map((el, i) => (
          <div className={i === 0 ? "color-orange" : ""} key={i}>
            <p className="p-content">{el}</p>
          </div>
        ))}
      </div>

      <img
        className="product-image"
        src={require(`../img/ads.png`)}
        alt="retro-toy"
      />
      <div className="img-holder">
        <div className="tab-3">
          <img src={mana_pay} alt="mana-pay" />
          <p>지금 마나페이로 구매하고, 마나를 모으세요!</p>
        </div>
      </div>
      <h1>{map_type_to_content[type]["description"]}</h1>
      <section className="products">
        {map_type_to_content[type]["arr"].map((el, i) => (
          <Item
            key={i}
            id={i}
            img_width="175px"
            img_height="175px"
            price={el.price}
            description={el.description}
            img_src={require(`../img/${map_type_to_content[type]["folder"]}/${el.img_src}.png`)}
            alternative={false}
          />
        ))}
      </section>
    </Container>
  );
};

export default Content;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 100px;
    width: 100%;

    .inner-wrap {
      display: flex;
      align-items: center;
      gap: 30px;

      h1 {
        font-size: 24px;
        font-weight: 400;
        color: #191919;
      }
    }
  }

  .blocks {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    background-color: #ededed;
    padding: 10px;
    overflow-y: scroll;
    .p-content {
      color: #000000;
      white-space: nowrap;
      width: 50px;
      text-align: center;
    }
    .color-orange {
      background-color: #ff9771;
    }
    div {
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 5px;
      padding: 5px 10px;

      p {
        font-size: 12px;
        margin: 0;
        color: #ffffff;
        font-weight: 600;
      }
      img {
        width: 12px;
        height: 12px;
      }
    }
  }
  .img-holder {
    position: relative;
    width: 100%;
    .product-image {
      width: 100%;
      max-height: 330px;
      object-fit: cover;
    }
    .tab-1 {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      img {
        padding: 20px 30px;
      }
      .like-btn-red {
        width: 25px;
      }
      .watermark {
        width: 120px;
      }
    }
    .tab-2 {
      position: absolute;
      display: flex;
      align-items: flex-end;
      width: 100%;
      justify-content: flex-end;
      bottom: 40px;

      p {
        margin: 30px;
        padding: 5px 10px;
        background-color: rgba(0, 0, 0, 0.2);
        color: #ffffff;
        font-weight: 600;
        border-radius: 5px;
      }
    }
    .tab-3 {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);

      p {
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
      }
      img {
        width: 40px;
        padding-left: 20px;
      }
    }
  }
  h1 {
    padding: 10px;
    font-size: 20px;
  }
  .products {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 10px;
    margin-bottom: 100px;
    flex-wrap: wrap;
    overflow-x: scroll;
  }
  .products::-webkit-scrollbar {
    height: 0;
  }
`;
