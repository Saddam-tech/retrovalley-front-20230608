import React from "react";
import styled from "styled-components";
import banner_5 from "../img/main_banner_1.png";
import next_btn from "../img/next-btn.png";
import { useNavigate } from "react-router-dom";
const Banner_1 = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={banner_5} alt="banner" />
      <div className="wrap">
        <p>어린시절, 골목을 함께 뛰놀았던 나만의 영웅들</p>
        <img
          onClick={() => navigate("/login")}
          className="next-btn"
          src={next_btn}
          alt="next-btn"
        />
      </div>
      {/* <div className="line-holder">
        <hr className="active" />
        <hr />
      </div> */}
    </Container>
  );
};

export default Banner_1;

const Container = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
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
    bottom: 60px;
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
    bottom: 20px;
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
