import React from "react";
import avatar from "../icons/021-user.png"
import UsersCard from "./UsersCard";

const UsersTable = () => {
    const UsersData = [
        {
            avatar:avatar,
            name:"Baby Lady",
            country:"Bukhara",
            status:"Active",
            color:"success"
        },
        {
            avatar:avatar,
            name:"Teddy",
            country:"Bukhara",
            status:"Pending",
            color:"warning"
        },
        {
            avatar:avatar,
            name:"Baby Lady",
            country:"Bukhara",
            status:"Suspended",
            color:"danger"
        },
        {
            avatar:avatar,
            name:"Teddy",
            country:"Bukhara",
            status:"Pending",
            color:"warning"
        },
        {
            avatar:avatar,
            name:"Baby Lady",
            country:"Bukhara",
            status:"Suspended",
            color:"danger"
        },
        {
            avatar:avatar,
            name:"Baby Lady",
            country:"Bukhara",
            status:"Active",
            color:"success"
        },
        {
            avatar:avatar,
            name:"Teddy",
            country:"Bukhara",
            status:"Pending",
            color:"warning"
        },
        {
            avatar:avatar,
            name:"Baby Lady",
            country:"Bukhara",
            status:"Suspended",
            color:"danger"
        },
        {
            avatar:avatar,
            name:"Teddy",
            country:"Bukhara",
            status:"Pending",
            color:"warning"
        },
        {
            avatar:avatar,
            name:"Baby Lady",
            country:"Bukhara",
            status:"Suspended",
            color:"danger"
        }
    ]
  return (
    <div >
      <div className="col-12 p-2 mx-2">
            <div className="d-flex justify-content-between col-12" style={{
                background: "rgb(230, 230, 230)"
            }}>
                <div className="col-2 p-2">#</div>
                <div className="col-3 p-2">Name</div>
                <div className="col-3 p-2">Country</div>
                <div className="col-3 p-2">Status</div>
            </div>
            <div>
                {UsersData.map((user,id) => (
                    <UsersCard key={id} data={user} />
                ))}
            </div>
      </div>
    </div>
  );
};

export default UsersTable;
