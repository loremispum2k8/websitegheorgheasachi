import Menu from "./components/Menu";
import Footer from './components/Footer'
import NewsTop from "./newsComponents/NewsTop.jsx";
import NewsBottom from "./newsComponents/NewsBottom.jsx";

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
            <NewsBottom/>
            <Footer/>
        </div>
    )
}

export default News