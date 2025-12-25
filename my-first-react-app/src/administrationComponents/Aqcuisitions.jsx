import { useState, useEffect, useRef } from 'react'
import "./administration.css"
import LoadingScreen from '../components/LoadingScreen'

const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '4'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`


function Aqcuisitions({id,elementRef,elementStyles}){

    const [aqcuisitionsData, setAqcuisitionsData] = useState()
    const [dataIsLoaded, setDataIsLoaded] = useState(false)
    const [dataError, seDataError] = useState(null)
    const [dataLoading, setDataLoading] = useState(true)


    async function getAquisitions(){
            try{
                let data = await fetch(Table_URL)
                let data_json = await data.json()
                setAqcuisitionsData(data_json)
                setDataIsLoaded(true)
            }
            catch(error){
                seDataError('Eroare')
            }finally{
                setDataLoading(false)
            }
    }
    useEffect(()=>{
        getAquisitions()
    },[])


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
        <div ref={elementRef} id={id} className={`aqcuisitionsContainer ${elementStyles}`}>
            <h1 className='aqcuisitionsTitle'>Achiziții publice </h1>
            <div className='aqcuisitonsFilesContainer'>
                {aqcuisitionsData.map((aqdata,index)=>{
                    return(
                        <div key={index} className='aqcuisitionsInline'>
                            <a className='outsideAq' target='_blank' href={aqdata.fisier}>{aqdata.titlu}</a>
                            <a download href={aqdata.fisierDescarcare}>
                                <div className='downloadAq'>
                                    <img src="https://i.imgur.com/BwS2PDE.png" alt="" />
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Aqcuisitions