import React from "react";
import styled from "styled-components";
import banner_5 from "../img/banner-5.png";
import next_btn from "../img/next-btn.png";
import line from "../img/line.png";
import { useNavigate } from "react-router-dom";
const Banner_1 = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={banner_5} alt="banner" />
      <button onClick={() => navigate("/start")} className="next-btn">
        Hellow
      </button>
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

  .next-btn {
    position: absolute;
    bottom: 60px;
    width: 85%;
    background-color: #1d2089;
    color: #ffffff;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 600;
  }

  .line {
    width: 100%;
    height: 10px;
  }
`;
