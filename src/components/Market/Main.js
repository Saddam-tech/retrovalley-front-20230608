import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import logo_65bc7b from "../../img/main/logo-65bc7b.png";
import main_logo from "../../img/main-logo.png";
import logo_ffffff from "../../img/main/logo-ffffff.png";
import Item from "./Item";
import Carousel from "../Carousel/Carousel";
import { brand_items, items, items_1, items_2 } from "../../data/products";
import banner_1 from "../../img/banners/banner-1.png";
import banner_2 from "../../img/banners/banner-2.png";
import banner_3 from "../../img/banners/banner-3.png";
import banner_7 from "../../img/banners/banner-7.png";
import banner_8 from "../../img/banners/banner-8.png";
import banner_9 from "../../img/banners/nike-6.png";
import banner_10 from "../../img/banners/nike-7.png";
import banner_11 from "../../img/banners/nike-8.png";
import banner_12 from "../../img/banners/nike-9.png";
import movie_figure_icon from "../../img/webtoon-icon.png";
import movie_figure_icon_2 from "../../img/webtoon-icon-2.png";
import check_orange from "../../img/checked.svg";
import AnimatedCarousel from "../Carousel/AnimatedCarousel";
import { useNavigate } from "react-router-dom";

const images = [banner_7, banner_8, banner_1, banner_2, banner_3];
const banners = [banner_9, banner_10, banner_11, banner_12];

