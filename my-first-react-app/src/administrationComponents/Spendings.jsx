import { useState, useEffect, useRef } from 'react'
import "./administration.css"

const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '5'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`


function Spendings({id,elementRef,elementStyles}){

    const [spendingsData, setSpendingsData] = useState()
    const [dataIsLoaded, setDataIsLoaded] = useState(false)
    const [dataError, seDataError] = useState(null)
    const [dataLoading, setDataLoading] = useState(true)

    async function getAquisitions(){
            try{
                let data = await fetch(Table_URL)
                let data_json = await data.json()
                setSpendingsData(data_json)
                setDataIsLoaded(true)
                console.log(data_json)
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
            <div ref={elementRef} id={id} className={`spendingsContainer ${elementStyles}`}>
                <h1 className='spendingsTitle'>Cheltuieli</h1>
                <div className='spendingsFilesContainer'>
                    {spendingsData.map((spdata,index)=>{
                        return(
                            <div key={index} className='spendingsInline'>
                                <a className='outsideSp' target='_blank' href={spdata.fisier}>{spdata.titlu}</a>
                                <a download href={spdata.fisierDescarcare}>
                                    <div className='downloadSp'>
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

export default Spendings