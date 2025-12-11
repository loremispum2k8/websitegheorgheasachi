import Menu from "./components/Menu";
import Footer from './components/Footer'
import NewsTop from "./newsComponents/NewsTop.jsx";
import NewsBottom from "./newsComponents/NewsBottom.jsx";

import { useState, useEffect, NavLink, useRef, useParams } from 'react'


const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '2'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

function News(){

    async function getNews(){
        let data = await fetch(Table_URL)
        let data_json = await data.json()
        for(let i = 0; i < 5; i++){
            console.log('images', i)
            console.log(data_json[i].imagini)
            console.log(data_json[i].imagini.split('href'))
        }
    }

    useEffect(()=>{
        getNews()
    },[])

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