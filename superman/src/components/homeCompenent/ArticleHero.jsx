import React from 'react'
import Dc from '../../photos/logo/logoDC.png'

function ArticleHero() {
return (
    <article className='flex sm:max-md:gap-[8rem] md:max-lg:gap-[4rem] w-full h-[50dvh]'>
        <div className='w-[30%] sm:max-md:w-[15%]'>

        </div>
        <div className='flex max-sm:flex-col sm:max-md:flex-col md:max-lg:flex-col'>
            <section className='max-sm:scale-[0.4] sm:max-md:scale-[0.6] md:max-lg:scale-[0.7] lg:max-xl:scale-[0.8]'>
                <img src={Dc} alt="Logo Dc" />
            </section>
            <section className='flex max-sm:justify-center max-sm:items-center justify-center flex-col'>
                <h1 className="font-adventure max-sm:text-[32px] sm:max-md:text-[50px] md:max-lg:text-[62px] lg:max-xl:text-[62px] text-white text-[96px]">SUPERMAN</h1>
                <h2 className="font-adventure max-sm:text-[22px] sm:max-md:text-[36px] md:max-lg:text-[40px] lg:max-xl:text-[40px] text-white text-[62px]">L’HOMME D’ACIER</h2>
            </section>
        </div>
    </article>
)
}

export default ArticleHero
