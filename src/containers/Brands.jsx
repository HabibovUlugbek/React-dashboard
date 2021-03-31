import React from 'react';
import Icon from '../icons/021-user.png'
import BrandsCard from './BrandsCard';

const Brands = () => {
    const data = [
        {
            name:"Teddi",
            icon:Icon,
            text: "Quasi at voluptate quaerat harum quidem minus veritatis ea eius hic. Aperiam."
        },
        {
            name:"Teddi",
            icon:Icon,
            text: "Quasi at voluptate quaerat harum quidem minus veritatis ea eius hic. Aperiam."
        },
        {
            name:"Teddi",
            icon:Icon,
            text: "Quasi at voluptate quaerat harum quidem minus veritatis ea eius hic. Aperiam."
        },
        {
            name:"Teddi",
            icon:Icon,
            text: "Quasi at voluptate quaerat harum quidem minus veritatis ea eius hic. Aperiam."
        },
        {
            name:"Teddi",
            icon:Icon,
            text: "Quasi at voluptate quaerat harum quidem minus veritatis ea eius hic. Aperiam."
        },
    ]
    return (
        <div className="p-2 m-0 rounded" style={{
            boxSizing:"content-box",
            boxShadow: "5px 5px 4px grey",
            background:"rgb(250, 248, 248)"
        }}>
            <h3 style={{borderBottom:"1px solid #ccc"}} className="text-secondary h5 p-3">Brands</h3>
            <div className="row brands__scroll">
                {data.map((element,id) => (
                    <BrandsCard key={id} data={element} />
                ))}
            </div>
        </div>
    )
}

export default Brands
