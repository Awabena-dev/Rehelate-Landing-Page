"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPlay, FaWindowClose } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const NavLinks = [
    { id: 1, path:"#", text: "الرحلات" },
    { id: 2, path:"#", text: "الخدمات" },
    { id: 3, path:"#", text: "الاسعار" },
    { id: 4, path:"#", text: "أراء العملاء" },
    { id: 5, path:"#", text: "أتصل بنا" },
];

const MobileNav = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                onClick={onClose}
            ></div>

            {/* Side Menu */}
            <ul
                className={`fixed top-0 left-0 w-[60%] h-screen bg-white text-primary shadow-2xl flex flex-col items-center justify-center z-[999] transition-transform duration-300 delay-200 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {NavLinks.map((link)=> (
                    <li key={link.id} className="text-3xl font-semibold mb-6 hover:text-primary transition-colors duration-300">
                        <Link href={link.path} onClick={onClose}>{link.text}</Link>
                    </li>
                ))}
                {/* Close Button */}
                <FaWindowClose
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 text-black hover:text-red-500 transition-colors duration-300 cursor-pointer"
                    aria-label="إغلاق القائمة"
                />
            </ul>
        </>
    )
}

const Navbar = () => {
    const [scrolled , setscrolled] = useState(false);

    useEffect(() =>{
        const handledscroll = () =>{
            if (window.scrollY >= 90){
                setscrolled(true);
            } else{
                setscrolled(false)
            }
        };

        window.addEventListener("scroll",handledscroll);

        return () => {
            window.removeEventListener("scroll" , handledscroll)
        };

    },[])
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(prev => !prev);

    return (
        <div className={`fixed w-full  pt-[30px] md:pt-[49px] z-[1000] `}>
            <nav className={`custom-container px-3 flex justify-between items-center p-2 rounded-2xl ${ scrolled ? "bg-text-light" : "bg-transparent"} `}>
                {/* Logo */}
                <h1 className='text-3xl text-white font-semibold'>
                    رحلاتي<span className='text-[#fec430]'>.</span>
                </h1>

                {/* Desktop Links */}
                <ul className='hidden md:flex gap-[45px] text-white'>
                    {NavLinks.map(link => (
                        <li key={link.id} className='hover:text-[#FEC430] transition-colors duration-300'>
                            <Link href={link.path}>{link.text}</Link>
                        </li>
                    ))}
                </ul>

                {/* Extra Button */}
                <div className='hidden md:flex items-center gap-3'>
                    <h5 className='text-[20px] text-white'>يوتيوب</h5>
                    <FaPlay className='p-2.5 bg-white w-8 h-8 text-black rounded-[15px]'/>
                </div>

                {/* Mobile Menu Button */}
                <IoMdMenu
                    onClick={toggleNav}
                    className='block md:hidden w-10 h-10 p-2.5 bg-white rounded-[5px] cursor-pointer'
                    aria-label="فتح القائمة"
                />

                {/* Mobile Nav */}
                <MobileNav isOpen={isOpen} onClose={toggleNav} />
            </nav>
        </div>
    )
}

export default Navbar;
