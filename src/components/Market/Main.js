import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import logo_65bc7b from "../../img/main/logo-65bc7b.png";
import logo_ffffff from "../../img/main/logo-ffffff.png";
import Item from "./Item";
import Carousel from "../Carousel/Carousel";
import { products } from "../../data/products";
import banner_1 from "../../img/banners/banner-1.png";
import banner_2 from "../../img/banners/banner-2.png";
import banner_3 from "../../img/banners/banner-3.png";
import movie_figure_icon from "../../img/movie-figure.svg";
import profile_1 from "../../img/profile_1.png";

const images = [banner_1, banner_2, banner_3];
const links = ["추천상품", "레밸UP", "레밸랭킹"];
const Main = () => {
  const [isTransparent, setIsTransparent] = React.useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

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
          <SearchIcon sx={{ color: !isTransparent ? "000000" : "#ffffff" }} />
          <NotificationsNoneOutlinedIcon
            sx={{ color: !isTransparent ? "000000" : "#ffffff" }}
          />
        </div>
      </div>
      <Carousel images={images} autoplay={true} autoplayDelay={3000} />
      <section className="sub-nav-outer">
        <section className="sub-nav-inner">
          {new Array(6).fill(movie_figure_icon).map((el, i) => (
            <div className="img-wrap">
              <img key={i} src={el} alt="movie-figure" />
              <p>청동거인</p>
            </div>
          ))}
        </section>
      </section>

      <section className="titles">
        <h1>2023년 레트로테크 로보트 한정판 에디션 보고가실께요</h1>
        <div className="mini-nav">
          {links.map((el, i) => (
            <p
              className={activeIndex === i ? "active" : ""}
              key={i}
              onClick={() => setActiveIndex(i)}
            >
              {el}
            </p>
          ))}
        </div>
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

      <section className="events">
        {new Array(5).fill("").map((_, i) => (
          <div key={i} className="event">
            <img src={profile_1} alt="profile_pic" />
            <div className="text-wrap">
              <h1 className="title-h1">
                84태권브이 한정판 에디션 + 제품인증서 양도합니다.
              </h1>
              <div className="inner-wrap">
                <p>강남구 대치2동 / 11일전</p>
                <p>♥ 15</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="more-wrap">
        <p>더보기</p>
        <KeyboardArrowDownIcon sx={{ color: "#999999" }} />
      </div>
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

  .sub-nav-outer {
    overflow-x: scroll;
    width: 100%;
    .sub-nav-inner {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 30px;
      margin: 25px 20px 10px;

      .img-wrap {
        display: flex;
        align-items: center;
        flex-direction: column;

        img {
          width: 40px;
        }

        p {
          margin: 10px;
          font-size: 9px;
          font-weight: 700;
          width: 100%;
        }
      }
    }
    /* For webkit-based browsers */
    ::-webkit-scrollbar {
      height: 5px;
    }

    ::-webkit-scrollbar-track {
      background-color: #313744; /* color of the scrollbar track */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #65bc7b; /* color of the scrollbar thumb */
      border-radius: 10px; /* roundness of the scrollbar thumb */
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* color of the scrollbar thumb on hover */
    }
  }

  .titles {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 60px 20px 0;

    h1 {
      font-size: 25px;
      font-weight: 500;
      margin: 0;
    }

    .mini-nav {
      display: flex;
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 15px;

      p {
        padding: 5px;
      }

      .active {
        border-bottom: 3px solid #000000;
        border-radius: 3px;
      }
    }
  }

  .products {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    gap: 10px;
    flex-wrap: wrap;
    overflow-x: scroll;
  }

  .events {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px 20px 0;
    background-color: #ededed;
    border-radius: 10px;

    .event {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
      margin: 0 18px;
      border-bottom: 1px solid #ffffff;
      img {
        width: 75px;
      }

      .text-wrap {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 15px;
        margin: 20px 0;
        .title-h1 {
          font-size: 13px;
          color: #191919;
          margin: 0;
        }

        .inner-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          p {
            font-size: 12px;
            color: #999999;
            font-weight: 700;
            margin: 0;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  .more-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 120px;

    p {
      color: #999999;
    }
  }
`;
