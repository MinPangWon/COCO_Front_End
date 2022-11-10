import React from "react";
import "./Problems.css";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export const ProblemBox = (info) => {
  return (
    <div className="problemsBox">
      <div className="problemsName">
        <div>No.{info.info.num}</div>
        <div>{info.info.title}</div>
      </div>
      <div className="problemsRate">{Rating(`${info.info.rate}`)}</div>
      <div
        className="problemsAns"
        style={{ color: info.info.ans >= 40 ? "skyblue" : "rgb(218, 55, 55)" }}
      >
        {info.info.ans}%
      </div>
    </div>
  );
};

const ARRAY = [0, 1, 2, 3, 4];

function Rating(n) {
  const colored = [false, false, false, false, false];
  for (let i = 0; i < n; i++) {
    colored[i] = true;
  }

  return (
    <Wrap>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="40"
              className={colored[el] && "yellowStar"}
            />
          );
        })}
      </Stars>
    </Wrap>
  );
}

export default Rating;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    margin: 0 10px;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
