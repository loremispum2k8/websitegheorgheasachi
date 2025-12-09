import Menu from "./components/Menu";
import Footer from './components/Footer'
import NewsTop from "./newsComponents/newsTop";

import { useState, useEffect, NavLink, useRef, useParams } from 'react'

function News(){
    useEffect(()=>{
        document.title = 'Noutăți - I.P.L.T Gheorghe Asachi'
    },[])
    const app = useRef()
        useEffect(()=>{
        app.current.classList.add('appearDocument')
    },[])



    return(
        <div ref={app} className="newsContainer">
            <Menu pageNumber={2} />
            <NewsTop/>
            <Footer/>
        </div>
    )
}

export default News