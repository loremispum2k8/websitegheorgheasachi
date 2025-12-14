import { useRef, useEffect, useState, use} from 'react'

import {NavLink} from 'react-router-dom'

function Header({id}){

    const right = useRef()
    const left = useRef()
    const img1 = useRef()
    const img2 = useRef()
    const img3 = useRef()
    const dot1 = useRef()
    const dot2 = useRef()
    const dot3 = useRef()

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
        <div id={id} className='headerContainer'>
            <div className='headerImagesContainer'>
                <img ref={img1} id='header1' className='headerImage showHeader' src="https://d1mrnwe9chdcuv.cloudfront.net/w5gc1w%2Fpreview%2F73718224%2Fmain_large.jpg?response-content-disposition=inline%3Bfilename%3D%22main_large.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1765744646&Signature=Lp3l50mlOqQ4WtrdPwXRmqGP37u15~~7GQdyAaUVJ7gzUoyeOfdHsvS13PsDzlxIOD0SuvslIhgWTjrzgH4EZGNde7afjJRO-iNa9cQOWDWqM0HLWnoGaSMiI~6QIzgZKvjTeC7uLkaM2GOZlZT9rphN6OQ8t7iJgZJn6ey2Syx9KS2Ul2k2M6skF59z93PYtsJzXXXV2hcSU1DWt7uVm8YcEJoxozRcokLsN39irmuLIr-5tDvG4h2q7e7DQr6ugOKoqjbFH~xUXfVJi3fPADQCXIUDAezAtZ9wM4AYXdiQUp~PcQ4cH--etsc9199F3MX4nZLrD11lVwcqDp-fqA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" alt="" />
                <img ref={img2} id='header2' className='headerImage' src="https://d3rshtj5w2m4qx.cloudfront.net/7y81w%2Fpreview%2F73718098%2Fmain_full.jpg?response-content-disposition=inline%3Bfilename%3D%22main_full.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1765744053&Signature=ZMYbE9vMg0CNfCyf1Y9X9~tnIXxr~cXyMkX4~k0KaIc3ZkdgErJM0kYIQCaQOtOno7ao1PTGaNJhgtLzbRTAExUQ4MEdGsUSN77G3A0oaRYxvJIBoB~3KQNlZKPcqSTolTp4iCqyvwWt0-Rr68bPu7YFktSFmk1~vzw5WxL3KWoE3cfYL2P3lGSI5OXTRLs0D1j64lmEgbB6Y8ChCAsUxDJVJbXB-UmvM8mj7p2XbgYUJIZuAoLqAd5VMGfBj6hhlGHg3NnC8MHtr1EBVAWlzhfbzx86isLWBCwh98F-K3Z~Nq34~KA41ij0Z7~KVZhQrk6v3aHATkjV0yVTJxFT9w__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" alt="" />
                <img ref={img3} id='header3' className='headerImage' src="https://d2fy7spvltzu3v.cloudfront.net/9v81w%2Fpreview%2F73718095%2Fmain_large.jpg?response-content-disposition=inline%3Bfilename%3D%22main_large.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1765744026&Signature=bYCHjy8v4ZoiUpWr7JubTmTq9EzpUYHI0JfRg7FMXFHqyGOqB2YdPT5XrJ6TvE027FXTTELAbEr8dpr5Vm5tKopwW813rtmAWZIXMSD3VRDBXDslrUWhzi1KiPRQWSFgOCKiffHapK-w5PEvZzZ4214jDImJ4BOaGIW-7OykBWad6URLKJYNrKDYkE6TLHcgYV-xiSZ0avvugppKlQuH2x9VXc0xrsUpzQ7vjTzHoymEylUJa6dQKQ-N8B2YCDApgG9DR3iqNtPgh9tOO9NuxENPZBbpOt0yus2Yrt7U8TdIgRvfkID~P6H6ximIa-IF1zXrGt6GbCmGlQeGlkYbOw__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" alt="" />
            </div>
            <div className='dotsContainer'>
                <div ref={dot1} onClick={(e)=>changeHeader(e)} id='1' className='headerDot activeDot'></div>
                <div ref={dot2} onClick={(e)=>changeHeader(e)} id='2' className='headerDot'></div>
                <div ref={dot3} onClick={(e)=>changeHeader(e)} id='3' className='headerDot'></div>
            </div>
            <div className='invisibleControlsHeader'>
                <div ref={left} className='headerLeftControl'></div>
                <div ref={right} className='headerRightControl'></div>
            </div>
        </div>
    )
}

export default Header