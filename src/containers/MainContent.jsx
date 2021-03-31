import React from 'react'
import BarCricleWrap from './BarCricleWrap'
import BrandsFactory from './BrandsFactory'
import CardWrapper from './CardWrapper'
import LineChartWrap from './LineChartWrap'

const MainContent = () => {
    return (
        <div className="container">
            <CardWrapper />
            <LineChartWrap />
            <BarCricleWrap />
            <BrandsFactory />
        </div>
    )
}

export default MainContent
