import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import mana_pay from "../img/mana_pay.png";
import like_btn from "../img/like-btn.png";
import ads from "../img/ads.png";
import srthsre from "../img/srthsre.png";
import { useNavigate } from "react-router-dom";
const blocks = [
  "웹툰",
  "웹소설",
  "보물섬",
  "태권브이",
  "마블코믹",
  "마블코믹",
  "태권브이",
  "마블코믹",
  "마블코믹",
  "마블코믹",
  "태권브이",
  "마블코믹",
  "마블코믹",
];
const ComicBook = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon onClick={() => navigate(-1)} />
          <h1>레트로토이</h1>
        </div>
        <ShoppingCartTwoToneIcon />
      </div>

      <img className="product-image" src={ads} alt="retro-toy" />
      <div className="img-holder">
        <div className="tab-3">
          <img src={mana_pay} alt="mana-pay" />
          <p>지금 마나페이로 구매하고, 마나를 모으세요!</p>
        </div>
      </div>

      <section className="block">
        <h1>비뢰도 1화</h1>
        <section className="book-content">
          <img src={srthsre} alt="comic-book" />
        </section>
      </section>

      <section className="bottom-bar">
        <img src={like_btn} alt="like-btn" />
        <div className="btn-wrap">
          <button className="go-chat-btn">채팅하기</button>
          <button className="go-pay-btn">마나페이 구매</button>
        </div>
      </section>
    </Container>
  );
};

export default ComicBook;

const Container = styled.section`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 120px;

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
  .img-holder {
    position: relative;
    width: 100%;
    .product-image {
      width: 100vw;
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

  .block {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #ededed;
    padding: 0;
    h1 {
      margin: 0;
      padding: 20px;

      font-size: 16px;
    }
    .book-content {
      margin: 0;
      padding: 0;
      overflow-y: scroll;
      img {
        width: 100%;
      }
    }
  }

  .bottom-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    padding: 30px 20px;
    border-top: 1px solid #ededed;

    img {
      width: 20px;
    }

    .btn-wrap {
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        border: none;
        outline: none;
        padding: 10px 25px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 600;
      }

      .go-chat-btn {
        background-color: #ff9771;
        color: #ffffff;
      }
      .go-pay-btn {
        background-color: #65bc7b;
      }
    }
  }
`;
