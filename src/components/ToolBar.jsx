import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { BsChatFill, BsThreeDotsVertical } from "react-icons/bs";
import "../styling/toolbar.css";

const ToolBar = () => {
  const [toolBarClass, setToolBarClass] = useState(false);
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className={`d-sm-none position-relative`}>
        {" "}
        <button
          onClick={() => setToolBarClass(!toolBarClass)}
          style={{ outline: "none" }}
          className={`btn p-2 toolbar-btn ${toolBarClass}`}
        >
          <span >
            <BsThreeDotsVertical />
          </span>
        </button>{" "}
        <div className={`toolbar menu__${toolBarClass}`}>
          <div className="">
            <span style={{color:"blue"}}>
              <BsChatFill />
            </span>
          </div>
          <div className="">
            <span style={{color:"orange"}}>
              <FaBell />
            </span>
          </div>
          <div className="">
            <span>
              <FcSettings />
            </span>
          </div>
        </div>
      </div>

      <div className={`d-sm-flex d-none`}>
        <div className="p-1 px-2">
          <BsChatFill style={{color:"blue"}} />
        </div>
        <div className="p-1 px-2">
          <FaBell style={{color:"orange"}}/>
        </div>
        <div className="p-1 px-2">
          <FcSettings />
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
