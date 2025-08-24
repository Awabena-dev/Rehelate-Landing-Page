import React from 'react'
import Title from './Helper/Title'
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const Prices = () => {
  return (
    <div>
        <div className="">
            <Title small={"لا تقلق حول التكلفة"} big={"خطط تناسب ميزانيتك"} aling=''/>
            <div className=' flex items-center justify-center gap-8 my-12 md:justify-between p-[12px] flex-wrap'>
                {/* card */}
                <div className=' w-[400px] h-[550px] py-[45px] px-[30] bg-[#F1EFFD] hover:bg-[#46368B] hover:text-white transform hover:-translate-y-2 transition-all duration-300 rounded-2xl border-r-8 border-t-2 border-l-2 border-b-8 border-black flex flex-col'>
                    <h4 className=' text-text-2 hover:text-white text-h4'><span className=' text-3xl'>$260/</span>للشخص</h4>
                    <h3 className=' text-text-2 text-h3 my-2 hover:text-white'>خطة اقتصادية</h3>
                    <p className=' text-text-light text-p hover:text-white'>نقدم لكم إمكانية زيارة بلدان العالم باقل تكلفة وأفضل الخدمات</p>
                    <hr className=' w-full h-[4px] bg-text-2 border-none my-4 hover:text-white'/>
                    {/* cheacks */}
                    <div className=' mb-[76px]'>
                      <p className=' flex gap-2 text-text-2 hover:text-white items-center'><FaRegCheckCircle /> بطاقات سفر في الدرجة الاقتصادية </p>
                      <p className=' flex gap-2 text-text-2 hover:text-white items-center'><FaRegCheckCircle /> حجز فندق ثاتث نجوم </p>
                      <p className=' flex gap-2 text-text-2 hover:text-white items-center'><FaRegCheckCircle /> وجبات إفطار</p>
                    </div>

                    <button className=' my-[38px]  py-[12px] pl-[24px] pr-[30px] bg-transparent border-4 border-black rounded-2xl flex items-center justify-center gap-[12px] text-[18px]'>احجز الان<IoIosArrowBack className='p-2.5 bg-white text-black w-8 h-8 rounded-full'/></button>
                </div>

                <div className=' w-[400px] h-[550px] py-[45px] px-[30] bg-[#F1EFFD] hover:bg-[#46368B] hover:text-white transform hover:-translate-y-2 transition-all duration-300 rounded-2xl border-r-8 border-t-2 border-l-2 border-b-8 border-black flex flex-col'>
                    <h4 className=' text-text-2 hover:text-white text-h4'><span className=' text-3xl'>$260/</span>للشخص</h4>
                    <h3 className=' text-text-2 text-h3 my-2 hover:text-white'>خطة اقتصادية</h3>
                    <p className=' text-text-light text-p hover:text-white'>نقدم لكم إمكانية زيارة بلدان العالم باقل تكلفة وأفضل الخدمات</p>
                    <hr className=' w-full h-[4px] bg-text-2 border-none my-4 hover:text-white'/>
                    {/* cheacks */}
                    <div className=' mb-[76px]'>
                      <p className=' flex gap-2 text-text-2 hover:text-white items-center'><FaRegCheckCircle /> بطاقات سفر في الدرجة الاقتصادية </p>
                      <p className=' flex gap-2 text-text-2 hover:text-white items-center'><FaRegCheckCircle /> حجز فندق ثاتث نجوم </p>
                      <p className=' flex gap-2 text-text-2 hover:text-white items-center'><FaRegCheckCircle /> وجبات إفطار</p>
                    </div>

                    <button className=' my-[38px]  py-[12px] pl-[24px] pr-[30px] bg-transparent border-4 border-black rounded-2xl flex items-center justify-center gap-[12px] text-[18px]'>احجز الان<IoIosArrowBack className='p-2.5 bg-white text-black w-8 h-8 rounded-full'/></button>
                </div>

                <div className=' w-[400px] h-[550px] py-[45px] px-[30] bg-[#F1EFFD] hover:bg-[#46368B] hover:text-white transform hover:-translate-y-2 transition-all duration-300 rounded-2xl border-r-8 border-t-2 border-l-2 border-b-8 border-black flex flex-col'>
                    <h4 className=' text-text-2 hover:text-white text-h4'><span className=' text-3xl'>$260/</span>للشخص</h4>
                    <h3 className=' text-text-2 text-h3 my-2 hover:text-white'>خطة اقتصادية</h3>
                    <p className=' text-text-light text-p hover:text-white'>نقدم لكم إمكانية زيارة بلدان العالم باقل تكلفة وأفضل الخدمات</p>
                    <hr className=' w-full h-[4px] bg-text-2 border-none my-4 hover:text-white'/>
                    {/* cheacks */}
                    <div className=' mb-[76px]'>
                      <p className=' flex gap-2 text-text-2 hover:text-white items-center'><FaRegCheckCircle /> بطاقات سفر في الدرجة الاقتصادية </p>
                      <p className=' flex gap-2 text-text-2 hover:text-white items-center'><FaRegCheckCircle /> حجز فندق ثاتث نجوم </p>
                      <p className=' flex gap-2 text-text-2 hover:text-white items-center'><FaRegCheckCircle /> وجبات إفطار</p>
                    </div>

                    <button className=' my-[38px]  py-[12px] pl-[24px] pr-[30px] bg-transparent border-4 border-black rounded-2xl flex items-center justify-center gap-[12px] text-[18px]'>احجز الان<IoIosArrowBack className='p-2.5 bg-white text-black w-8 h-8 rounded-full'/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prices