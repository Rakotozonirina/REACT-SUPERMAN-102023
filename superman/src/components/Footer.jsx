import React from 'react'
import IconWB from '../photos/logo/icon_WB.png'
import SaynaLogo from '../photos/logo/logo_sayna_white.png'
import IconX from '../photos/logo/icon_x.png'
import IconDC from '../photos/logo/icon_DC.png'
import IconFacebook from '../photos/logo/icon_facebook.png'
import IconIg from '../photos/logo/icon_ig.png'
import IconTw from '../photos/logo/icon_tw.png'

function Footer() {
return (
    <footer className='w-full h-[40dvh] bg-gradient-to-br from-[#21465c] to-[#193C7D]'>
        <article className='w-full h-[20dvh] flex justify-center items-center gap-2'>
            <div>
                <img src={IconWB} alt="icon WB" />
            </div>
            <p className='font-cantarell text-white text-[12px]'>Ce projet respecte l’univers cinématographique des films Superman.</p>
        </article>
        <section className='flex justify-center items-center gap-2 border-gray-400 w-full h-[20dvh]'>
            <div>
                <img src={SaynaLogo} alt="sayna logo" />
            </div>
            <div>
                <img src={IconX} alt="icon x" />
            </div>
            <div>
                <img src={IconDC} alt="icon dc" />
            </div>
            <div>
                <img src={IconFacebook} alt="Icon facebook" />
            </div>
            <div>
                <img src={IconIg} alt="icon Ig" />
            </div>
            <div>
                <img src={IconTw} alt="Icon" />
            </div>
        </section>
    </footer>
)
}

export default Footer
