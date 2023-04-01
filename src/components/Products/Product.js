import React from "react";
import styled from "styled-components";
import nft_sample from "../../img/nft_sample.png";
import user_profile_picture from "../../img/user_profile_picture.png";

const Product = () => {
  return (
    <Container>
      <img className="nft-sample" src={nft_sample} alt="nft-sample" />
      <div className="title">
        <h1>철인28호</h1>
        <p>홍길동 1981년 발행</p>
      </div>
      <div className="owner-info">
        <img
          className="profile-pic"
          src={user_profile_picture}
          alt="profile_pic"
        />
        <div className="user-credentials">
          <p className="bold">만화보는 재미니 558</p>
          <p className="followers">
            Followers <span>♥ 215</span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Product;

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 30px;

  .nft-sample {
    width: 175px;
    height: 175px;
  }

  .title {
    display: flex;
    padding: 10px 0;
    gap: 5px;
    flex-direction: column;

    h1 {
      margin: 0;
      font-size: 19px;
    }
    p {
      margin: 0;
      font-size: 12px;
    }
  }

  .owner-info {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    .profile-pic {
      width: 35px;
      height: 35px;
    }

    .user-credentials {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      p {
        margin: 0;
        font-size: 12px;
      }
      .bold {
        font-weight: 600;
        font-size: 12px;
      }
      .followers {
        color: #999999;
        font-weight: 600;

        span {
          color: #ff9771;
        }
      }
    }
  }
`;
