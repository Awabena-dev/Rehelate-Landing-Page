import React from 'react'
import Title from './Helper/Title'
import Image from 'next/image'

const Contact = () => {
  return (
    <div>
        <div className="custom-container">
            <Title small={"هل لديك سؤال"} big={"يسعدنا التواصل معك"} aling='' />
            {/* content */}
            <div className=' flex flex-col gap-10 items-center md:justify-center my-10 md:flex-row px-3'>
                {/* form */}
                <form action="#" className=' w-[400px] h-[400px] bg-[#FFE7AC] flex flex-col gap-2 p-[20px] rounded-2xl border-r-8 border-t-2 border-l-2 border-b-8 border-black'>
                    <h3 className=' text-text-2 text-h3'>الاسم</h3>
                    <input type="name" className=' p-1.5 bg-white border-1 rounded-[10px] placeholder:text-text-light border-black outline-2' placeholder='ادخل اسمك الكامل'/>
                    <h3>البريد الالكتروني</h3>
                    <input type="email" className=' p-1.5 bg-white border-1 rounded-[10px] placeholder:text-text-light border-black outline-2' placeholder='ادخل بريدك الالكتروني'/>
                    <h3>الرسالة</h3>
                    <textarea name="" id="" cols="30" rows="10" className=' p-1.5 bg-white border-1 rounded-[10px] placeholder:text-text-light border-black outline-2' placeholder='ما هي المشكلة او الرسالة'></textarea>
                    <button className=' bg-text-2 py-1.5 px-4 text-white rounded-[10px]'>ارسال الرسالة</button>
                </form>

                {/* help */}

                <div className=' flex flex-col'>
                    <div className=' flex gap-8 items-center'>
                        <Image src={"/Image/Contact/help-icon.png"} width={100} height={100} alt='image'/>
                        <div>
                            <h3 className=' text-h3 text-text-2 '>المساعدة</h3>
                            <p className=' text-text-light text-p'>سناسعدك اذا كان عندك اي استفسار عن الخدمة</p>
                        </div>
                    </div>

                    <div className=' flex gap-8 items-center'>
                        <Image src={"/Image/Contact/working-hours-icon.png"} width={100} height={100} alt='image'/>
                        <div>
                            <h3 className=' text-h3 text-text-2 '>المساعدة</h3>
                            <p className=' text-text-light text-p'>سناسعدك اذا كان عندك اي استفسار عن الخدمة</p>
                        </div>
                    </div>

                    <div className=' flex gap-8 items-center'>
                        <Image src={"/Image/Contact/communication-icon.png"} width={100} height={100} alt='image'/>
                        <div>
                            <h3 className=' text-h3 text-text-2 '>المساعدة</h3>
                            <p className=' text-text-light text-p'>سناسعدك اذا كان عندك اي استفسار عن الخدمة</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact