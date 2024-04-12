import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const iconStyle = (Icon) => <Icon size="1.2rem" color="white" />;
const iconStyle1 = (Icon) => <Icon size="1.2rem" color="white" />;
const iconStyle2 = (Icon) => <Icon size="1.2rem" color="white" />;
const iconStyle3 = (Icon) => <Icon size="1.2rem" color="white" />;

export const social = [
  {
    icon: iconStyle(FaFacebook),
    to: "/home",
  },
  {
    icon: iconStyle1(FaInstagram),
    to: "/home",
  },
  {
    icon: iconStyle2(FaTwitter),
    to: "/home",
  },
  {
    icon: iconStyle3(FaLinkedin),
    to: "/home",
  },
  {
    icon: iconStyle3(FaWhatsapp),
    to: "/home",
  },
];

// const iconStyle = (Icon) => <Icon size="1.5rem" color="#3b5998" />;
// const iconStyle1 = (Icon) => <Icon size="1.5rem" color="#3f729b" />;
// const iconStyle2 = (Icon) => <Icon size="1.5rem" color="#55acee" />;
// const iconStyle3 = (Icon) => <Icon size="1.5rem" color="#0077b5" />;
