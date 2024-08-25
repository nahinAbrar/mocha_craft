import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const links = [
    { href: "#home", name: "Home" },
    { href: "#explore", name: "Explore" },
    { href: "#about", name: "About" },
    { href: "#menu", name: "Menu" },
    { href: "#contact", name: "Contact" },
]



const Footer = () => {
    return (
        <footer className='bg-footer bg-cover bg-no-repeat pt-16 relative' id='contact'>
            {/*overlay*/}
            <div className='absolute w-full h-full bg-black/[0.90] z-10 top-0'></div>

            { }
            <div className="container mx-auto z-20 relative">
                <div className='flex flex-col items-center justify-center gap-14'>
                    {/*logo */}
                    <Link
                        href="/"
                        className='relative w-[120px] h-[50px] mx-auto'
                    >
                        <Image
                            src="/assets/mochaa.svg"
                            fill
                            alt=""
                            className="object-contain"
                        />

                    </Link>
                    {/*nav*/}
                    <nav className='hidden md:flex flex-col md:flex-row gap-8 xl:gap-12 justify-center items-center'>
                        {links.map((link, index) => {
                            return <Link href={link.href} key={index} className='uppercase text-white tracking-widest hover:text-accent transition-all font-secondary'>
                                {link.name}
                            </Link>
                        })}
                    </nav>
                    {/**social */}
                    <ul className='flex text-white text-xl gap-5'>
                        <Link href="/" className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'>
                            <FaYoutube />


                        </Link>
                        <Link href="/" className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'>

                            <FaFacebookF />

                        </Link>
                        <Link href="/" className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'>
                            <FaTwitter />

                        </Link>
                        <Link href="/" className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'>

                            <FaInstagram />

                        </Link>
                    </ul>
                    {/*Copyright*/}

                    <div className='border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6 font-primary'>
                        <p>&copy; Copyright 2024 - MochaCraft. All Rights Reserved</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer