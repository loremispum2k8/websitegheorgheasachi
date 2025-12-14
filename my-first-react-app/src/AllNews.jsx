import { useState, useEffect, useRef, use, act } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { data, useNavigate, useParams } from 'react-router';



const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '2'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

function AllNews(){

    const [newsData, setNewsData] = useState()
    const [dataIsLoaded, setDatIsLoaded] = useState(false)

    const {page} = useParams()
    const [pagesLength, setPagesLength] = useState(0)
    const [pages,setPages] = useState([])
    const [activePage,setActivePage] = useState(Number(page) || 1)

    useEffect(()=>{
        setActivePage(page)
    },[page])

    async function getNews(){
        let data = await fetch(Table_URL)
        let data_json = await data.json()
        setNewsData(data_json)
        setDatIsLoaded(true)

        //Here you set how many pages there are from 1 --> who knows
        let pagesLength = Math.ceil(data_json.length/12)
        setPagesLength(pagesLength)
        let arr = []
        if(pagesLength <= 9 ){
            for(let i = 1; i <= pagesLength; i++){
                arr.push(i)
            }
        }
        else{
            for(let i = Number(page); i <= Number(page) + 8; i++){
                arr.push(i)
            }
        }
        setPages(arr)
        //
    }
    useEffect(()=>{
        getNews()
    },[])
    useEffect(()=>{
        document.title = 'Noutăți - I.P.L.T Gheorghe Asachi'
    },[])
    const app = useRef()
    useEffect(()=>{
        dataIsLoaded === false ? null : app.current.classList.add('appearDocument')
    },[dataIsLoaded])



    

    const navigate = useNavigate()
    
    
    function checkPageIndex(e){  
        console.log(e.target.textContent)
        if(Number(e.target.textContent) === pages[0]){
            console.log('first page')
            if(pages[0] > 1){
                let newPages = pages.map(page => page - 1 )
                setPages(newPages)
            }
        }else if(Number(e.target.textContent) === pages[pages.length-1]){
            console.log('last page')
            if(pages[pages.length-1] < pagesLength){
                let newPages = pages.map(page => page + 1 )
                setPages(newPages)
            }
        }
    }

    
    useEffect(()=>{
        let startNews = (activePage-1)*12
        let lastNews = (activePage * 12 )-1
        for(let i = startNews; i <= lastNews; i++){
            newsData ? console.log(newsData[i]) : null
        }
        console.log("from: ", startNews)
        console.log("to: ", lastNews)
    },[activePage,dataIsLoaded])
    

    function goLeft(e){
        if(activePage > 1){
            navigate("/toate-noutățile/"+(Number(activePage) - 1))
            console.log(Number(activePage)-1)
            if((Number(activePage) - 1) === pages[0]){
                console.log('first page')
                if(pages[0] > 1){
                    let newPages = pages.map(page => page - 1 )
                    setPages(newPages)
                }
            }
        }
    }

    function goRight(){
        if(activePage < pagesLength){
            navigate("/toate-noutățile/"+ (Number(activePage) + 1))
            console.log(Number(activePage)+1)
            console.log(pages[pages.length-1])
            if((Number(activePage) + 1) === pages[pages.length-1]){
                console.log('last page')
                if(pages[pages.length-1] < pagesLength){
                    let newPages = pages.map(page => page + 1 )
                    setPages(newPages)
            }
        }
        }
    }

    if(!newsData){
        return ('')
    }

    return(
        <div className='AllNewsContainer' ref={app}>
            <Outlet/>
            <button onClick={(e)=>goLeft(e)}>left</button>
            <br />
            <br />
            {pages.map((page,index)=><NavLink key={index} onClick = {(e)=>checkPageIndex(e)} to={"/toate-noutățile/"+page}>{page}</NavLink>)}
            <br />
            <br />
            <button onClick={goRight}>right</button>
        </div>
    )
}

export default AllNews