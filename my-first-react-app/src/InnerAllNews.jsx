import { useState, useEffect, NavLink, useRef,} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import LoadingScreen from './components/LoadingScreen'

const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '1'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`


function InnerAllNews(){
    const {page} = useParams()

    const [newsData, setNewsData] = useState()
    const [dataIsLoaded, setDatIsLoaded] = useState(false)
    const [actPage,setActPage] = useState(Number(page) || 1)
    const [newsContent,setNewsContent] = useState([])
    const [dataError, seDataError] = useState(null)
    const [dataLoading, setDataLoading] = useState(true)
    
    useEffect(()=>{
        setActPage(page)
    },[page])

    async function getNews(){
        try{
            let data = await fetch(Table_URL)
            let data_json = await data.json()
            setNewsData(data_json)
            setDatIsLoaded(true)
        }
        catch(error){
            seDataError('Eroare')
        }
        finally{
            setDataLoading(false)
        }
    }
    
    useEffect(()=>{
        getNews()
    },[])

    useEffect(()=>{
        let startNews = (actPage-1)*12
        let lastNews = (actPage * 12 )-1
        let newsDataArr = []
        for(let i = startNews; i <= lastNews; i++){
            newsData ? newsDataArr.push(newsData[i]) : null
        }
        setNewsContent(newsDataArr)
    },[actPage,dataIsLoaded])


    function checkReadingTime(string){
        if(string){
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
        }else{
            return('Se citește instant')
        }
    }

    
    if(dataError){
        return(
            <ErrorPage/>
        )
    }

    function stopScroll(){
        document.body.style.overflowY = 'hidden'
    }
    function enableScroll(){
        document.body.style.overflowY = 'scroll'
    }
    if(dataLoading){
        stopScroll()
        return(
            <LoadingScreen/>
        )
    }else{
        enableScroll()
    }


    return(
        <div className='innerAllNewsContainer'>
            <div className='allNewsGridContainer'>
                {newsContent.map(news=>{
                return(
                    <>
                        {news ? <Link to={news ? `/noutăți/${news.slug}` : null} className='allNewsCard'><div className='allNewsImg'><img src={news.imagini ? news.imagini.split('\n')[0] : "https://i.imgur.com/5mZIpUH.png"} alt="" /></div><div className='allNewsText'><h1 className='allNewsCardTitle'>{news.titlu}</h1><div className='allNewsInlineInfo'><p className='newsDate'>{news.data}</p><p className='allNewsLine'></p><p className='readingTime'>{checkReadingTime(news.continut)}</p></div></div></Link>
 : null}
                    </>
                )
            })}

            </div>
        </div>
    )
}

export default InnerAllNews