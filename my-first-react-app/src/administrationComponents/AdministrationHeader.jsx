import { useState, useEffect, useRef } from 'react'
import "./administration.css"
import { data } from 'react-router'

const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '3'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

function AdministrationHeader(){
    const [dataIsLoaded, setDataIsLoaded] = useState(false)

    const app = useRef()
    async function getColaborations(){
        try{
            let data = await fetch(Table_URL)
            setDataIsLoaded(true)
        }catch(error){
            console.log("error")
        }
    }
    useEffect(()=>{
        getColaborations()
    },[])

    useEffect(()=>{
        setTimeout(() => {
            dataIsLoaded ? app.current.classList.add('appearDocument'): null
        }, 500);
    },[dataIsLoaded])

    return(
        <div ref={app} className='administrationHeaderContainer'>
            <img src="https://i.imgur.com/Nu6cYe9.jpg" alt="" />
        </div>
    )
}

export default AdministrationHeader
