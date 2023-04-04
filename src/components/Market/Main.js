import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import logo_65bc7b from "../../img/main/logo-65bc7b.png";
import logo_ffffff from "../../img/main/logo-ffffff.png";
import Item from "./Item";
import Carousel from "../Carousel/Carousel";
import { products } from "../../data/products";
import AutoRotatingCarouselDiv from "../Carousel/Carousel";
import banner_1 from "../../img/banners/banner-1.png";
import banner_2 from "../../img/banners/banner-2.png";
import banner_3 from "../../img/banners/banner-3.png";

const images = [banner_1, banner_2, banner_3];

const Main = () => {
  const [isTransparent, setIsTransparent] = React.useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container isTransparent={isTransparent}>
      <div className="header">
        <div className="inner-wrap">
          <MenuTwoToneIcon
            sx={{ color: !isTransparent ? "000000" : "#65bc7b", fontSize: 35 }}
          />
          <img
            src={isTransparent ? logo_ffffff : logo_65bc7b}
            alt="logo_65bc7b"
          />
        </div>
        <div className="inner-wrap">
          <SearchIcon sx={{ color: !isTransparent ? "000000" : "#000000" }} />
          <NotificationsNoneOutlinedIcon
            sx={{ color: !isTransparent ? "000000" : "#000000" }}
          />
        </div>
      </div>

      <section className="carousel">
        <Carousel images={images} autoplay={true} autoplayDelay={3000} />;
      </section>

      <section className="products">
        {products.map((el, i) => (
          <Item
            key={i}
            id={i}
            img_title={el.img_title}
            img_sub_title={el.img_sub_title}
            username={el.username}
            followers={el.followers}
            nft_img_src={require(`../../img/nft_sample_${i}.png`)}
            profile_src={require(`../../img/profile_picture_${i}.png`)}
          />
        ))}
      </section>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-color: "#f6f6f6";

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 35px 0 15px;
    position: fixed;
    background-color: ${(props) =>
      props.isTransparent ? "transparent" : "#f6f6f6"};
    top: 0;
    left: 0;
    z-index: 1;

    .inner-wrap {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
      margin: 0 20px;
      img {
        width: 110px;
      }
    }
  }

  .products {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 10px;
    gap: 10px;
    flex-wrap: wrap;
    overflow-x: scroll;
    padding-bottom: 120px;
  }
`;
