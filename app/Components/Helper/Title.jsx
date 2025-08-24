import React from 'react'

const Title = ({small , big , aling = "center"}) => {
  const alingment = aling === "center" ? "text-center" : ""
  return (
    <div className={` space-y-4 ${alingment} `}>
        <h4 className=' text-text-light text-h4'>{small}</h4>
        <h2 className='text-text-2 text-h2 font-semibold'>{big}</h2>
    </div>
  )
}

export default Title