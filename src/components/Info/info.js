import React from "react";
import { social } from "../data/SocialData";
import { info } from "../data/InfoData";
import "./Info.css";

function Info() {
  return (
    <div>
      <div id="info">
        <div className="address">
          {info.map((el, index) => (
            <div>
              {" "}
              <p>
                <span>{el.icon}</span>

                {el.text}
              </p>
            </div>
          ))}
        </div>
        <div className="socials">
          {social.map((el, index) => (
            <ul key={index}>
              <a>{el.icon}</a>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
