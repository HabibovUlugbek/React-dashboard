import React from "react";

const UsersCard = ({ data }) => {

  return (
    <div className="col-12 d-flex justify-content-between my-2">
      <div className="col-2">
        <img
          style={{ width: "40px" }}
          className="rounded-circle img-fluid"
          src={data.avatar}
          alt={data.name}
        />
      </div>
      <div className="col-3">{data.name}</div>
      <div className="col-3">{data.country}</div>
      <div className="col-3">
        <span
          className={`px-2 mx-1 bg-${data.color}`}
          style={{
            borderRadius: "10px",
          }}
        >
          {" "}
        </span>
        {data.status}
      </div>
    </div>
  );
};

export default UsersCard;
