import React from "react";
import styled from "styled-components";
import banner_6 from "../img/banner-6.png";

import next_btn from "../img/next-btn.png";
import line from "../img/line.png";
import { useNavigate } from "react-router-dom";
const Banner_2 = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={banner_6} alt="banner" />
      <button onClick={() => navigate("/login")} className="next-btn">
        Start
      </button>
    </Container>
  );
};

export default Banner_2;

const Container = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  img {
    /* object-fit: cover; */
    width: 100%;
    height: 100vh;
  }

  .next-btn {
    position: absolute;
    bottom: 60px;
    width: 85%;
    background-color: #ffc600;
    color: #000000;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
  }
  .line {
    width: 100%;
    height: 10px;
  }
`;
