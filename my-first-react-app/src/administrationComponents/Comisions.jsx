import { useState, useEffect, useRef } from 'react'
import "./administration.css"


const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '6'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`


function Comisions({id,elementRef,elementStyles}){

    const [comisionsData, setComisionsData] = useState()
    const [dataIsLoaded, setDataIsLoaded] = useState(false)
    const [dataError, seDataError] = useState(null)
    const [dataLoading, setDataLoading] = useState(true)


    async function getComisions(){
        try{
            let data = await fetch(Table_URL)
            let data_json = await data.json()
            setComisionsData(data_json)
            setDataIsLoaded(true)
        }
        catch(error){
            seDataError('Eroare')
        }finally{
            setDataLoading(false)
        }
    }
    
    
    useEffect(()=>{
        getComisions()
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
            <div className='loadingScreen'>
                <h1>Se încarcă...</h1>
            </div>
        )
    }else{
        enableScroll()
    }

    function returnSpanText(text){
        let arrText = text.split(',')
        return(arrText)
    }


    return(
        <div ref={elementRef} id={id} className={`comisionsContainer ${elementStyles}`}>
            <h1 className='comisionsTitle'>Comisii</h1>
            <div className='comisionsOuterContainer'>
                <div className='comisionsScroller'>
                    {comisionsData.map((cData,index)=>{
                        return(
                            <div key={index} className='comisionsCard'>
                                <div className='comisionImage'><img src={cData.imagine} alt="Imaginea cu membrii comisiei" /></div>
                                <h1 className='comisionTitle'>{cData.titlu}</h1>
                                <p className='comisionMembers'>{returnSpanText(cData.membri).map((membru,membruIndex)=>{
                                    return(
                                        membruIndex === (returnSpanText(cData.membri).length - 1) ? <span key={membruIndex}>{membru}</span> : <span key={membruIndex}>{membru+', '}</span>
                                    )
                                })}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Comisions