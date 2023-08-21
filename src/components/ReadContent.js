import React, { useEffect } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import mana_pay from "../img/mana_pay.png";
import like_btn from "../img/like-btn.png";
import like_btn_red from "../img/like-btn-red.png";
import bookmark from "../img/bookmark.png";
import webtoon from "../img/webtoon.png";
import watermark from "../img/watermark.png";
import check_gray from "../img/check-gray.png";
import check_orange from "../img/check-orange.png";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { map_id_to_content } from "../data/products";
const blocks = ["첫화보기", "정주행", "최신화", "최신화", "북마크"];
const ReadContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation;

  useEffect(() => {
    // auto-scroll page to the top upon view change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon onClick={() => navigate(-1)} />
          <h1>{map_id_to_content[id].page}</h1>
        </div>
        <img width="16px" src={require("../img/stats.png")} alt="stats" />
      </div>
      <div className="img-holder">
        <img
          className="product-image"
          src={require(`../img/banners/comics_banner_${id}.png`)}
          alt="retro-toy"
        />
        <div className="tab-1">
          <img className="watermark" src={watermark} alt="watermark" />
          <img className="like-btn-red" src={like_btn_red} alt="like_btn_red" />
        </div>

        <div className="tab-3">
          <img src={mana_pay} alt="mana-pay" />
          <p>지금 마나페이로 구매하고, 마나를 모으세요!</p>
        </div>
      </div>

      <section className="sub-section">
        <h1>{map_id_to_content[id].title}</h1>
        <p>{map_id_to_content[id].description}</p>
        <p>{map_id_to_content[id].text}</p>
        <div className="blocks">
          {blocks.map((el, i) => (
            <div
              className={i === 0 ? "color-orange" : ""}
              onClick={() =>
                i === 0
                  ? navigate(
                      `/comicbook/${id}?search=${encodeURIComponent(
                        map_id_to_content[id]["book_names"][0]
                      )}`
                    )
                  : ""
              }
              key={i}
            >
              {i === 3 && <img src={like_btn_red} alt="icons" />}
              {i === 4 && <img src={bookmark} alt="icons" />}
              <p>{el}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sub-section-1">
        {new Array(7).fill("*").map((_, i) => (
          <div key={i} className="row">
            <div className="wrap-1">
              <img src={check_orange} alt="tick" />
              <h1>
                {map_id_to_content[id].title}
                {i + 1}화
              </h1>
            </div>
            <button
              onClick={() =>
                navigate(
                  `/comicbook/${id}?search=${encodeURIComponent(
                    map_id_to_content[id]["book_names"][i]
                  )}`
                )
              }
              className={i > 2 ? "low-padding" : ""}
            >
              {i > 2 ? "10 마나" : "무료"}
            </button>
          </div>
        ))}
      </section>

      <section className="bottom-bar">
        <img src={like_btn} alt="like-btn" />
        <div className="btn-wrap">
          <button className="go-chat-btn">북마크</button>
          <button className="go-pay-btn">마나페이 구매</button>
        </div>
      </section>
    </Container>
  );
};

export default ReadContent;

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
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);

      p {
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
      }
      img {
        width: 60px;
        padding-left: 15px;
      }
    }
  }

  .sub-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    background-color: #ededed;
    h1 {
      margin: 0;
      font-size: 22px;
    }
    p {
      font-weight: 600;
      font-size: 14px;
    }

    .blocks {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 10px;
      .color-orange {
        background-color: #ff9771;

        p {
          color: #000000;
        }
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
  }

  .sub-section-1 {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      border-top: 1px solid #ededed;

      .wrap-1 {
        display: flex;
        align-items: center;
        gap: 7px;

        h1 {
          font-size: 16px;
          color: #999999;
          font-weight: 600;
        }

        img {
          width: 16px;
        }
      }
      .low-padding {
        padding: 3px 10px;
        background-color: #999999;
      }
      button {
        border: none;
        font-weight: 900;
        font-size: 12px;
        padding: 3px 18px;
        background-color: #65bc7b;
        color: #ffffff;
        border-radius: 3px;
      }
    }
  }

  .bottom-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    padding: 20px 0;
    width: 100%;
    border-top: 1px solid #ededed;
    background-color: #f7f7f7;
    position: fixed;
    bottom: 0;

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
        background-color: #999999;
        color: #ffffff;
      }
      .go-pay-btn {
        background-color: #65bc7b;
      }
    }
  }
`;
