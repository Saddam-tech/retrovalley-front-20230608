import React from "react";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import styled from "styled-components";

const FilterDropDown = ({ dropdown, filterArr }) => {
  return (
    <Container switch={dropdown}>
      {filterArr.map((el, i) => (
        <section key={i} className="main">
          <div className="block">
            <h3>{el}</h3>
            <ArrowForwardIosTwoToneIcon
              sx={{ fontSize: "13px", opacity: "0.50" }}
            />
          </div>
        </section>
      ))}
      <button className="filter-btn">필터 적용</button>
    </Container>
  );
};

export default FilterDropDown;

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: ${(props) => (props.switch ? "360px" : "0")};
  transition: height 0.4s ease;
  clear: both;

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-color: #ffffff;

    .block {
      display: flex;
      width: 80%;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ededed;
      font-size: 14px;
    }
  }

  .filter-btn {
    border-radius: 6px;
    background-color: #ff9771;
    color: #000000;
    font-size: 14px;
    padding: 10px;
    outline: none;
    border: none;
    font-weight: 600;
    width: 85px;
    margin: 20px 45px 45px;
  }
`;
