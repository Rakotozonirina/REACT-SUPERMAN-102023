import React from 'react'
import Navbar from '../Navbar'
import Icons from '../Icons'
import ArticleHero from './ArticleHero'

function Header() {
return (
    <header className='w-full h-[100dvh] flex flex-col sm:max-md:gap-[0px] md:max-lg:gap-[0px] gap-[100px] bgImageOne'>
        <Navbar/>
        <Icons/>
        <ArticleHero/>
    </header>
)
}

export default Header
