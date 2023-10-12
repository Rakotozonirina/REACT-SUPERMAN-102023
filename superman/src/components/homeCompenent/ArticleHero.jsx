import React from 'react'
import Dc from '../../photos/logo/logoDC.png'

function ArticleHero() {
return (
    <article className='flex w-full h-[50dvh]'>
        <div className='w-[30%] '>

        </div>
        <div className='flex'>
            <section>
                <img src={Dc} alt="Logo Dc" />
            </section>
            <section className='flex justify-center flex-col'>
                <h1 className="font-adventure text-white text-[96px]">SUPERMAN</h1>
                <h2 className="font-adventure text-white text-[62px]">L’HOMME D’ACIER</h2>
            </section>
        </div>
    </article>
)
}

export default ArticleHero
