import React from 'react'

function CardImage({ images, heading, para }) {
return (
    <section className='w-[100%] h-[100dvh] sm:max-md:h-[340dvh] sm:max-md:gap-[200px] md:max-lg:gap-24 lg:max-xl:gap-16 flex flex-col gap-4'>
        <article className='h-[35dvh]'>
            <h1 className='text-white font-rajdhani text-[36px]'>{heading}</h1>
            <p className='text-white font-cantarell text-justify'>
                {para}
            </p>
        </article>
            <div className='h-[62dvh] sm:max-md:h-[225dvh]'>
                <div className='w-full sm:max-md:h-[225dvh] sm:max-md:gap-12 sm:max-md:justify-center sm:max-md:items-center sm:max-md:flex-col md:max-lg:flex-wrap flex justify-around'>
                    {images.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`${index} pic`} className='object-cover w-[25%] sm:max-md:w-[80%] md:max-lg:h-[50dvh] lg:max-xl:h-[55dvh] h-[62dvh]'/>
                    ))
                    }
                </div>
            </div>
    </section>
)
}

export default CardImage
