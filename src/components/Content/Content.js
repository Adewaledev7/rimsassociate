import React from "react";
import "./Content.css";
import { TypeAnimation } from "react-type-animation";
import { HashLink as Link } from "react-router-hash-link";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
const iconStyle = (Icon) => <Icon size="1.5rem" color="white" />;

function Content() {
  return (
    <div>
      {" "}
      <section class="content_section">
        <div class="content_main">
          <h1>
            RIMS <span>ASSOCIATE</span>
          </h1>
          <h2>
            Consulting on{" "}
            <span>
              {" "}
              <TypeAnimation
                sequence={["Accounting", 1000, "Tax", 1000, "Insurance", 1000]}
                speed={50}
                repeat={Infinity}
              />
            </span>{" "}
          </h2>
          <p>
            We help Client find ways to turn into actionable insight by
            embedding <br />
            economices across their organisation strategy
          </p>
          <div className="buttons">
            <Link smooth to="https://wa.me/+2348037646665" target="_blank">
              <button href="" class="btn-first">
                {" "}
                WHATSAPP <FaWhatsapp />
              </button>
            </Link>
            <Link smooth to="tel:+2348037646665" target="_blank">
              <button href="" class=" btn-second">
                CONTACT
                <FaPhone />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
