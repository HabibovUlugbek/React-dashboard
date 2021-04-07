import React from "react";
import MenuBtn from "../components/MenuBtn";
import Search from "../components/Search";
import ToolBar from "../components/ToolBar";
import "../styling/searchbox.css";

const SearchBox = ({ setActiveMenu, active }) => {
  return (
    <div className="">
      <div
        style={{ overflowX: "hidden" }}
        className="py-3 px-2 search__box  m-0 d-flex justify-content-around"
      >
        <MenuBtn setActiveMenu={setActiveMenu} active={active} />
        <Search />
        <ToolBar />
      </div>
    </div>
  );
};

export default SearchBox;
