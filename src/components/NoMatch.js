import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import logo_main from "../img/main/logo-main.png";

const NoMatch = () => {
  return (
    <Container>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon />
          <h1>뒤로</h1>
        </div>
      </div>
      <section className="content">
        <img src={logo_main} alt="logo" />
        <div className="text-wrap">
          <h1>Sorry</h1>
          <p>더 나은 서비스를 위해 준비중입니다.</p>
        </div>
      </section>
    </Container>
  );
};

export default NoMatch;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  position: relative;

  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 120px;
    padding: 20px 30px;
    position: fixed;
    left: 0;
    top: 0;

    .inner-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 30px;

      h1 {
        font-size: 24px;
        font-weight: 400;
        color: #191919;
      }
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    img {
      width: 300px;
    }
    .text-wrap {
      text-align: center;

      h1 {
        font-size: 24px;
        margin: 0px;
      }
      p {
        font-weight: 600;
      }
    }
  }
`;
