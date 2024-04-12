import React from "react";
import "./Features.css";
import { data } from "../data/Featuresdata";

function Features() {
  return (
    <div id="features">
      <section class="features_section">
        <div className="features-header">
          <h1> Our Features </h1>
          <p>
            We help in all kind of financial problem in all kind of financial
            problemin <br />
            all kind of financial problem{" "}
          </p>
          <div className="line"> </div>
        </div>
        <div className="features-content">
          {data.map((el, index) => (
            <div key={index} className="content-con">
              {el.icon}
              <h2>{el.text}</h2>
              <p>{el.parag}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Features;
