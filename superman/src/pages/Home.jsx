import React from 'react'
import Navbar from '../components/Navbar'
import Icons from '../components/Icons'
import ArticleHero from '../components/homeCompenent/ArticleHero'

function Home() {
return (
    <div>
        <header className='w-full h-[100dvh] flex flex-col gap-[100px] bgImageOne'>
            <Navbar/>
            <Icons/>
            <ArticleHero/>
        </header>
    </div>
    
)
}

export default Home
