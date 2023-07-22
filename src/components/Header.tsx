'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(false);
    const NavLinks = [
        { title: 'About', path: '/about'},
        { title: 'Policy', path: '/policy'},
        { title: 'Election Hub', path: '/election-hub'},
        { title: 'Volunteer', path: '/volunteer'},
        { title: 'Contact Us', path: '/contact'},
    ]

  return (
    <header className='fixed top-0 z-50 flex flex-col w-screen px-10 py-2 bg-blue-main'>
        <div className='z-40 flex items-center justify-between'>
            <Link 
                href={'/'} 
                className='text-2xl font-bold tracking-wide text-red-main font-oswald'
                onClick={() => setOpenMenu(false)}
            >
                VaMiDzo
            </Link>

            <div className='z-40'>
                {/* Hamburger Menu */}
                <button className='md:hidden' onClick={() => setOpenMenu(prev => !prev)}>
                    {openMenu ? 
                        <AiOutlineClose size={25} color='white' /> : <AiOutlineMenu size={25} color='white' />
                    }
                </button>

                {/* Desktop Navbar */}
                <nav className='items-center hidden space-x-5 text-sm md:flex'>
                    {NavLinks.map((link, index) => (
                        <Link 
                            key={index}
                            href={link.path} className={`uppercase hover:text-red-main active:text-red-main ${link.path === pathname ? "text-red-main" : "text-white"}`}
                            onClick={() => setOpenMenu(prev => !prev)}
                        >
                            {link.title}
                        </Link>
                    ))}

                    <Link 
                        onClick={() => setOpenMenu(false)}
                        href={'/'} 
                        className='px-3 py-2 text-center text-white uppercase rounded bg-red-main w-fit hover:bg-red-800'
                    >
                        Donate
                    </Link>
                </nav>
            </div>
        </div>

        {/* Mobile Navbar  */}
        <nav className={`flex flex-col items-start mt-5 space-y-6 text-sm md:hidden ${openMenu ? "flex" : "hidden"} pb-10 text-white`}>
            {NavLinks.map((link, index) => (
                <Link 
                    key={index}
                    href={link.path} className={`uppercase hover:text-red-main active:text-red-main ${link.path === pathname ? "text-red-main" : "text-white"}`}
                    onClick={() => setOpenMenu(prev => !prev)}
                >
                    {link.title}
                </Link>
            ))}

            <Link 
                href={'/'} 
                className='w-full px-3 py-4 text-center text-white uppercase rounded md:py-2 bg-red-main md:w-fit hover:bg-red-800'
                onClick={() => setOpenMenu(false)}
            >
                Donate
            </Link>
        </nav>
    </header>
  )
}

export default Header