import React, { Suspense } from "react";
import "./Home.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { SlPin } from "react-icons/sl";
import { Block } from "./Block";
import Spinner from "react-bootstrap/esm/Spinner";
import fetchData from "../../api/fetchTask";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="homebody">
        <div className="home-body">
          <div className="txt-box">
            <h2 id="t1">코딩, 초보자라면?</h2>
            <h2 id="t2">
              Coding Coach,
              <span id="t2-1"> COCO</span>
            </h2>
          </div>
          <Suspense fallback={<Spinner />}>
            <GetHot resource={fetchData("http://127.0.0.1:8000/hot")} />
          </Suspense>

          <div className="ad-box">
            <img
              src="/image/ad.png"
              alt=""
              loading="lazy"
              style={{ borderRadius: "30px" }}
              width="100%"
            />
          </div>

          <div className="notice">
            <div className="title-notice">
              <SlPin size={30} color="#00ff00" />
              <h2>Notice!</h2>
            </div>
            <div className="body-notice">
              <li>ver 0.1.0 - Beta Open!</li>
              <li>November 11, midterm presentation</li>
              <li>New Question! : No.01 더하기 문제</li>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const GetHot = ({ resource }) => {
  const HOT = resource.read();
  console.log(HOT);
  return <>{<Block info={HOT} key={HOT.id} />}</>;
};
