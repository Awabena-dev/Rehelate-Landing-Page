"use client"
import React, { useEffect, useState } from 'react'

const LoadingScreen = () => {

    const [isloading , setisloading] = useState(true)

    useEffect(() =>{
        const timer = setTimeout(() => {
            setisloading(false)
        }, 2000);
    } , [])

    if (!isloading) return null

  return (
    <div className=' fixed inset-0 bg-white flex items-center justify-center z-50'>
        <div className='  w-16 h-16 border-4 border-gray-400 border-t-primary rounded-full animate-spin'></div>
    </div>
  )
}

export default LoadingScreen