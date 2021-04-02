import React ,{useState} from "react";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";

const Main = () => {
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
      <div className={`responsive w-100 d-md-none active_${active}`}><Navbar /></div>
      <MainContent />
    </div>
  );
};

export default Main;
