import React from "react";
import styled from "styled-components";
import retro_toy from "../../img/retro_toy.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import profile_img from "../../img/profile_img.png";
import mana_pay from "../../img/mana_pay.png";
import mana from "../../img/mana.png";
import { useNavigate } from "react-router-dom";
const ProductSpec = () => {
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
      <div className="img-holder">
        <img className="product-image" src={retro_toy} alt="retro-toy" />
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
          <strong>거래팁</strong> 마나페이로 간편하게 송금이 가능해요.
          자세히보기
        </p>
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
    width: 100%;
    .product-image {
      width: 100vw;
      max-height: 330px;
      object-fit: cover;
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
    }
    p {
      color: #000000;
      font-weight: 600;
      font-size: 16px;
    }

    .footer {
      text-align: center;
      padding: 15px 10px;
      margin: 20px 0;
      font-size: 13px;
      background-color: #ededed;
      border-radius: 10px;
    }
  }
`;
