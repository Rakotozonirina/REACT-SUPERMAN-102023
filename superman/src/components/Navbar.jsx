import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6'
import { FaX } from 'react-icons/fa6'
import Logo from '../photos/logo/logo_blanc.png';

function Navbar() {
    const [bar, setBar] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
return (
    <nav className='w-[100%]'>
        <div className='w-[100%] max-sm:relative h-[30dvh] max-sm:h-[10dvh] py-[4rem] flex items-center justify-around'>
            <Link to="/" className='max-sm:scale-[0.4] sm:max-md:scale-[0.6] md:max-lg:scale-[0.7] lg:max-xl:scale-[0.8]'>
                <img src={Logo} alt="logo" className="h-auto w-[10rem]" />
            </Link>
            <ul className="uppercase max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0 max-sm:z-10 max-sm:flex-col max-sm:px-[100px] max-sm:py-[20px] max-sm:bg-[#C1C1C1] flex gap-[1em] text-white font-sans text-xl antialiased font-semibold">
                <li className={splitLocation[1] === "" ? "border-b-[1.5px] border-white" : ""}>
                    <Link to="/">home</Link>
                </li>
                <li className={splitLocation[1] === "game" ? "border-b-[1.5px] border-white" : ""}>
                    <Link to="/game">game</Link>
                </li>
                <li className={splitLocation[1] === "eshop" ? "border-b-[1.5px] border-white" : ""}>
                    <Link to="/eshop">e-shop</Link>
                </li>
                <li className={splitLocation[1] === "compte" ? "border-b-[1.5px] border-white" : ""}>
                    <Link to="/compte">compte</Link>
                </li>
                <li className='sm:hidden'>
                    <div>
                        <FaX/>
                    </div>
                </li>
            </ul>
            <div className='sm:hidden'>
                <FaBars className='max-sm:block max-sm:text-white max-sm:scale-[1.8]'/>
            </div>
        </div>
    </nav>
)
}

export default Navbar
