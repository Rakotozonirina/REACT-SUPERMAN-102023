import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Logo from '../photos/logo/logo_blanc.png';

function Navbar() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
return (
    <nav className='w-[100%] p-[1rem]'>
        <div className='w-[100%] h-[20dvh] p-[0 5rem] flex items-center justify-around'>
            <Link to="/">
                <img src={Logo} alt="logo" className="h-auto w-[10rem]" />
            </Link>
            <ul className="uppercase flex gap-[1em] text-white font-sans text-xl antialiased font-semibold">
                <li className={splitLocation[1] === "" ? "border border-[white]" : ""}>
                    <Link to="/">home</Link>
                </li>
                <li className={splitLocation[1] === "game" ? "border border-[white]" : ""}>
                    <Link to="/game">game</Link>
                </li>
                <li className={splitLocation[1] === "eshop" ? "border border-[white]" : ""}>
                    <Link to="/eshop">e-shop</Link>
                </li>
                <li className={splitLocation[1] === "compte" ? "border border-[white]" : ""}>
                    <Link to="/compte">compte</Link>
                </li>
            </ul>
        </div>
    </nav>
)
}

export default Navbar
