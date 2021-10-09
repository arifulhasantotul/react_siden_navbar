import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
   {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "nav_text",
   },
   {
      title: "Reports",
      path: "/reports",
      icon: <IoIcons.IoIosPaper />,
      cName: "nav_text",
   },
   {
      title: "Products",
      path: "/products",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav_text",
   },
   {
      title: "Team",
      path: "/team",
      icon: <IoIcons.IoMdPeople />,
      cName: "nav_text",
   },
   {
      title: "Messages",
      path: "/messages",
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: "nav_text",
   },
   {
      title: "Supports",
      path: "/supports",
      icon: <IoIcons.IoMdHelpCircle />,
      cName: "nav_text",
   },
];
