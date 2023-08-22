import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Item = ({
  id,
  price,
  description,
  img_src,
  img_width,
  img_height,
  alternative,
  disallow_navigate,
}) => {
  const navigate = useNavigate();
  function handleNavigate() {
    if (disallow_navigate) {
      navigate("/home/nomatch");
      return;
    }
    navigate(
      alternative !== false
        ? `/readcontent/${alternative}`
        : `/products/product/${id}`
    );
  }
  return (
    <Container
      img_width={img_width}
      img_height={img_height}
      onClick={handleNavigate}
    >
      <img src={img_src} alt="nft-sample" />
      <div className="title">
        {price && <h1>{price}</h1>}

        <p>{description}</p>
      </div>
    </Container>
  );
};

export default Item;

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 30px;

  img {
    width: ${(props) => props.img_width};
    height: ${(props) => props.img_height};
    border-radius: 10px;
  }

  .title {
    display: flex;
    padding: 10px 0;
    gap: 5px;
    flex-direction: column;

    h1 {
      margin: 5px 0;
      font-size: 19px;
      font-weight: 500;
    }
    p {
      margin: 0;
      font-weight: 400;
      max-width: 130px;
      font-size: 13px;
    }
  }
`;
