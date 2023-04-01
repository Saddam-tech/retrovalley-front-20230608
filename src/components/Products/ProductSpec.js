import React from "react";
import styled from "styled-components";
import retro_toy from "../../img/retro_toy.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const ProductSpec = () => {
  return (
    <Container>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon />
          <h1>레트로토이</h1>
        </div>
        <ShoppingCartTwoToneIcon />
      </div>
      <div className="img-holder">
        <img className="product-image" src={retro_toy} alt="retro-toy" />
      </div>
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
      max-height: 350px;
      object-fit: cover;
    }
  }
`;
