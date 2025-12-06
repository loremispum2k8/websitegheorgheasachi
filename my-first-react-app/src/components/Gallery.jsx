import { useRef, useEffect, useState, use} from 'react'

import {NavLink} from 'react-router-dom'


function Gallery(){
    const links = [
        'https://i.imgur.com/FglDhrt.jpeg',
        'https://i.imgur.com/vgBJnXG.jpeg',
        'https://i.imgur.com/WHthe9h.jpeg',
        'https://i.imgur.com/pstVUWh.jpeg'
    ]



    return(
        <div className='galleryContainer'>
            <div className='galleryTitle'>Galerie</div>
            <div className='galleryGrid'>
                <div className='galleryImgCont galleryBig'><img src="https://i.imgur.com/zu8Djbq.jpeg" alt="" /></div>
                <div className='galleryImgCont galleryTop'><img src="https://i.imgur.com/rNA0SDM.jpeg" alt="" /></div>
                <div className='galleryImgCont galleryBottom'><img src="https://i.imgur.com/hCbJmkr.jpeg" alt="" /></div>
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