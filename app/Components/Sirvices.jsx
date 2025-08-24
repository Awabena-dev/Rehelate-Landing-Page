import React from 'react'
import Title from './Helper/Title'
import Image from 'next/image'

const Sirvices = () => {
  return (
    <div className=' '>
        <div className="custom-container px-3">
            <Title small={"تمتع في رحلتك"} big={"مجموعة من خدماتنا"} aling='center' />
            <div className=' w-full mt-6 bg-candy-grape rounded-3xl flex pt-[140px] flex-wrap justify-center gap-12 relative'>
                {/* cards */}
                <div className=' flex flex-col justify-center items-center max-w-[250px] text-center'>
                    <Image src={"/Image/Service/services-1.png"} width={200} height={200} alt='sirevice' />
                    <h3 className=' text-text-2 text-h3'>دليل سياحي</h3>
                    <p className=' text-text-light text-p' >نقدم لك خدمات الإرشاد السياحي لبناء
                            خطط سفر مميزة.</p>
                </div>

                <div className=' flex flex-col justify-center items-center max-w-[250px] text-center'>
                    <Image src={"/Image/Service/services-2.png"} width={200} height={200} alt=''/>
                    <h3 className=' text-text-2 text-h3'>دليل سياحي</h3>
                    <p className=' text-text-light text-p' >نقدم لك خدمات الإرشاد السياحي لبناء
                            خطط سفر مميزة.</p>
                </div>

                <div className=' flex flex-col justify-center items-center max-w-[250px] text-center'>
                    <Image src={"/Image/Service/services-3.png"} width={200} height={200} alt=''/>
                    <h3 className=' text-text-2 text-h3'>دليل سياحي</h3>
                    <p className=' text-text-light text-p' >نقدم لك خدمات الإرشاد السياحي لبناء
                            خطط سفر مميزة.</p>
                </div>
                <Image src={"/Image/Service/arrow2.svg"} width={52} height={140} alt='image' className=' absolute top-0 left-[50%] transform -translate-x-[50%]'/>
            </div>
        </div>
    </div>
  )
}

export default Sirvices