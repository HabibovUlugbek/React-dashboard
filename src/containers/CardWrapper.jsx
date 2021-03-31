import React from 'react'
import Card from './Card'
import group from "../icons/group.png"
import money from '../icons/money.png'
import delivery from '../icons/delivery-box.png'
import ads from '../icons/ads.png'

const CardWrapper = () => {
    const cardData = [
        {
            title:"Users",
            text:"5000",
            icon:group,
        },
        {
            title:"Money",
            text:"1200000 sum",
            icon:money,
        },
        {
            title:"Products",
            text:"50000",
            icon:delivery,
        },
        {
            title:"Advertising",
            text:"150 / 300",
            icon:ads,
        },
    ]
    return (
        <div className="row p-3 m-2 justify-content-around">
            {cardData.map(card => (
                <Card data={card} />
            ))}
        </div>
    )
}

export default CardWrapper
