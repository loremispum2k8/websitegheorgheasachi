import { useRef, useEffect, useState, use} from 'react'

import {NavLink} from 'react-router-dom'


function Gallery({id,elementRef,elementStyles}){
    const links = [
        '/gallery1.webp',
        'https://i.imgur.com/vgBJnXG.jpeg',
        'https://i.imgur.com/WHthe9h.jpeg',
        'https://i.imgur.com/xUOCXgp.jpeg',
        'https://i.imgur.com/PCzmZyE.jpeg',
        'https://i.imgur.com/fHjFZoF.jpeg',
        'https://i.imgur.com/X942IIY.jpeg',
        'https://i.imgur.com/fwcVYAZ.jpeg',
        'https://i.imgur.com/jkDNaJX.jpeg',
        'https://i.imgur.com/DvzZeAh.jpeg',
        'https://i.imgur.com/dAcqQkg.jpeg',
        'https://i.imgur.com/1JRojef.jpeg',
        'https://i.imgur.com/eH6JsLi.jpeg',
        'https://i.imgur.com/n2RDoui.jpeg',
        'https://i.imgur.com/4LeiAcZ.jpeg',
        'https://i.imgur.com/arWjrCe.jpeg',
        'https://i.imgur.com/kYynTze.jpeg'
    ]



    return(
        <div ref={elementRef} id={id} className={`galleryContainer ${elementStyles}`}>
            <div className='galleryTitle'>Galerie</div>
            <div className='galleryGrid'>
                <div className='galleryImgCont galleryBig'><img src="/galleryTop.webp" alt="" /></div>
                <div className='galleryImgCont galleryTop'><img src="https://i.imgur.com/rNA0SDM.jpeg" alt="" /></div>
                <div className='galleryImgCont galleryBottom'><img src="/galleryBottom.webp" alt="" /></div>
                <div className='gallerySlider'>
                    <div className='galleryInnerSlider'>
                        {links.map(imageLink=>{
                            return(
                                <div className='gallerySliderImg'><img src={imageLink} alt="" /></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery