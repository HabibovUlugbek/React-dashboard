import React,{useState} from "react";
import Navbar from "../containers/Navbar";
import SearchBox from "../containers/SearchBox";

const Layout = (props) => {

    const [active, setActive] = useState(false)

  return (
    <div
      className="w-100"
      style={{
        background: "rgb(240, 240, 240)",
        overflowX: "hidden",
      }}
    >
      <SearchBox setActiveMenu={setActive} active={active} />
      <div className={`responsive w-100 d-md-none active_${active}`}>
        <Navbar />
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
