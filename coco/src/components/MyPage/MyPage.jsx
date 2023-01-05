import React, { Suspense } from "react";
import { Header } from "../Home/Header";
import { Footer } from "../Home/Footer";
import "./MyPage.css";
import fetchData from "../../api/fetchTask";
import { SecondBox } from "./SecondBox";
import {
  IoInformationCircleOutline,
  IoClipboardOutline,
} from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { ThirdBox } from "./ThirdBox";
import { FirstBox } from "./FirstBox";
import Spinner from "react-bootstrap/Spinner";

export const MyPage = () => {
  return (
    <>
      <Header />
      <div className="myPage">
        <h2>
          <span>
            <IoInformationCircleOutline
              size={30}
              color="green"
              style={{ paddingBottom: "3px", marginRight: "8px" }}
            />
          </span>
          회원 정보
        </h2>
        <Suspense fallback={<Spinner />}>
          <GetFirst resource={fetchData("http://127.0.0.1:8000/myPageOne")} />
        </Suspense>
        <h2>
          <span>
            <BsGraphUp
              size={27}
              color="green"
              style={{ paddingBottom: "3px", marginRight: "13px" }}
            />
          </span>
          내 역량
        </h2>
        <Suspense fallback={<Spinner />}>
          <GetSecond resource={fetchData("http://127.0.0.1:8000/myPageTwo")} />
        </Suspense>
        <h2>
          <span>
            <IoClipboardOutline
              size={29}
              color="green"
              style={{ paddingBottom: "3px", marginRight: "13px" }}
            />
          </span>
          내 게시글
        </h2>
        <Suspense fallback={<Spinner />}>
          <GetThird resource={fetchData("http://127.0.0.1:8000/myPageThree")} />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

const GetFirst = ({ resource }) => {
  const res = resource.read();
  return <>{<FirstBox props={res} key={res.id} />}</>;
};

const GetSecond = ({ resource }) => {
  const res = resource.read();
  return <>{<SecondBox props={res} key={res.id} />}</>;
};

const GetThird = ({ resource }) => {
  const res = resource.read();
  return <>{<ThirdBox props={res} key={res.id} />}</>;
};
