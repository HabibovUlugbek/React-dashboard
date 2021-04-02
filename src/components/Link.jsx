import React from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { IoFileTrayStackedSharp } from "react-icons/io5";

const Link = ({ data }) => {
  const Icons = (data) => {
    switch (data) {
      case "Home":
        return <FaHome />;
      case "Users":
        return <FaUsers />;
      case "Product":
        return <IoFileTrayStackedSharp />;
      case "Settings":
        return <FcSettings />;
      default:
        return null;
    }
  };

  return (
    <div
      className="d-block  py-3 menulink"
      style={{
        boxShadow: "0 2px  5px black",
        borderBottom: ".5px gray solid",
        borderTop: ".5px gray solid",
      }}
    >
      <span className="link__effect p-2">
          {Icons(data)}
          <span className="mx-1">{data}</span>
      </span>
    </div>
  );
};

export default Link;
