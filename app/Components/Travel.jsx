import React from 'react'
import Title from './Helper/Title'
import TravelCards from './Helper/TravelCards'

const Travel = () => {
  return (
    <div>
        <div className="custom-container pt-20">
            <Title small={"قم بزيارة العالم"} big={"الرحلات التي نقدمها"} aling='' className=" mb-[64px]"/>
            <TravelCards />
        </div>
    </div>
  )
}

export default Travel