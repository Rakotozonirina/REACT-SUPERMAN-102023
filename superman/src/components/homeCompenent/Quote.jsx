import React from 'react'

function Quote({quoteOne, quoteTwo, quoteThree, author}) {
return (
    <article className='text-center text-white font-cantarell'>
        <h1>{quoteOne}</h1>
        <h1 className='my-2'>{quoteTwo}</h1>
        <h1>{quoteThree}</h1>
        <p className='text-[16px] text-[#C1C1C1]'>{author}</p>
    </article>
)
}

export default Quote
