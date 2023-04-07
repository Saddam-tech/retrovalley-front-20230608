import React from "react";
import styled from "styled-components";
import banner_6 from "../img/banner-6.png";
import banner_5 from "../img/banner-5.png";
import next_btn from "../img/next-btn.png";
import line from "../img/line.png";
const Banner_2 = () => {
  return (
    <Container>
      <img src={banner_6} alt="banner" />
      <div className="sub-content">
        {/* <button className="next-btn">Hellow</button> */}
      </div>
    </Container>
  );
};

export default Banner_2;

const Container = styled.section`
  display: flex;
  position: relative;

  img {
    object-fit: cover;
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
