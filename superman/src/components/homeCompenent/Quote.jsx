import React from 'react'

function Quote({quoteOne, quoteTwo, quoteThree, author}) {
return (
    <article className='text-center text-white font-cantarell'>
        <h1 className='max-sm:text-[16px]'>{quoteOne}</h1>
        <h1 className='my-2 max-sm:text-[16px] max-sm:my-1'>{quoteTwo}</h1>
        <h1 className='max-sm:text-[16px]'>{quoteThree}</h1>
        <p className='text-[16px] max-sm:text-[12px] text-[#C1C1C1]'>{author}</p>
    </article>
)
}

export default Quote
