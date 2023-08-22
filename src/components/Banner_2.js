import React from "react";
import styled from "styled-components";
import banner_6 from "../img/main_banner_2.png";

import next_btn from "../img/next-btn.png";
import line from "../img/line.png";
import { useNavigate } from "react-router-dom";
const Banner_2 = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={banner_6} alt="banner" />
      <p className="header">유년의 나를 표현하는 어른이의 장난감</p>
      <div className="wrap">
        <p>어린시절, 골목을 함께 뛰놀았던 나만의 영웅들</p>
        <img
          onClick={() => navigate("/login")}
          className="next-btn"
          src={next_btn}
          alt="next-btn"
        />
      </div>
      <div className="line-holder">
        <hr />
        <hr className="active" />
      </div>
    </Container>
  );
};

export default Banner_2;

const Container = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  .header {
    position: absolute;
    top: 100px;
    font-size: 24px;
    color: #ffffff;
    opacity: 0.6;
    width: 200px;
    text-align: center;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }

  .wrap {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    bottom: 80px;
    .next-btn {
      width: 50px;
      height: 50px;
    }
    p {
      color: #ffffff;
    }
  }

  .line-holder {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 40px;
    width: 80%;
    hr {
      background-color: #afaeae;
      opacity: 0.4;
      border: none;
      width: 100%;
      height: 5px;
    }
    .active {
      background-color: #ffffff;
      opacity: 1;
    }
  }
`;
