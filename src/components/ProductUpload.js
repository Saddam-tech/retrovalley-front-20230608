import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import camera from "../img/camera.png";
import mana_pay from "../img/mana_pay.png";
import checked from "../img/checked.svg";
import { useNavigate } from "react-router-dom";

const ProductUpload = () => {
  const [pictures, setPicture] = useState(new Array(9).fill(""));
  const navigate = useNavigate();

  return (
    <Container>
      <section className="top-bar">
        <ArrowBackIosIcon onClick={() => navigate(-1)} />
        <h1>상품등록</h1>
      </section>
      <section className="overflow-x-scroll">
        <section className="img-upload">
          <div className="upload-btn">
            <label htmlFor="file">
              <img src={camera} alt="camera-icon" />
              <p>0/10</p>
            </label>
            <input type="file" id="file" hidden />
          </div>
          {pictures.map((el, i) => (
            <div key={i} className="img-holder">
              {el && <img key={i} src={el} alt={`upload-${i}`} />}
            </div>
          ))}
        </section>
      </section>
      <section className="inputs">
        <input type="text" placeholder="글 제목" />
        <input type="text" placeholder="카테고리" />
        <input type="text" placeholder="# 해시태크" />
        <div className="price-wrap">
          <input type="text" placeholder="₩ 가격" />
          <div className="inner-wrap">
            <label htmlFor="checkbox">배송비포함</label>
            <input type="checkbox" id="checkbox" />
          </div>
        </div>
      </section>
      <div className="option-box">
        <button>옵션선택</button>
        <p>1개 / 중고상품 / 교환불가</p>
      </div>
      <textarea
        className="warning-text"
        type="text"
        placeholder="상품의 게시글 내용을 입력해주세요. (판매 금지 물품은 <br> 게시가 제한될 수 있습니다.)"
      />
      <p className="text">
        - 상품 구매시기 <br />- 브랜드 / 모델명 <br />- 제품의 상태 (사용감 및
        하자유무 등) <br />- 구매자와 판매자 모두 믿고 거래할 수 있도록, 자세한
        정보와 다양한 각도의 상품 사진을 올려주세요.
      </p>

      <section className="footer">
        <div className="btn-holder">
          <div className="payment-select">
            <h3>안전결제 환영</h3>
            <img className="manapay" src={mana_pay} alt="mana_pay" />
            <p>마나페이</p>
            <img className="tick" src={checked} alt="checkbox" />
          </div>
          <button>등록</button>
        </div>
        <p className="ending-p">
          등록된 상품에 안전결재 알약 배지가 표시되요. <span>자세히</span>
        </p>
      </section>
    </Container>
  );
};

export default ProductUpload;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 25px;

  .top-bar {
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
      font-weight: 300;
      font-size: 21px;
    }
  }
  .overflow-x-scroll {
    overflow-x: scroll;
    height: 80px;
    .img-upload {
      display: flex;
      align-items: center;
      width: 200%;
      gap: 7px;

      .upload-btn {
        padding: 5px 12px;
        background-color: #ededed;
        border-radius: 10px;
        label {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          img {
            width: 40px;
          }
          p {
            margin: 0;
            font-size: 12px;
            color: #999999;
          }
        }
      }

      .img-holder {
        border: 1px solid #ededed;
        width: 60px;
        height: 60px;
        border-radius: 10px;
      }
    }
  }

  .inputs {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    margin: 20px 0;

    input {
      border: none;
      border-bottom: 1px solid #ededed;
      width: 100%;
      padding: 10px 0;
      font-size: 15px;
    }

    .price-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .inner-wrap {
        display: flex;
        font-size: 12px;
        border: none;
        border-bottom: 1px solid #ededed;
        padding: 10px 0;

        label {
          width: 100px;
        }
        input[type="checkbox"] {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
  .option-box {
    display: flex;
    align-items: center;
    gap: 15px;
    button {
      padding: 3px;
      border-radius: 4px;
      border: 1px solid #ededed;
      background-color: #ffffff;
    }
    p {
      font-size: 12px;
      color: #999999;
      padding: 10px;
    }
  }

  .warning-text {
    font-size: 15px;
    border: none;
    border-bottom: 1px solid #ededed;
    margin: 20px 0;
  }
  .text {
    font-size: 15px;
    color: #999999;
    line-height: 30px;
  }
  .footer {
    border-top: 1px solid #ededed;
    margin: 10px 0;

    .ending-p {
      font-size: 14px;
      text-align: center;
      margin-top: 20px;

      span {
        font-weight: 700;
        text-decoration: underline;
      }
    }

    .btn-holder {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      width: 100%;

      button {
        width: 120px;
        padding: 10px 30px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #65bc7b;
        color: #ffffff;
        font-weight: 600;
        font-size: 18px;
      }

      .payment-select {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 9px;
        border: 1px solid #65bc7b;
        border-radius: 5px;
        padding: 1px;

        h3 {
          font-size: 12px;
        }
        p {
          font-size: 12px;
          color: #999999;
        }
        .manapay {
          width: 50px;
        }
        .tick {
          width: 20px;
        }
      }
    }
  }
`;
