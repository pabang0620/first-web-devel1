import React from "react";
import Weather from "../weather/Weather";
import News from "../news/News";
import "./Main.css";
import Navbar from "../컴포넌트/Navbar";
import Chart from "../Ranking/Chart";
import Ranking from "../Ranking/Ranking";
import Raineffect from "../Ranking/Raineffect";
import Footer from "../컴포넌트/Footer";
import { useState } from "react";

const Main = () => {
  const [newsModal, setNewsModal] = useState(false);
  const openModal = () => {
    setNewsModal(true);
    if (newsModal) {
      setNewsModal(false);
    }
  };
  return (
    <>
      <button onClick={openModal} className="newsModalButton">
        뉴스
      </button>
      {newsModal === true && <News />}
      {/* <Navbar /> */}
      <Weather />

      <Chart />
      {/* <Ranking /> */}
      {/* <div className="justCenter">
        <Raineffect />
        <Footer />
      </div> */}
    </>
  );
};

export default Main;
