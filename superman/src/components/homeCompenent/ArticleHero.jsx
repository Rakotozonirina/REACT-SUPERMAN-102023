import React from 'react'
import Dc from '../../photos/logo/logoDC.png'

function ArticleHero() {
return (
    <article className='flex w-full h-[50dvh]'>
        <div className='w-[30%] '>

        </div>
        <div className='flex'>
            <section className='md:max-lg:scale-[0.7] lg:max-xl:scale-[0.8]'>
                <img src={Dc} alt="Logo Dc" />
            </section>
            <section className='flex justify-center flex-col'>
                <h1 className="font-adventure md:max-lg:text-[62px] lg:max-xl:text-[62px] text-white text-[96px]">SUPERMAN</h1>
                <h2 className="font-adventure md:max-lg:text-[40px] lg:max-xl:text-[40px] text-white text-[62px]">L’HOMME D’ACIER</h2>
            </section>
        </div>
    </article>
)
}

export default ArticleHero
