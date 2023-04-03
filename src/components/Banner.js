import React from "react";
import styled from "styled-components";
import banner_1 from "../img/banner-1.png";
import banner_2 from "../img/banner-2.png";
import next_btn from "../img/next-btn.png";
import line from "../img/line.png";
const Banner = () => {
  return (
    <Container>
      <img src={banner_1} alt="banner" />
      <div className="sub-content">
        <p>어린시절, 골목을 함께 뛰놀았던 나만의 영웅들</p>
        <img className="next-btn" src={next_btn} alt="" />
      </div>
    </Container>
  );
};

export default Banner;

const Container = styled.section`
  display: flex;
  position: relative;

  img {
    object-fit: contain;
    width: 100%;
  }

  .sub-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom: 50px;

    .next-btn {
      width: 55px;
    }

    p {
      font-size: 13px;
      color: #ffffff;
    }
  }
  .line {
    width: 100%;
    height: 10px;
  }
`;
