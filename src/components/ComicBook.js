import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import mana_pay from "../img/mana_pay.png";
import next_icon_active from "../img/next-btn-active.png";
import next_icon from "../img/next-icon.png";
import prev_icon_active from "../img/prev-btn-active.png";
import prev_icon from "../img/prev-icon.png";
import content_icon from "../img/content-icon.png";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { map_id_to_content } from "../data/products";
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

const ComicBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);
  const cur_book_name = searchQuery.get("search");
  const [bookName, setBookName] = useState(cur_book_name);
  const [curIndex, setCurIndex] = useState(0);

  function handlePaginate(direction) {
    const arr = map_id_to_content[id]["book_names"];
    switch (direction) {
      case "next":
        if (arr.length > curIndex + 1) {
          setBookName(arr[curIndex + 1]);
          setCurIndex((prev) => prev + 1);
        }
        break;
      case "prev":
        if (curIndex - 1 >= 0) {
          setBookName(arr[curIndex - 1]);
          setCurIndex((prev) => prev - 1);
        }
        break;
      default:
    }
  }

  return (
    <Container>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon onClick={() => navigate(-1)} />
          <h1>{map_id_to_content[id].page}</h1>
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

      <section className="block">
        <h1>{cur_book_name}</h1>
        <section className="book-content">
          <img
            src={require(`../img/comics_content/${bookName}.jpg`)}
            alt="comic-book"
          />
        </section>
      </section>

      <section className="bottom-bar">
        <h1>
          {map_id_to_content[id].title.length > 10
            ? map_id_to_content[id].title.slice(0, 10) + "..."
            : map_id_to_content[id].title}
        </h1>
        <div className="btn-wrap">
          <img src={content_icon} alt="content-icon" />
          <div className="nav-wrap">
            <img
              onClick={() => handlePaginate("prev")}
              src={curIndex - 1 >= 0 ? prev_icon_active : prev_icon}
              alt="prev-icon"
            />
            <p>{curIndex + 1}</p>
            <img
              onClick={() => handlePaginate("next")}
              src={
                map_id_to_content[id]["book_names"].length > curIndex + 1
                  ? next_icon_active
                  : next_icon
              }
              alt="next-icon"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ComicBook;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 100px;

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
    padding: 0;
    border-top: 1px solid #ededed;
    background-color: #f7f7f7;
    position: fixed;
    bottom: 0;
    width: 100%;

    img {
      width: 20px;
    }

    .btn-wrap {
      display: flex;
      align-items: center;
      gap: 15px;

      img {
        width: 30px;
      }

      .nav-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        img {
          object-fit: contain;
          width: 30px;
        }
      }

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
