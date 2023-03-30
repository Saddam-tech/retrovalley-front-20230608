import React from "react";
import styled from "styled-components";
import BurgerMenuIcon from "../Icons/BurgerMenuIcon";
import CloseIcon from "@mui/icons-material/Close";
import Sections from "./Sections";
import MovieFigureIcon from "../Icons/MovieFigureIcon";

const section_1 = [
  {
    header: "피규어",
    icons: [
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
    ],
  },
];
const section_2 = [
  {
    header: "토이",
    icons: [
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
    ],
  },
];
const section_3 = [
  {
    header: "어패럴",
    icons: [
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
    ],
  },
];
const section_4 = [
  {
    header: "레전드 IP제품",
    icons: [
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
    ],
  },
];
const section_5 = [
  {
    header: "레전드 IP제품",
    icons: [
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
    ],
  },
];
const section_6 = [
  {
    header: "레전드 IP제품",
    icons: [
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
      {
        name: "영화피규어",
        component: <MovieFigureIcon />,
      },
    ],
  },
];

const Menu = () => {
  return (
    <Container>
      <div className="header">
        <div className="inner-wrap">
          <BurgerMenuIcon />
          <h1>전체메뉴</h1>
        </div>

        <CloseIcon />
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
          <Sections arr={section_5} />
        </section>
        <section>
          <Sections arr={section_5} />
          <Sections arr={section_5} />
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
  padding: 20px;

  .header {
    display: flex;
    align-items: center;
    width: 100%;

    .inner-wrap {
      display: flex;
      align-items: center;
      gap: 30px;
      width: 100%;

      h1 {
        font-size: 24px;
        color: #191919;
      }
    }
  }

  .section-wrapper-div {
    padding-bottom: 90px;

    section {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 10px;
      padding: 0;
    }
  }
`;
