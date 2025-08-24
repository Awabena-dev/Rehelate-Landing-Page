import Image from 'next/image';
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const Header = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center flex flex-col items-center justify-center' 
    style={ {
        backgroundImage: "url('/Image/slide-img.jpg')"} }>
        <div className="cutom-container ">
            {/* text */}
            <div className=' flex flex-col md:items-center pt-[50px] px-3 md:px-0 text-center'>
                <h1 className=' text-[38px] md:text-[68px] font-semibold text-white mb-[28px]'>نسافر معنا الى العالم</h1>
                <h2 className=' text-white text-center text-[17px] md:text-[28px]'>نوفر لك رحلات التي تحتاجها لمختلف البلدان و بخدمات مخصصة لك ولعائلتك</h2>
                <button className=' my-[38px]  py-[12px] pl-[24px] pr-[30px] bg-primary rounded-2xl flex items-center justify-center gap-[12px] text-[18px]'>احجز الان<IoIosArrowBack className='p-2.5 bg-white w-8 h-8 rounded-full'/></button>

                {/* arrow */}
                <div className='  w-[300px] pt-14 relative mx-auto'>
                    <div className=' flex flex-col gap-[12px] items-center'>
                        <h2 className=' text-white text-[18px]'>تابع للاسفل</h2>
                        <Image className=' mouse__animation' src={"Image/Decor/Mouse.svg"} width={36} height={60}  alt='mouse image'/>
                    </div>
                    <Image className=' absolute top-0 left-0' src={"/Image/Decor/arrow1.png"} width={74} height={108} alt='arrow'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header