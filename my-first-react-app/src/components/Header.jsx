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
                <img ref={img2} id='header2' className='headerImage' src="https://d3rshtj5w2m4qx.cloudfront.net/7y81w%2Fpreview%2F73718098%2Fmain_large.jpg?response-content-disposition=inline%3Bfilename%3D%22main_large.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1765745373&Signature=B~MWoe3hoQDRZWQp0UxZb~2EAkAHKG08zP4mNHHYvQhbsumzf9MeSgE11lc~1Z8u-CsJfkDDzcSRRwVqupipPazadtVlNdM40d0w5fSiRbNHb5l-YFS2x4101~hVetBOzbyqBbb9DBrmrA6yV5XTneX5DRXCyPAfjfC2IWEo3xdh0h8gv1w7JPF8WDC71E6H9DBemm9ZFLMIjOwDcpkWqTK1vsexv-ZR8P30wP6yR3Ev-4DeLW12ofbZXgLxS6f2x7l4zJTgM-nMNNS9BA29oTYucSvqQfRsczdZV37KV1ExS-Lsk7jPQzy8jiNrmIVtQm4EGWPookfjQWp0U6c97g__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" alt="" />
                <img ref={img3} id='header3' className='headerImage' src="https://d2fy7spvltzu3v.cloudfront.net/9v81w%2Fpreview%2F73718095%2Fmain_large.jpg?response-content-disposition=inline%3Bfilename%3D%22main_large.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1765745380&Signature=BfESGLSgFZuSBSyPlenlxsh~h7kZ-EDgUZFjeZrJqwZFqasynRk6UUfnEXKpCwxlLmmSfMawWAWk0qM8If4YaAlBGVZk-lN8L2lYMHCVn79cuQFQAjdzYjyrqj-2-ZsOAfLYcLIcAUZz8xSBqewWuXJcmVo10uZqMlOf-kWc5fLFHRS01GPS0-NUxRWbD3~4i1IooBGlklOMv9WcMcM0wdJnLqaMIHjFcTAv-lFiiZymfORKpGhjRCqHzmaJPziW479EEBGPZUU667uhIxijZNFVqvxophKTTsRZZQxTQSwhmVccPvAQaSyDuHySvvOVqS89VUJ9mb5m8LLbNGtHwA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" alt="" />
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