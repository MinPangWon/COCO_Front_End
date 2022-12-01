import React from "react";
import { Header } from "../../Home/Header";
import { Footer } from "../../Home/Footer";
import "./BD.css";
import {
  BsCode,
  BsCodeSlash,
  BsFillEyeFill,
  BsFillChatSquareDotsFill,
  BsFillHeartFill,
} from "react-icons/bs";

export const BoardDetail = () => {
  return (
    <>
      <Header />
      <div className="boardDetail">
        <div className="BDtitle">
          <h2>No.1 모르겠어요!</h2>
          <div className="BD_idAndTime">
            <h3>작성자 : sncalphs</h3>
            <h3>2022.11.30</h3>
          </div>
        </div>

        <div className="BDsubTitle">
          <div id="bun1">
            <div className="BDun">
              <BsFillEyeFill size={25} color="gray" />
              <p>25</p>
            </div>

            <div className="BDun">
              <BsFillChatSquareDotsFill size={20} color="gray" />
              <p>2</p>
            </div>
          </div>

          <div id="bun2">
            <div className="BDun">
              <BsFillHeartFill size={23} />
              <p>6</p>
            </div>
          </div>
        </div>

        <div className="BDContent">
          <div className="BDTxt">
            <p>
              아무리 풀어도 모르겠어요
              <br />
              고수님들 도와주세요!
            </p>
          </div>

          <div className="BDCode">
            <div className="BD_codeTop">
              <BsCode size={33} />
              <h2>CODE HERE</h2>
              <BsCodeSlash size={33} />
            </div>

            <div className="BD_showCode">
              <p>
                n = int(input()) <br /> print(n+m)
              </p>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
