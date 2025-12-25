import { useRef, useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import LoadingScreen from '../components/LoadingScreen'


const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '1'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

function NewsTop({id,elementRef,elementStyles}){
    const [newsData, setNewsData] = useState()
    const [dataError, seDataError] = useState(null)
    const [dataLoading, setDataLoading] = useState(true)

    async function getNews(){
        try{
            let data = await fetch(Table_URL)
            let data_json = await data.json()
            setNewsData(data_json)
        }catch{
            seDataError('Eroare')
        }finally{
            setDataLoading(false)
        }
    }

    useEffect(()=>{
        getNews()
    },[])   
    newsData ? console.log(newsData[0].slug) : null

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
        <div ref={elementRef} id={id} className={`newsTopContainer ${elementStyles}`}>
            <h1 className='newsTopTitle'>Noutăți</h1>
            <div className='newsTopContent'>
                <div className='mainNewsBigGrid'>
                {console.log(newsData[0])}
                <NavLink to={newsData ? `/noutăți/${newsData[0].slug}` : null} className='new news1'>
                    <div className='newsImage'><img src={newsData[0].imagini ? newsData[0].imagini.split('\n')[0] : "https://i.imgur.com/5mZIpUH.png"} alt="" /></div>
                    <div className='news1Content'>
                        <h1 className='newsTitles news1Title'>{newsData ? newsData[0].titlu : null}</h1>
                        <p className='news1Description'>{newsData ? newsData[0].rezumat : null}</p>
                        <div className='newsInlineInfo'>
                            <p className='newsDate'>{newsData ? newsData[0].data : null}</p>
                            <div className='newsOrangeDot'></div>
                            <p className='readingTime'>{newsData ? checkReadingTime(newsData[0].continut) : null}</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink state={
                    { title:{}, summary:{}, author:{}, date:{}, readingTime:{}, mainImage:{}, content:{}, images:{} }
                    } to={newsData ? `/noutăți/${newsData[3].slug}` : null} className='new news2 news23'>
                    <div className='newsImage'><img src={newsData[3].imagini ? newsData[3].imagini.split('\n')[0] : "https://i.imgur.com/5mZIpUH.png"} alt="" /></div>
                    <div className='smallNewsContent'>
                        <h1 className='newsTitles news23Title'>{newsData ? newsData[3].titlu : null}</h1>
                        <div className='news23Info'>
                            <p className='newsDate'>{newsData ? newsData[3].data : null}</p>
                            <div className='news23line'></div>
                            <p className='readingTime'>{newsData ? checkReadingTime(newsData[3].continut) : null}</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink state={
                    { title:{}, summary:{}, author:{}, date:{}, readingTime:{}, mainImage:{}, content:{}, images:{} }
                    } to={newsData ? `/noutăți/${newsData[4].slug}` : null} className='new news3 news23'>
                    <div className='newsImage'><img src={newsData[4].imagini ? newsData[4].imagini.split('\n')[0] : "https://i.imgur.com/5mZIpUH.png"} alt="" /></div>
                    <div className="smallNewsContent">
                        <h1 className='newsTitles news23Title'>{newsData ? newsData[4].titlu : null}</h1>
                        <div className='news23Info'>
                            <p className='newsDate'>{newsData ? newsData[4].data : null}</p>
                            <div className='news23line'></div>
                            <p className='readingTime'>{newsData ? checkReadingTime(newsData[4].continut) : null}</p>
                        </div>
                    </div>
                </NavLink>
                </div>
                <div className='mediumNewsContainer'>
                    <NavLink state={
                    { title:{}, summary:{}, author:{}, date:{}, readingTime:{}, mainImage:{}, content:{}, images:{} }
                    } to={newsData ? `/noutăți/${newsData[1].slug}` : null} className='new news4 news45'>
                        <div className='newsImage'><img src={newsData[1].imagini ? newsData[1].imagini.split('\n')[0] : "https://i.imgur.com/5mZIpUH.png"} alt="" /></div>
                        <div className="mediumNewsContent">
                            <h1 className='newsTitles news45Title'>{newsData ? newsData[1].titlu : null}</h1>
                            <p className='news45Description'>{newsData ? newsData[1].rezumat : null}</p>
                            <div className='newsInlineInfo'>
                                <p className='newsDate'>{newsData ? newsData[1].data : null}</p>
                                <div className='newsOrangeDot'></div>
                                <p className='readingTime'>{newsData ? checkReadingTime(newsData[1].continut) : null}</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink state={
                    { title:{}, summary:{}, author:{}, date:{}, readingTime:{}, mainImage:{}, content:{}, images:{} }
                    } to={newsData ? `/noutăți/${newsData[2].slug}` : null} className='new news5 news45'>
                        <div className='newsTitles newsImage'><img src={newsData[2].imagini ? newsData[2].imagini.split('\n')[0] : "https://i.imgur.com/5mZIpUH.png"} alt="" /></div>
                        <div className="mediumNewsContent">
                            <h1 className='newsTitles news45Title'>{newsData ? newsData[2].titlu : null}</h1>
                            <p className='news45Description'>{newsData ? newsData[2].rezumat : null}</p>
                            <div className='newsInlineInfo'>
                                <p className='newsDate'>{newsData ? newsData[2].data : null}</p>
                                <div className='newsOrangeDot'></div>
                                <p className='readingTime'>{newsData ? checkReadingTime(newsData[2].continut) : null}</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NewsTop