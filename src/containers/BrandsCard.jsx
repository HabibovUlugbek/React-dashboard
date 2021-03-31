import React from 'react'

const BrandsCard = ({data}) => {
    return (
        <div className="col-12 d-flex my-2" style={{overflow:"auto",  scrollSnapAlign:"top"}    }>
           <div>
           <img style={{width:"40px"}} className="rounded-circle img-fluid" src={data.icon} alt={data.name}/>
            </div> 
            <div className="px-2">
                <h4 className="h6 m-0">{data.name}</h4>
                <p style={{fontSize:"13px"}} className="text-secondary m-0">{data.text}</p>
            </div>
        </div>
    )
}

export default BrandsCard
