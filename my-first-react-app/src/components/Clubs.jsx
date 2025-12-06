import { useRef, useEffect, useState, use} from 'react'

import {data, NavLink} from 'react-router-dom'

function Clubs(){

    const[clubData, setClubData] = useState()
    const[dataLoaded, setDataLoaded] = useState(false)

    useEffect(()=>{
        async function getData(){
            const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
            const Table_Name = '1'
            const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

            let result = await fetch(Table_URL)
            let resultJSON = await result.json()
            setClubData(resultJSON)
            setDataLoaded(true)
        }
        getData()
    },[])

    

    return(
        <div className='clubsContainer'>
            <h1 className='clubsTitle'>Cluburi și activități</h1>
            <div className='clubsMovementContainer'>
                <div className='clubsCardsContainer'>

                    {dataLoaded && clubData.map(club=>{
                        return(
                            <div className='clubCard'>
                                <div className='clubImage'><img src={club['Imagine principala ( URL )']} alt="" /></div>
                                <div className={club['Titlu'] === 'Crucea Roșie' ? "clubTextContainer redCross" : "clubTextContainer"}>
                                    <h2 className='clubCardTitle'>{club['Titlu']}</h2>
                                    <div className="clubLine"></div>
                                    <p className='clubDescription'>{club['Descriere']}</p>
                                </div>
                            </div>
                        )
                        })
                    }
                    

                </div>
            </div>
        </div>
    )
}

export default Clubs