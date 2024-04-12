import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMessagePin } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

const iconStyle = (Icon) => <Icon size="1.2rem" color="white" />;
const iconStyle1 = (Icon) => <Icon size="1.2rem" color="white" />;
const iconStyle2 = (Icon) => <Icon size="1.2rem" color="white" />;

export const info = [
  {
    icon: iconStyle(BsTelephoneFill),
    text: "+2348037646665, +2348025919797",
  },
  {
    icon: iconStyle1(TbMessagePin),
    text: "rimsassociate@gmail.com",
  },
  {
    icon: iconStyle2(FaLocationDot),
    text: "4, Nortey Omaboe Street, Surulere, Lagos",
  },
];
