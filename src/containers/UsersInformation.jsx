import React from "react";
import Pagination from "../components/Pagination";
import UsersType from "../components/UsersType";
import UsersSearch from "./UsersSearch";
import UsersTable from "./UsersTable";

const UsersInformation = () => {
  return (
    <div className=""
      style={{
        boxSizing: "content-box",
        boxShadow: "5px 5px 4px grey",
        background: "rgb(250, 248, 248)",
      }}
    >
      <div className="row p-2 m-2 d-flex justify-content-between">
        <UsersSearch />
        <UsersType />
      </div>
      <div className="col-12 p-3 m-2">
        <UsersTable />
      </div>
      <div className="p-2 d-flex justify-content-end mx-2" style={{borderTop: '1px solid gray'}}>
        <Pagination />
      </div>
    </div>
  );
};

export default UsersInformation;
