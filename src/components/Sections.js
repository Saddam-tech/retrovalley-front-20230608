import React from "react";
import styled from "styled-components";
import MovieFigureIcon from "../Icons/MovieFigureIcon";

const Sections = ({ arr }) => {
  return (
    <Container>
      {arr.map((el, i) => (
        <div className="sub-container" key={i}>
          <h3>{el.header}</h3>
          <article>
            {el.icons.map((icon, j) => {
              return (
                <div key={j} className="icon-wrap">
                  {icon.component}
                  <p>{icon.name}</p>
                </div>
              );
            })}
          </article>
        </div>
      ))}
    </Container>
  );
};

export default Sections;

const Container = styled.section`
  .sub-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;

    h3 {
      font-size: 14px;
    }

    article {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      border-top: 1px solid #ededed;
      width: 100%;
      gap: 21px;

      .icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 10px;

        p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
`;
