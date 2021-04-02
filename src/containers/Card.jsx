import React from "react";

const Card = ({ data }) => {
  return (
    <div className=" col-sm-5 m-2  col-12 p-2 rounded d-flex justify-content-between align-items-center" style={{
        boxSizing:"content-box",
        boxShadow: "5px 5px 4px grey",
        background:"rgb(250, 248, 248)"}}>
      <div className="card__main">
        <p className="text-secondary my-1 font-weight-bolder" style={{fontSize:"13px"}}>{data.title}</p>
        <p className="text-dark my-1 font-weight-bolder" style={{fontSize:"16px"}}>{data.text}</p>
      </div>
      <div className="card__icon" style={{width:"40px"}}> <img className="img-fluid" src={data.icon} alt={data.title}/> </div>
    </div>
  );
};

export default Card;
