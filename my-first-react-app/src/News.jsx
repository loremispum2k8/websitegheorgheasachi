import Menu from "./components/Menu";
import Footer from './components/Footer'
import NewsTop from "./newsComponents/NewsTop.jsx";
import NewsBottom from "./newsComponents/NewsBottom.jsx";
import {useInView} from 'react-intersection-observer'
import { useState, useEffect, NavLink, useRef, useParams, use } from 'react'


const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '1'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

function News(){

    const [newsData, setNewsData] = useState()
    const [dataIsLoaded, setDatIsLoaded] = useState(false)

    async function getNews(){
        let data = await fetch(Table_URL)
        let data_json = await data.json()
        setNewsData(data_json)
        setDatIsLoaded(true)
    }

    useEffect(()=>{
        getNews()
    },[])

    useEffect(()=>{
        document.title = 'Noutăți - I.P.L.T Gheorghe Asachi'
    },[])

    const app = useRef()

    useEffect(()=>{
        dataIsLoaded === false ? null : app.current.classList.add('appearDocument')
    },[dataIsLoaded])


    const { ref: newTopRef, inView: topRefIsVisible} = useInView({triggerOnce:true});
    const { ref: newBottomRef, inView: bottomRefIsVisible} = useInView({triggerOnce:true});

    return(
        <div ref={app} className="newsContainer">
            <Menu pageNumber={2} />
            <NewsTop elementStyles={` ${topRefIsVisible ? 'showSection': ''}`} elementRef={newTopRef} id="newsTop"/>
            <NewsBottom elementStyles={` ${bottomRefIsVisible ? 'showSection': ''}`} elementRef={newBottomRef} id="newsBottom"/>
            <Footer/>
        </div>
    )
}

export default News