import React from "react";

const UsersNumber = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="h6 p-3 text-secondary font-weight-bolder">
        User growth
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="users_type p-sm-2 mx-2 d-flex flex-column align-items-center justify-content-center">
            <p className="m-0">Vendor</p>
            <p className="text-secondary m-0">20 k</p>
        </div>
        <div className="users_type p-sm-2 mx-2 d-flex flex-column align-items-center justify-content-center">
            <p className="m-0">Buyer</p>
            <p className="text-secondary m-0">30 k</p>
        </div>
        <div className="users_type p-sm-2 mx-2 d-flex flex-column align-items-center justify-content-center">
            <p className="m-0">Observer</p>
            <p className="text-secondary m-0">10 k</p>
        </div>
      </div>
    </div>
  );
};

export default UsersNumber;
