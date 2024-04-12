import React from "react";
import "./Home.css";
import Info from "../Info/info";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";

function Home() {
  return (
    <div>
      <div
        id="home"
        style={{
          backgroundImage: 'url("assets/pexels-paul-loh-233698.jpg") ',

          zIndex: "-1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Info />
        <Navbar />
        <div className="home-content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Home;
