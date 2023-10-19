import React,{useState} from 'react'
import Quote from './Quote'

function Slides({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideClick = (index) => {
        setCurrentIndex(index);
    }

return (
    <div className='w-full flex flex-col gap-4 justify-center items-center'>
        {slides.map((slide, index) => (
            <div key={index} className={`w-fit ${currentIndex === index ? 'block max-sm:px-[2em]' : 'hidden'}`}>
                <Quote {...slide}/>
            </div>
        ))}
        <span>
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleSlideClick(index)}
                    className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'border border-blue-500'}`}
                />
            ))}
        </span>
    </div>
)
}

export default Slides
