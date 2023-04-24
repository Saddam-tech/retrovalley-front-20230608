import React, { useState } from "react";
import styled from "styled-components";
import retro_toy from "../../img/retro_toy.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import profile_img from "../../img/profile_img.png";
import mana_pay from "../../img/mana_pay.png";
import like_btn from "../../img/like-btn.png";
import like_btn_red from "../../img/like-btn-red.png";
import watermark from "../../img/watermark.png";
import mana from "../../img/mana.png";
import { useNavigate, useParams } from "react-router-dom";
const ProductSpec = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  const map_path_to_img = {
    0: ["toy-1", "toy-2", "toy-3", "toy-4", "toy-5"],
    1: ["car-1", "car-2", "car-3", "car-4", "car-5"],
    2: ["ranger-1", "ranger-2", "ranger-3", "ranger-4", "ranger-5"],
    3: ["ranger-6", "ranger-7", "ranger-8", "ranger-9", "ranger-10"],
    4: ["antman-1", "antman-2", "antman-3", "antman-4", "antman-5"],
    5: ["boy-1", "boy-2", "boy-3", "boy-4", "boy-5"],
  };

  const handleNext = (images) => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const handlePrev = (images) => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };
  return (
    <Container images={map_path_to_img[id]} activeIndex={activeIndex}>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon onClick={() => navigate(-1)} />
          <h1>레트로토이</h1>
        </div>
        <ShoppingCartTwoToneIcon />
      </div>
      <div className="img-holder">
        <div className="img-map">
          {map_path_to_img[id].map((el, id) => (
            <img
              key={id}
              className="product-image"
              src={require(`../../img/product_img/${el}.png`)}
              alt="retro-toy"
            />
          ))}
        </div>
        <NavigateBeforeIcon
          className="prev"
          onClick={() => handlePrev(map_path_to_img[id])}
        >
          Prev
        </NavigateBeforeIcon>
        <NavigateNextIcon
          className="next"
          onClick={() => handleNext(map_path_to_img[id])}
        >
          Next
        </NavigateNextIcon>
        <div className="tab-1">
          <img className="watermark" src={watermark} alt="watermark" />
          <img className="like-btn-red" src={like_btn_red} alt="like_btn_red" />
        </div>
        <div className="tab-2">
          <p>{activeIndex + 1 + "/" + map_path_to_img[id].length}</p>
        </div>
        <div className="tab-3">
          <img src={mana_pay} alt="mana-pay" />
          <p>지금 마나페이로 구매하고, 마나를 모으세요!</p>
        </div>
      </div>
      <section className="sub-content">
        <div className="inner-content">
          <img className="profile-pic" src={profile_img} alt="profile_img" />
          <h1>니가가라 하와이</h1>
        </div>
        <div className="inner-content">
          <p>
            <span>♥</span> 184 follows
          </p>
          <div className="inner-content">
            <img className="coin" src={mana} alt="coin" />
            <p>521 mana</p>
          </div>
        </div>
      </section>
      <section className="sub-content-1">
        <h1>86 포니엑셀 가져가세요!</h1>
        <div className="inner-content">
          <div className="price-wrap">
            <h1>64,000원</h1>
            <img src={mana_pay} alt="mana-pay-logo" />
          </div>
          <p>♥ 15</p>
        </div>
        <div className="description-wrap">
          <h3>포니 엑셀 피규어 RED / 레드컬러 / 1 :30 스케일 / 완전포장</h3>
          <p>장난감 / 레트로. 3시간 전</p>
        </div>
      </section>
      <section className="text-area">
        <p className="light">관심 12 / 조회 268</p>
        <p>
          현대자동차의 전륜구동 소형 승용차. 개발 프로젝트 코드네임은 X카.[4]
          포니의 후속 모델로 1985년 2월에 출시했으며, 대한민국 최초의 전륜구동
          승용차이다.
        </p>
        <p>
          사이즈 가로 27 세로 50 폭 25 전체적으로 박스 구성품 모두 있으며,
          디테일과 레트로 감성 너무 좋아서 인테리어 감성 최고에요.
        </p>
        <p>
          타 중고사이트에서 116,000원에 팔린 이력 있어요… 쿨거래시 5,000원!!!
        </p>

        <p className="footer">
          <strong>거래팁</strong> 마나페이로 간편하게 송금이 가능해요.{" "}
          <span className="underline">자세히보기</span>
        </p>
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

export default ProductSpec;

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
    .img-map {
      display: flex;
      overflow-y: scroll;

      .product-image {
        width: 100vw;
        max-height: 430px;
        object-fit: cover;
        transition: transform 0.5s ease-in-out;
        transform: translateX(
          -${(props) => props.activeIndex * (500 / props.images.length)}%
        );
      }
    }
    .next {
      position: absolute;
      right: 20px;
      top: 50%;
      color: #999999;
    }
    .prev {
      position: absolute;
      left: 20px;
      top: 50%;
      color: #999999;
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

  .sub-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f7f7f7;
    padding: 15px;
    .inner-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      h1 {
        font-size: 14px;
        font-weight: 600;
      }

      .profile-pic {
        width: 40px;
      }
      .coin {
        width: 20px;
      }
      p {
        font-size: 12px;
        font-weight: 600;
        color: #999999;
        span {
          color: #ff9771;
        }
      }
    }
  }
  .sub-content-1 {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    border-bottom: 1px solid #ededed;
    h1 {
      margin: 0;
      font-weight: 600;
      font-size: 25px;
    }
    p {
      margin: 0;
    }

    .inner-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .price-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        img {
          width: 60px;
        }
      }
      p {
        color: #999999;
        font-weight: 600;
      }
    }
    .description-wrap {
      h3 {
        margin: 10px 0;
        font-size: 14px;
      }
      p {
        color: #999999;
        font-weight: 600;
      }
    }
  }

  .text-area {
    padding: 25px;

    .light {
      color: #999999;
      font-weight: 600;
      margin-bottom: 40px;
      font-size: 14px;
    }
    p {
      color: #000000;
      font-weight: 500;
      font-size: 16px;
    }

    .footer {
      text-align: center;
      padding: 15px 10px;
      margin: 20px 0;
      font-size: 13px;
      background-color: #ededed;
      border-radius: 10px;

      .underline {
        text-decoration: underline;
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
