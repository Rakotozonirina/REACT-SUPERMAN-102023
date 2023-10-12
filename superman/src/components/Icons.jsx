import React from 'react'
import facebookIcon from '../photos/icons/facebook.png'
import twitterIcon from '../photos/icons/twitter.png'
import instagramIcon from '../photos/icons/instagram.png'
import { Link } from 'react-router-dom'

function Icons() {
return (
    <div className='absolute top-[48%] left-[21.5%] h-[40dvh] flex flex-col gap-20'>
        <Link to="" >
            <img src={facebookIcon} alt="facebook Icons" />
        </Link>
        <Link to="" >
            <img src={instagramIcon} alt="instagram Icons" />
        </Link>
        <Link to="">
            <img src={twitterIcon} alt="twitter Icons" />
        </Link>
    </div>
)
}

export default Icons
