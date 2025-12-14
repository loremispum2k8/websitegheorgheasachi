import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'

const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '1'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

function NewsBottom({id,elementRef,elementStyles}){
    const [newsData, setNewsData] = useState()

    async function getNews(){
        let data = await fetch(Table_URL)
        let data_json = await data.json()
        setNewsData(data_json)
    }

    useEffect(()=>{
        getNews()
    },[])   
    newsData ? console.log(newsData[0].slug) : null

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


    return(
        <div ref={elementRef} id={id} className={`newsBottomContainer ${elementStyles}`}>
            <NavLink to='/toate-noutățile'>
            <div className='newsBottomTitleContainer'>
                <h3>Toate noutățile</h3>
                <img className='newsBottomArrow' src="https://i.imgur.com/wumVWNV.png" alt="" />
            </div>
            </NavLink>
            <div className='newsBottomNewsContainer'>
                <NavLink to={newsData ? `/noutăți/${newsData[5].slug}` : null} className='newsBottom1 newsBottomCard'>
                    <div className='bottomNewsImg'><img src={newsData ? newsData[5].imagini.split('\n')[0] : "https://i.imgur.com/5mZIpUH.png"} alt="" /></div>
                    <div className='bottomNewsText'>
                        <h1 className='bottomNewsCardTitle'>{newsData ? newsData[5].titlu : null}</h1>
                        <div className='newsBottomInfo'>
                            <p className='newsDate'>{newsData ? newsData[5].data : null}</p>
                            <div className='newsBottomline'></div>
                            <p className='readingTime'>{newsData ? checkReadingTime(newsData[5].continut) : null}</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={newsData ? `/noutăți/${newsData[6].slug}` : null} className='newsBottom2 newsBottomCard'>
                    <div className='bottomNewsImg'><img src={newsData ? newsData[6].imagini.split('\n')[0] : "https://i.imgur.com/5mZIpUH.png"} alt="" /></div>
                    <div className='bottomNewsText'>
                        <h1 className='bottomNewsCardTitle'>{newsData ? newsData[6].titlu : null}</h1>
                        <div className='newsBottomInfo'>
                            <p className='newsDate'>{newsData ? newsData[6].data : null}</p>
                            <div className='newsBottomline'></div>
                            <p className='readingTime'>{newsData ? checkReadingTime(newsData[6].continut) : null}</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={newsData ? `/noutăți/${newsData[7].slug}` : null} className='newsBottom3 newsBottomCard'>
                    <div className='bottomNewsImg'><img src={newsData ? newsData[7].imagini.split('\n')[0] : "https://i.imgur.com/5mZIpUH.png"} alt="" /></div>
                    <div className='bottomNewsText'>
                        <h1 className='bottomNewsCardTitle'>{newsData ? newsData[7].titlu : null}</h1>
                        <div className='newsBottomInfo'>
                            <p className='newsDate'>{newsData ? newsData[7].data : null}</p>
                            <div className='newsBottomline'></div>
                            <p className='readingTime'>{newsData ? checkReadingTime(newsData[7].continut) : null}</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={newsData ? `/noutăți/${newsData[8].slug}` : null} className='newsBottom4 newsBottomCard'>
                    <div className='bottomNewsImg'><img src={newsData ? newsData[8].imagini.split('\n')[0] : "https://i.imgur.com/5mZIpUH.png"} alt="" /></div>
                    <div className='bottomNewsText'>
                        <h1 className='bottomNewsCardTitle'>{newsData ? newsData[8].titlu : null}</h1>
                        <div className='newsBottomInfo'>
                            <p className='newsDate'>{newsData ? newsData[8].data : null}</p>
                            <div className='newsBottomline'></div>
                            <p className='readingTime'>{newsData ? checkReadingTime(newsData[8].continut) : null}</p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default NewsBottom