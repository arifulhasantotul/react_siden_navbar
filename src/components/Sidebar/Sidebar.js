import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
   const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);
   return (
      <>
         <IconContext.Provider value={{ color: "#fff" }}>
            <div className="sidebar">
               <Link to="#" className="menu_bars">
                  <AiIcons.AiFillHdd onClick={showSidebar} />
               </Link>
            </div>
            <nav className={sidebar ? "nav_menu active" : "nav_menu"}>
               <ul className="nav_menu_items" onClick={showSidebar}>
                  <li className="navbar_toggle">
                     <Link to="#" className="menu_bars">
                        <AiIcons.AiOutlineClose />
                     </Link>
                  </li>
                  {SidebarData.map((item, index) => {
                     return (
                        <li key={index} className={item.cName}>
                           <Link to={item.path}>
                              {item.icon}
                              <span>{item.title}</span>
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>
         </IconContext.Provider>
      </>
   );
};

export default Sidebar;
