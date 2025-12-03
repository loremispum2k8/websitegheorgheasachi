import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <div className='headerContainer'>
            <div className='headerImagesContainer'>
                <img className='headerImage showHeader' src="https://i.imgur.com/SMRCU1u.jpeg" alt="" />
                <img className='headerImage' src="https://i.imgur.com/d4KkNj3.jpg" alt="" />
                <img className='headerImage' src="https://i.imgur.com/coJ4dhK.jpg" alt="" />
            </div>
            <div className='dotsContainer'>
                <div className='headerDot activeDot'></div>
                <div className='headerDot'></div>
                <div className='headerDot'></div>
            </div>
            <div className='invisibleControlsHeader'>
                <div className='headerLeftControl'></div>
                <div className='headerRightControl'></div>
            </div>
        </div>
    )
}

export default Header