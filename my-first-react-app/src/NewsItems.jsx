import { useRef, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'
import NewsBottom from "./newsComponents/NewsBottom.jsx";
import ErrorPage from './components/ErrorPage.jsx'
import {useInView} from 'react-intersection-observer'

const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '1'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

function NewsItems(){
    const{slug} = useParams()
    const [newsData, setNewsData] = useState()
    const [dataIsLoaded, setDatIsLoaded] = useState(false)
    
    async function getNews(){
        let data = await fetch(Table_URL)
        let data_json = await data.json()
        let filtered_json = await data_json.filter((eachData) => eachData.slug === slug)
        setNewsData(filtered_json)
        setDatIsLoaded(true)
    }

    function resetScroll(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    
    useEffect(()=>{
        resetScroll()
        getNews()
    },[slug])  

    function checkReadingTime(string){
        switch(true){
            case(string.length  === 0): 
                return('Se citește instant')
                break;
            case(string.length < 500 && string.length > 0):
                return('Se citește în sub 30 sec')
                break;
            case(string.length < 750 && string.length >= 500):
                return('Se citește în 30 sec')
                break;
            case(string.length < 1500 && string.length >= 750):
                return('Se citește în 1 minut')
                break;
            case(string.length < 2200 && string.length >= 1500):
                return('Se citește în 1:30 minute')
                break;
            case(string.length < 3000 && string.length >= 2200):
                return('Se citește în 2 minute')
                break;
            case(string.length < 3750 && string.length >= 3000):
                return('Se citește în 2:30 minute')
                break;
            case(string.length < 4500 && string.length >= 3750):
                return('Se citește în 3 minute')
                break;
            default:
                return('Se citește în peste 3 minute')
        }
    }

    const { ref: newBottomRef, inView: bottomRefIsVisible} = useInView({triggerOnce:true});
    const app = useRef()

    useEffect(()=>{
        dataIsLoaded === false ? null : app.current.classList.add('appearDocument')
    },[dataIsLoaded])

    if(!newsData){
        return('')
    } 
    return(
        <div className='newsitemouter' ref={app}>
            <Menu pageNumber={2} />
            <div className='articleContainer'>
                <h1 className='newsTopTitle'>Noutăți</h1>
                <div className='articleContentContainer'>
                    <div className='articleTopLine'></div>
                    <div className='articleTopText'>
                        <h1 className='articleTitle'>{newsData[0].titlu}</h1>
                        <p className='articleSummary'>{newsData[0].rezumat}</p>
                        <p className='articleAuthor'>Autor: <span>{newsData[0].autor}</span></p>
                        <div className='inlineArticleTopInfo'>
                            <p className='articleDate'>{newsData[0].data}</p>
                            <div className='articleDot'></div>
                            <p className='articleReadingTime'>{checkReadingTime(newsData[0].continut)}</p>
                        </div>
                    </div>
                    <div className='articleMainImage'><img src={newsData[0].imagini.split('\n')[0]} alt="" /></div>
                    <div className='articleContent'>{newsData[0].continut ? newsData[0].continut : 'Ne pare rău... articolul nu conține text'}</div>
                    {!newsData[0].imagini ? "" : <div className='articleOuterImagesContainer'>
                        <div className='articleImagesContainer'>
                            {newsData[0].imagini.split("\n").map(image=><div className='articleImage' ><img className='innerAricleImage' src={image} alt="" /></div>)}
                        </div>
                    </div>}
                    <div className='articleBottomLine'></div>
                </div>
            </div>
            <NewsBottom elementStyles={` ${bottomRefIsVisible ? 'showSection': ''}`} elementRef={newBottomRef} id="newsBottom"/>
            <Footer/>
        </div>
    )
}

export default NewsItems