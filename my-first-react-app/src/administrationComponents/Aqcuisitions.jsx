import { useState, useEffect, useRef } from 'react'
import "./administration.css"

const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '3'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`


function Aqcuisitions({id,elementRef,elementStyles}){

    const [colaborationsData, setAqcuisitionsData] = useState()
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
        <div ref={elementRef} id={id} className={`aqcuisitionsContainer ${elementStyles}`}>
            <h1 className='aqcuisitionsTitle'>Achiziții publice </h1>
            <div className='aqcuisitonsFilesContainer'>
                <div className='aqcuisitionsInline'>
                    <a className='outsideAq' target='_blank' href='https://drive.google.com/file/d/1BlcuRGd-Cz5EjM7-qYHqqtiV0E2ICK36/view?usp=sharing'>Planul de achiziții pentru anul 2025 </a>
                    <a download href="Modificari la planul de achizitii publice pentru anul 2025 IP Liceul Teoretic ,,Gheorghe Asachi.pdf">
                        <div className='downloadAq'>
                            <img src="https://i.imgur.com/BwS2PDE.png" alt="" />
                            <span>0.23 MB</span>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Aqcuisitions