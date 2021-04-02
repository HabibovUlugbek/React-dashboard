import React from 'react'
import {FaArrowUp} from "react-icons/fa"

const BarchatInfo = () => {
    return (
        <div className="d-flex justify-content-between align-items-center px-2">
             <div>
                <p className="text-secondary h6 m-0 font-weight-bolder text-capitalize">Total money</p>
                <p  className="m-0" style={{fontSize:"12px m-0"}}>1 200 000 sum</p>
                <p className="text-success m-0"><FaArrowUp /> { }200000 sum </p>
            </div>
            <div>
                <select defaultValue={2021} selected  style={{outline:"none"}} className="px-3 py-1 btn-outline-info bg-light-gray font-weight-bolder" name="" id="">
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>
       
    )
}

export default BarchatInfo
