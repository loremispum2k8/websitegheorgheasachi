import { useState, useEffect, useRef } from 'react'
import "./administration.css"

const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '3'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

function Colaborations({id,elementRef,elementStyles}){

    const [colaborationsData, setColaborationsData] = useState()
    const [dataIsLoaded, setDataIsLoaded] = useState(false)
    const [dataError, seDataError] = useState(null)
    const [dataLoading, setDataLoading] = useState(true)

    async function getColaborations(){
        try{
            let data = await fetch(Table_URL)
            let data_json = await data.json()
            setColaborationsData(data_json)
            setDataIsLoaded(true)
        }
        catch(error){
            seDataError('Eroare')
        }finally{
            setDataLoading(false)
        }
    }

    useEffect(()=>{
        getColaborations()
    },[])


    function stopScroll(){
        document.body.style.overflowY = 'none'
    }
    function enableScroll(){
        document.body.style.overflowY = 'scroll'
    }
    if(dataLoading){
        stopScroll()
        return(
            <div className='loadingScreen'>
                <h1>Se încarcă...</h1>
            </div>
        )
    }else{
        enableScroll()
    }
    return(
        <div ref={elementRef} id={id} className={`colaborationsContainer ${elementStyles}`}>
            <h1 className='colaborationsTitle'>Colaborări</h1>
            <div className='colaborationsOuterContainer'>
                <div className='colaborationsScrollContainer'>
                    {colaborationsData.map((cData,index)=>{
                        return(
                                <div key={index} className='colaborationsCard'>
                                    <div className='colaborationsCardTop'>
                                        <h1 className='colaborationCardTitle'>{cData.partener}</h1>
                                        <div className='colaborationsDot'></div>
                                    </div>
                                    <div className='colaborationsCardBottom'>
                                        <div className='colaborationsTextContainer'>
                                            <h2 className='colaborationsBigText'>Tema și / sau tipul activității:</h2>
                                            <p className='colaborationsSmallText'>{cData.activitatea}</p>
                                        </div>
                                        <div className='colaborationsLine'></div>
                                        <div className='colaborationsTextContainer'>
                                            <h2 className='colaborationsBigText'>Public vizat:</h2>
                                            <p className='colaborationsSmallText'>{cData.publicVizat}</p>
                                        </div>
                                        <div className='colaborationsLine'></div>
                                        <div className='colaborationsTextContainer'>
                                            <h2 className='colaborationsBigText'>Responsabili:</h2>
                                            <p className='colaborationsSmallText'>{cData.responsabili}</p>
                                        </div>
                                        <div className='colaborationsLine'></div>
                                        <div className='collaborationsBottomInfoContainer'>
                                            <div className='colaborationsInfoRow'>
                                                <img src="https://i.imgur.com/niRJal8.png" alt="" />
                                                <p>{cData.perioada}</p>
                                            </div>
                                            <div className='colaborationsInfoRow'>
                                                <img src="https://i.imgur.com/tNq9nMT.png" alt="" />
                                                <p>{cData.loculDesfășurării}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    })}
                    
                </div>
            </div>
        </div>
    )

}

export default Colaborations