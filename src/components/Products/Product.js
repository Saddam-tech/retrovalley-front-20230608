import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Product = ({
  id,
  nft_img_src,
  profile_src,
  img_title,
  img_sub_title,
  username,
  followers,
}) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/readcontent/3`)}>
      <img className="nft-sample" src={nft_img_src} alt="nft-sample" />
      <div className="title">
        <h1>{img_title}</h1>
        <p>{img_sub_title}</p>
      </div>
      <div className="owner-info">
        <img className="profile-pic" src={profile_src} alt="profile_pic" />
        <div className="user-credentials">
          <p className="bold">{username}</p>
          <p className="followers">
            Followers <span>♥ {followers}</span>
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
