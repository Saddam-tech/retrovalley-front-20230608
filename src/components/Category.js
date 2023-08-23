import React, { useEffect } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import { useNavigate, useLocation } from "react-router-dom";

const Category = ({ pageName, main, sub }) => {
  const navigate = useNavigate();
  const location = useLocation;
  const MAP_PATH_TO_STRING = {
    단행본: true,
    연재본: true,
    전체: true,
  };

  function handleClick(params) {
    let { name, path } = params;
    const encodedString = MAP_PATH_TO_STRING[name] && encodeURIComponent(name);
    if (MAP_PATH_TO_STRING[name]) {
      navigate(`${path}?string=${encodedString}`);
    } else {
      navigate(path);
    }
  }
  useEffect(() => {
    // auto-scroll page to the top upon view change
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Container>
      <div className="header">
        <div className="inner-wrap">
          <ArrowBackIosIcon onClick={() => navigate(-1)} />
          <h1>{pageName}</h1>
        </div>

        <ShoppingCartTwoToneIcon />
      </div>
      <section className="sub-content">
        {main.map((el, i) => (
          <div onClick={() => handleClick(el)} key={i} className="block">
            <h3>{el.name}</h3>
            <ArrowForwardIosTwoToneIcon
              sx={{ fontSize: "13px", opacity: "0.50" }}
            />
          </div>
        ))}
      </section>

      <section className="sub-content grey-content">
        {sub.length > 0 &&
          sub.map((el, i) => (
            <div key={i} className="block border-white">
              <h3>{el}</h3>
              <ArrowForwardIosTwoToneIcon
                sx={{ fontSize: "13px", color: "#000000" }}
              />
            </div>
          ))}
      </section>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 120px;
    width: 100%;

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

  .sub-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    .block {
      display: flex;
      width: 90%;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ededed;
      font-size: 14px;
      padding: 10px;
    }
  }
  .grey-content {
    justify-content: flex-start;
    margin: 0;
    padding: 10px;
    height: 100vh;
    background-color: #f7f7f7;

    .border-white {
      border-bottom: 1px solid #ffffff;
      padding: 0;
      margin: 0;
      color: #999999;
      font-weight: 200;
    }
  }
`;
