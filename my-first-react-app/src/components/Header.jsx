import { useRef, useEffect, useState, use} from 'react'

import {NavLink} from 'react-router-dom'

function Header(){

    const [headerIndex,setHeaderIndex] = useState(1)

    useEffect(()=>{
        let interval = setInterval(()=>{
            setHeaderIndex(prev => prev+1)
            if(headerIndex === 1){
                img2.current.classList.remove('hideHeader')
                img3.current.classList.remove('hideHeader')


                img1.current.classList.add('hideHeader')
                img1.current.classList.remove('showHeader')
                img2.current.classList.add('showHeader')
                dot1.current.classList.remove('activeDot')
                dot2.current.classList.add('activeDot')
                dot3.current.classList.remove('activeDot')
                
            }
            if(headerIndex === 2){
                img1.current.classList.remove('hideHeader')
                img3.current.classList.remove('hideHeader')

                img2.current.classList.add('hideHeader')
                img2.current.classList.remove('showHeader')
                img3.current.classList.add('showHeader')
                dot1.current.classList.remove('activeDot')
                dot2.current.classList.remove('activeDot')
                dot3.current.classList.add('activeDot')

            }else if(headerIndex === 3){
                setHeaderIndex(1)
                img1.current.classList.remove('hideHeader')
                img2.current.classList.remove('hideHeader')

                img3.current.classList.add('hideHeader')
                img3.current.classList.remove('showHeader')
                img1.current.classList.add('showHeader')
                dot1.current.classList.add('activeDot')
                dot2.current.classList.remove('activeDot')
                dot3.current.classList.remove('activeDot')
            }
            
        },5000)

        return()=>{
            clearInterval(interval)
        }
    },[headerIndex])

    const img1 = useRef()
    const img2 = useRef()
    const img3 = useRef()
    const dot1 = useRef()
    const dot2 = useRef()
    const dot3 = useRef()

    function changeHeader(e){
        if(!e.target.classList.contains('activeDot')){
            if(e.target.id  === "1"){
                document.querySelector('.showHeader').classList.add('hideHeader')
                img1.current.classList.add('showHeader')
                img2.current.classList.remove('showHeader')
                img3.current.classList.remove('showHeader')
                e.target.classList.add('activeDot')
                dot2.current.classList.remove('activeDot')
                dot3.current.classList.remove('activeDot')
                setHeaderIndex(1)
            }else if(e.target.id  === "2"){
                document.querySelector('.showHeader').classList.add('hideHeader')
                img1.current.classList.remove('showHeader')
                img2.current.classList.add('showHeader')
                img3.current.classList.remove('showHeader')
                e.target.classList.add('activeDot')
                dot1.current.classList.remove('activeDot')
                dot3.current.classList.remove('activeDot')
                setHeaderIndex(2)
            }else{
                document.querySelector('.showHeader').classList.add('hideHeader')
                img1.current.classList.remove('showHeader')
                img2.current.classList.remove('showHeader')
                img3.current.classList.add('showHeader')
                e.target.classList.add('activeDot')
                dot1.current.classList.remove('activeDot')
                dot2.current.classList.remove('activeDot')
                setHeaderIndex(3)
            }
        }
    }

    return(
        <div className='headerContainer'>
            <div className='headerImagesContainer'>
                <img ref={img1} id='header1' className='headerImage showHeader' src="https://i.imgur.com/n25isLB.jpeg" alt="" />
                <img ref={img2} id='header2' className='headerImage' src="https://i.imgur.com/DdPs9OT.jpeg" alt="" />
                <img ref={img3} id='header3' className='headerImage' src="https://i.imgur.com/1ySzmSH.jpg" alt="" />
            </div>
            <div className='dotsContainer'>
                <div ref={dot1} onClick={(e)=>changeHeader(e)} id='1' className='headerDot activeDot'></div>
                <div ref={dot2} onClick={(e)=>changeHeader(e)} id='2' className='headerDot'></div>
                <div ref={dot3} onClick={(e)=>changeHeader(e)} id='3' className='headerDot'></div>
            </div>
            <div className='invisibleControlsHeader'>
                <div className='headerLeftControl'></div>
                <div className='headerRightControl'></div>
            </div>
        </div>
    )
}

export default Header