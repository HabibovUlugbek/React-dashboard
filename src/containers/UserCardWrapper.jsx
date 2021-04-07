import React from "react";
import group from "../icons/group.png"
import analytics from "../icons/analytics.png"
import customer from "../icons/customer.png"
import seller from "../icons/seller.png"
import Card from "./Card";

const UserCardWrapper = () => {

    const cardData = [
        {
            title:"Users",
            text:"5000",
            icon:group,
        },
        {
            title:"Buyer",
            text:"2000",
            icon:customer,
        },
        {
            title:"Vendor",
            text:"3000",
            icon:seller,
        },
        {
            title:"Active members",
            text:"4500",
            icon:analytics,
        },
    ]

  return (
    <div className="row p-3 m-2 justify-content-around">
      {cardData.map((card, id) => (
        <Card key={id} data={card} />
      ))}
    </div>
  );
};

export default UserCardWrapper;
