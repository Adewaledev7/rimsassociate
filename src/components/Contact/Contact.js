import React from "react";
import "./Contact.css";
import Form from "../Form/Form";
import { social } from "../data/SocialData";

function Contact() {
  return (
    <div id="contact">
      <section class="contact_section">
        <div className="contact-content">
          <div
            className="imaga"
            style={{
              backgroundImage:
                'url("assets/pexels-pavel-danilyuk-7654119.jpg") ',

              zIndex: "-1",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="form">
            <h1>Request For Consultation</h1>
            <Form />
            <p>
              Register and tell us your problem, so we can proceed on how to
              solve it at the minimal and efficient way......
            </p>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="f1">
          <div className="socials">
            {social.map((el, index) => (
              <ul key={index}>
                <a>{el.icon}</a>
              </ul>
            ))}
          </div>
        </div>
        <div className="f2">
          <h4>Contact Us</h4>
          <p>4, Nortey Omaboe Street, Surulere, Lagos</p>
          <p>rimsassociate@gmail.com</p>
          <p>+2348037646665, +2348025919797</p>
        </div>
        <div className="f3">
          <h4>Adewale Alimi</h4>
          <p>Copyright &#169; 2023</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