const links = ["추천상품", "레밸UP", "레밸랭킹"];
const categories = [
  "나이키",
  "스톤아일랜드",
  "환경부",
  "Apple 아이맥 5K",
  "나이키",
  "스톤아일랜드",
  "환경부",
  "Apple 아이맥 5K",
  "나이키",
  "스톤아일랜드",
  "환경부",
  "Apple 아이맥 5K",
];
const map_item_names = [
  "피규어",
  "토이",
  "웹툰",
  "고전만화",
  "레고",
  "레전드IP",
  "명품관",
  "베어브릭",
];
const map_item_names_2 = [
  "FIGURE",
  "TOY",
  "TOON",
  "MANA",
  "LEGO",
  "LEGEND",
  "LUXURY",
  "BEAR",
];
const navigation_links = [
  "/home/content/figure",
  "/home/content/toy",
  "/home/content/webtoon",
  "/home/content/comics",
  "/home/products?string=단행본",
  "/home/comics",
];
const Main = () => {
  const navigate = useNavigate();
  const [isTransparent, setIsTransparent] = React.useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  const handleNav = (index) => {
    if (index === 2) {
      navigate("/home/nomatch");
    } else {
      setActiveIndex(index);
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
          {/* <MenuTwoToneIcon
            onClick={() => navigate("/home/menu")}
            sx={{ color: !isTransparent ? "000000" : "#65bc7b", fontSize: 35 }}
          /> */}
          <img
            src={main_logo}
            onClick={() => navigate("/home/main")}
            className="main-logo"
            alt="main-logo"
          />
          <img
            className="sub-logo"
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
          {new Array(6).fill("*").map((el, i) => (
            <div key={i} className="img-wrap">
              <div
                onClick={() => navigate(navigation_links[i])}
                className="img-container"
              >
                <img
                  src={require(`../../img/link-item-${i}.png`)}
                  alt="movie-figure"
                />
                {/* <div className="backgroundC">
                  <p className="hover-text">{map_item_names_2[i]}</p>
                </div> */}
              </div>
              <p>{map_item_names[i]}</p>
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
              onClick={() => handleNav(i)}
            >
              {el}
            </p>
          ))}
        </div>
      </section>
      {activeIndex === 0 && (
        <>
          <section className="products">
            {items.map((el, i) => (
              <Item
                key={i}
                id={i}
                img_width="175px"
                img_height="175px"
                price={el.price}
                description={el.description}
                img_src={require(`../../img/product_img/${el.img_src}.png`)}
                alternative={false}
              />
            ))}
          </section>
          <section className="titles-1">
            <h1>고전만화, 소설..</h1>
            <p>아직도 모르는건 아싸~!!</p>
          </section>

          <section className="search-bar">
            <div className="search-content">
              <SearchIcon sx={{ color: "#999999" }} />
              <input type="text" placeholder="만화와 소설을 검색해보세요" />
            </div>
          </section>

          <section className="slider-bar">
            <section className="tape">
              {categories.map((el, i) => (
                <p
                  onClick={() => setActiveCategory(i)}
                  className={activeCategory === i ? "active" : ""}
                  key={i}
                >
                  {el}
                </p>
              ))}
            </section>
          </section>
          <section className="filters">
            <div className="more-wrap">
              <p>더보기</p>
              <KeyboardArrowDownIcon sx={{ color: "#999999" }} />
            </div>
            <div className="more-wrap right-side">
              <p>나의 팔로잉</p>
              <img src={check_orange} alt="checkbox" />
            </div>
          </section>
          <section className="sale-section-wrapper">
            {new Array(2).fill("*").map((el, i) => (
              <section key={i} className="sale-section">
                <div className="header-title">
                  <div className="wrap-1">
                    <img
                      src={[movie_figure_icon, movie_figure_icon_2][i]}
                      alt="movie-figure-icon"
                    />
                    <div className="wrap-2">
                      <h1>{["인기 웹툰", "고전 만화"][i]}</h1>
                      <p>Nike. 154,981개</p>
                    </div>
                  </div>
                  <button>팔로우</button>
                </div>
                <section className="slide-items">
                  <div className="tape">
                    {i === 0 &&
                      items_1.map((el, _i) => (
                        <Item
                          key={_i}
                          img_width="130px"
                          img_height="130px"
                          id={_i}
                          description={el.description}
                          img_src={require(`../../img/comics/comics-${el.index}.png`)}
                          alternative={el.index}
                        />
                      ))}
                    {i === 1 &&
                      items_2.map((el, _i) => (
                        <Item
                          key={_i}
                          img_width="130px"
                          img_height="130px"
                          id={_i}
                          description={el.description}
                          img_src={require(`../../img/comics/comics-${el.index}.png`)}
                          alternative={el.index}
                        />
                      ))}
                  </div>
                </section>
              </section>
            ))}
          </section>
        </>
      )}

      {activeIndex === 1 && (
        <>
          <section className="events">
            {new Array(5).fill("").map((_, i) => (
              <div key={i} className="event">
                <img
                  src={require(`../../img/profile_${i + 1}.png`)}
                  alt="profile_pic"
                />
                <div className="text-wrap">
                  <h1>84태권브이 한정판 에디션 + 제품인증서 양도합니다.</h1>
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
          <section className="titles-2">
            <h1>최고의 레트로 브렌드 팔로우하면 이득!</h1>
            <p>브랜드와 팔로우하고, 나만의 레트로를 자랑하면, 꿀상품 뚝뚝~!</p>
          </section>
          <section className="animated-carousel">
            <AnimatedCarousel
              images={banners}
              autoplay={true}
              autoplayDelay={3000}
            />
          </section>
          <section className="search-bar">
            <div className="search-content">
              <SearchIcon sx={{ color: "#999999" }} />
              <input type="text" placeholder="브랜드를 검색해보세요" />
            </div>
          </section>

          <section className="slider-bar">
            <section className="tape">
              {categories.map((el, i) => (
                <p
                  onClick={() => setActiveCategory(i)}
                  className={activeCategory === i ? "active" : ""}
                  key={i}
                >
                  {el}
                </p>
              ))}
            </section>
          </section>
          <section className="filters">
            <div className="more-wrap">
              <p>더보기</p>
              <KeyboardArrowDownIcon sx={{ color: "#999999" }} />
            </div>
            <div className="more-wrap right-side">
              <p>나의 팔로잉</p>
              <img src={check_orange} alt="checkbox" />
            </div>
          </section>
          <section className="sale-section-wrapper">
            {brand_items.map((el, i) => (
              <section key={i} className="sale-section">
                <div className="header-title">
                  <div className="wrap-1">
                    <img
                      src={require(`../../img/brand-logo-${i + 1}.png`)}
                      alt="movie-figure-icon"
                    />
                    <div className="wrap-2">
                      <h1>{el.brand_name_kr}</h1>
                      <p>{el.brand_name_en}. 154,981개</p>
                    </div>
                  </div>
                  <button>팔로우</button>
                </div>
                <section className="slide-items">
                  <div className="tape">
                    {new Array(3).fill("*").map((_el, _i) => (
                      <Item
                        key={_i}
                        img_width="130px"
                        img_height="130px"
                        id={_i}
                        price={el.description[_i]["price"]}
                        description={el.description[_i]["description"]}
                        img_src={require(`../../img/${i}-${el.name}-${
                          _i + 1
                        }.png`)}
                        alternative={false}
                      />
                    ))}
                  </div>
                </section>
              </section>
            ))}
          </section>
        </>
      )}
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

  .animated-carousel {
    margin: 20px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 35px 0 15px;
    position: fixed;
    background-color: ${(props) =>
      props.isTransparent ? "transparent" : "#ffffff"};
    top: 0;
    left: 0;
    z-index: 1;

    .inner-wrap {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
      margin: 0 20px;
      .sub-logo {
        width: 110px;
      }
      .main-logo {
        width: 40px;
      }
    }
  }

  .sub-nav-outer {
    /* overflow-x: scroll; */
    width: 100%;
    .sub-nav-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      margin: 25px 26px 0px;

      .img-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .img-container {
          /* width: 100%; */
          /* position: relative; */
          /* overflow: hidden; */
          /* background-color: transparent; */
          /* .backgroundC {
            position: absolute;
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            top: 0;
            .hover-text {
              text-align: center;
              color: #ffffff;
              font-weight: 900;
              font-family: "Cooper Std";
              font-size: 9px;
              margin: 0;
            }
          } */
          img {
            /* border-radius: 50%; */
            /* filter: brightness(0.8); */
            width: 40px;
          }
        }

        p {
          margin: 10px;
          font-size: 15px;
          font-weight: 500;
          color: #999999;
          width: 100%;
          text-align: center;
          white-space: nowrap;
          margin: 5px 0;
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
    justify-content: space-around;
    padding: 0 10px;
    /* margin-bottom: 120px; */
    flex-wrap: wrap;
    overflow-x: scroll;
  }
  .products::-webkit-scrollbar {
    height: 0;
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
        h1 {
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
    p {
      color: #999999;
    }
  }
  .titles-1 {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 90%;

    h1 {
      font-size: 39px;
      font-weight: 500;
      margin: 10px 0 0 12px;
      color: #313744;
    }

    p {
      font-size: 27px;
      text-align: center;
      margin: 12px;
      line-height: 24px;
      color: #313744;
    }
  }
  .titles-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 240px;

    h1 {
      font-size: 29px;
      font-weight: 500;
      margin: 40px 0 10px;
    }

    p {
      font-size: 18px;
      text-align: center;
      max-width: 170px;
      line-height: 24px;
      color: #999999;
    }
  }

  .search-bar {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #ededed;
    border-radius: 10px;
    padding: 10px;
    width: 80%;

    .search-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      input {
        border: none;
        background-color: #ededed;
      }
      input:focus {
        border: none;
        outline: none;
      }
    }
  }
  .slider-bar {
    width: 100%;
    overflow-x: scroll;
    .tape {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 10px;
      gap: 10px;
      p {
        white-space: nowrap;
        padding: 8px 30px;
        background-color: #313744;
        color: #ffffff;
        border-radius: 30px;
      }
      .active {
        background-color: #65bc7b;
      }
    }
  }
  .slider-bar::-webkit-scrollbar {
    height: 0;
  }
  .filters {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #ededed;
    width: 80%;

    .more-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        color: #999999;
      }
      img {
        width: 20px;
      }
    }
    .right-side {
      gap: 12px;

      p {
        color: #000000;
        font-weight: 400;
      }
    }
  }

  .sale-section-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 170px;
    .sale-section {
      .header-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 15px;

        .wrap-1 {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 20px;
          width: 100%;
          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 1px solid #eaeaea;
          }
          .wrap-2 {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;

            h1 {
              font-size: 18px;
              font-weight: 700;
              margin: 2px;
            }
            p {
              font-size: 12px;
              font-weight: 900;
              color: #999999;
              margin: 2px;
            }
          }
        }
        button {
          white-space: nowrap;
          padding: 5px 20px;
          color: #ffffff;
          background-color: #ff9771;
          font-weight: 700;
          border: none;
          border-radius: 10px;
        }
        .disabled {
          color: #999999;
          background-color: #ededed;
        }
      }
      .slide-items {
        overflow-x: scroll;
        margin: 10px;
        .tape {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin: 10px;
          gap: 10px;
        }
      }
      .slide-items::-webkit-scrollbar {
        height: 0;
      }
    }
  }
`;
