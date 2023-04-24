import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Sections from "./Sections";
import MovieFigureIcon from "../Icons/MovieFigureIcon";
import MenuIcon from "@mui/icons-material/Menu";
import category_0 from "../img/category/category-0.png";
import category_1 from "../img/category/category-1.png";
import category_2 from "../img/category/category-2.png";
import category_3 from "../img/category/category-3.png";
import category_4 from "../img/category/category-4.png";
import category_5 from "../img/category/category-5.png";
import category_6 from "../img/category/category-6.png";
import category_7 from "../img/category/category-7.png";
import category_8 from "../img/category/category-8.png";
import category_9 from "../img/category/category-9.png";
import category_10 from "../img/category/category-10.png";
import category_11 from "../img/category/category-11.png";
import category_12 from "../img/category/category-12.png";
import category_13 from "../img/category/category-13.png";
import category_14 from "../img/category/category-14.png";
import category_15 from "../img/category/category-15.png";
import category_16 from "../img/category/category-16.png";
import category_17 from "../img/category/category-17.png";
import category_18 from "../img/category/category-18.png";
import category_19 from "../img/category/category-19.png";
import category_20 from "../img/category/category-20.png";
import category_21 from "../img/category/category-21.png";

const section_1 = [
  {
    header: "피규어",
    icons: [
      {
        name: "영화피규어",
        url: category_0,
      },
      {
        name: "액션피규어",
        url: category_1,
      },
      {
        name: "로봇피규어",
        url: category_2,
      },
    ],
  },
];
const section_2 = [
  {
    header: "토이",
    icons: [
      {
        name: "레트로토이",
        url: category_3,
      },
      {
        name: "아트토이",
        url: category_4,
      },
    ],
  },
];
const section_3 = [
  {
    header: "어패럴",
    icons: [
      {
        name: "마나가게굿즈 ",
        url: category_5,
      },
    ],
  },
];
const section_4 = [
  {
    header: "레전드 IP제품",
    icons: [
      {
        name: "태권브이",
        url: category_6,
      },
      {
        name: "황금날개",
        url: category_7,
      },
      {
        name: "청동거인",
        url: category_8,
      },
      {
        name: "마루치아라치",
        url: category_9,
      },
      {
        name: "전자인간337",
        url: category_10,
      },
    ],
  },
];
const section_5 = [
  {
    header: "레고",
    icons: [
      {
        name: "레고",
        url: category_11,
      },
    ],
  },
];
const section_6 = [
  {
    header: "베어브릭",
    icons: [
      {
        name: "베어브릭",
        url: category_12,
      },
    ],
  },
];
const section_7 = [
  {
    header: "명품관",
    icons: [
      {
        name: "작가소장품",
        url: category_13,
      },
      {
        name: "마나가게 아트토이",
        url: category_14,
      },
    ],
  },
];
const section_8 = [
  {
    header: "북스",
    icons: [
      {
        name: "웹툰",
        url: category_15,
        path: "/readcontent/0",
      },
      {
        name: "웹소설",
        url: category_16,
        path: "/readcontent/1",
      },
      {
        name: "고전 ebook",
        url: category_17,
        path: "/readcontent/1",
      },
    ],
  },
];
const section_9 = [
  {
    header: "레트로북스",
    icons: [
      {
        name: "레고",
        url: category_18,
      },
      {
        name: "황금날개",
        url: category_19,
      },
      {
        name: "청동거인",
        url: category_20,
      },
      {
        name: "마루치아라치",
        url: category_21,
      },
    ],
  },
];

const Menu = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="header">
        <div className="inner-wrap">
          <MenuIcon sx={{ fontSize: "39px", color: "#65bc7b" }} />
          <h1>전체메뉴</h1>
        </div>

        <CloseIcon
          onClick={() => navigate("/home/main")}
          sx={{ color: "#999999" }}
        />
      </div>

      <div className="section-wrapper-div">
        {/* sections */}
        <section>
          <Sections arr={section_1} />
        </section>
        <section>
          <Sections arr={section_2} />
          <Sections arr={section_3} />
        </section>
        <section>
          <Sections arr={section_4} />
        </section>
        <section>
          <Sections arr={section_5} />
          <Sections arr={section_6} />
        </section>
        <section>
          <Sections arr={section_7} />
        </section>
        <section>
          <Sections arr={section_8} />
        </section>
        <section>
          <Sections arr={section_9} />
        </section>
      </div>
      {/* sections */}
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: relative;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 120px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;

    .inner-wrap {
      display: flex;
      align-items: center;
      gap: 30px;

      h1 {
        font-size: 24px;
        color: #191919;
      }
    }
  }

  .section-wrapper-div {
    padding-top: 90px;
    padding-bottom: 180px;

    section {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 10px;
      padding: 0;
    }
  }
`;
