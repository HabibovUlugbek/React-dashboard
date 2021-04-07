import React from 'react'
import Brands from './Brands'
import Factory from './Factory'
import "../styling/brands.css"

const BrandsFactory = () => {
    return (
        <div className="row m-0 justify-content-lg-around justify-content-md-center" >
            <div className="col-md-6 my-2  col-12">
                <Brands />
            </div>
            <div className="col-md-6 my-2 col-12">
                <Factory />
            </div>
        </div>
    )
}

export default BrandsFactory
