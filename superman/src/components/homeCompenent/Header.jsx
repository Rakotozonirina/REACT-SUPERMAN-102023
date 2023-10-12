import React from 'react'
import Navbar from '../Navbar'
import Icons from '../Icons'
import ArticleHero from './ArticleHero'

function Header() {
return (
    <header className='w-full h-[100dvh] flex flex-col gap-[100px] bgImageOne'>
        <Navbar/>
        <Icons/>
        <ArticleHero/>
    </header>
)
}

export default Header
