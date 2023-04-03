import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import checked from "../img/checked.svg";
import unchecked from "../img/unchecked.svg";
import google_social from "../img/google-social.png";
import naver_social from "../img/naver-social.png";
import kakaotalk_social from "../img/kakaotalk-social.png";
import apple_social from "../img/apple-social.png";

const Login = () => {
  return (
    <Container>
      <section className="top-bar">
        <ArrowBackIosIcon />
        <h1>로그인</h1>
      </section>
      <section className="title-bar">
        <h1 className="bold">나만의 레트로 굿즈</h1>
        <h1>너껀 어때?</h1>
      </section>
      <section className="inputs">
        <input type="text" placeholder="아이디 또는 이메일을 입력해주세요." />
        <input type="password" placeholder="비밀번호를 입력해주세요." />
      </section>
      <section className="check-box-holder">
        <div className="check-box-wrap">
          <input type="checkbox" id="checkbox-1" />
          <label for="checkbox-1">자동로그인</label>
        </div>
        <div className="check-box-wrap">
          <input type="checkbox" id="checkbox-2" />
          <label for="checkbox-2">아이디저장</label>
        </div>
      </section>
      <section className="btn-holder">
        <button>로그인</button>
        <div className="button-div"></div>
      </section>
      <h2>간편 로그인</h2>
      <section className="social-login-box">
        <div>
          <img src={naver_social} alt="social-login" />
          <p>네이버 로그인</p>
        </div>
        <div>
          <img src={google_social} alt="social-login" />
          <p>구글 로그인</p>
        </div>
      </section>
      <section className="social-login-box">
        <div>
          <img src={apple_social} alt="social-login" />
          <p>애플 로그인</p>
        </div>
        <div>
          <img src={kakaotalk_social} alt="social-login" />
          <p>카카오톡 로그인</p>
        </div>
      </section>
      <p className="pre-footer">
        계정을 잊으셨나요? <span>ID찾기</span> 또는 <span>비밀번호 찾기</span>
      </p>

      <p className="footer">
        아직 회원이 아니신가요? <span>회원가입 {">"} </span>
      </p>
    </Container>
  );
};

export default Login;

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

  .title-bar {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
    h1 {
      margin: 0;
      font-size: 34px;
      font-weight: 400;
    }
    .bold {
      font-size: 30px;
      font-weight: 700;
    }
  }

  .inputs {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px 20px 10px;
    input {
      border: none;
      background-color: #f1f1f5;
      padding: 20px;
      width: 100%;
      border-radius: 10px;
    }
  }

  .check-box-holder {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;

    .check-box-wrap {
      display: flex;
      align-items: center;
      gap: 2px;

      input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
      }

      input[type="checkbox"]:checked + label:before {
        content: "";
        background-image: url(${checked});
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }

      input[type="checkbox"]:not(:checked) {
        background-image: url(${unchecked});
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
  .btn-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
    position: relative;
    button {
      background-color: #65bc7b;
      border: none;
      outline: none;
      width: 100%;
      padding: 18px;
      border-radius: 10px;
      color: #ffffff;
      font-size: 18px;
      font-weight: 800;
      z-index: 1;
    }
    .button-div {
      position: absolute;
      background: #65bc7b;
      opacity: 0.5;
      width: 90%;
      height: 90%;
      bottom: -10px;
      border-radius: 10px;
    }
  }
  h2 {
    width: 100%;
    text-align: center;
    font-weight: 500;
    margin: 10px 0;
  }
  .social-login-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin: 5px;
      padding: 15px 20px;
      width: 140px;
      border: 1px solid #dbdbdb;
      border-radius: 10px;

      p {
        font-size: 13px;
        margin: 0;
        color: #999999;
      }

      img {
        width: 18px;
      }
    }
  }
  .pre-footer {
    text-align: center;
    margin: 10px 0 50px;
    font-size: 14px;

    span {
      color: #65bc7b;
      font-weight: 800;
    }
  }

  .footer {
    font-size: 13px;
    text-align: center;
    color: #999999;
    font-weight: 600;
    span {
      color: #65bc7b;
      font-weight: 600;
    }
  }
`;
