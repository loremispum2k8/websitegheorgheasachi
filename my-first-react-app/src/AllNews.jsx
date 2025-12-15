import { useState, useEffect, useRef, use, act } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { data, useNavigate, useParams } from 'react-router';
import Menu from "./components/Menu";
import Footer from './components/Footer'
import {useInView} from 'react-intersection-observer'



const Table_ID = "1dHlwvtfnFb1EFhYzQ0D48eXXN2rdO3_Rx6NTt2Jkahs"
const Table_Name = '1'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

function AllNews(){

    const [newsData, setNewsData] = useState()
    const [dataIsLoaded, setDatIsLoaded] = useState(false)

    const {page} = useParams()
    const [pagesLength, setPagesLength] = useState(0)
    const [pages,setPages] = useState([])
    const [activePage,setActivePage] = useState(Number(page) || 1)
    const [dataError, seDataError] = useState(null)
    const [dataLoading, setDataLoading] = useState(true)

    useEffect(()=>{
        setActivePage(page)
    },[page])

    async function getNews(){
        try{
            let data = await fetch(Table_URL)
            let data_json = await data.json()
            setNewsData(data_json)
            setDatIsLoaded(true)
        }
        catch(error){
            seDataError('Eroare')
        }finally{
            console.log('a')
            setDataLoading(false)
        }

        //Here you set how many pages there are from 1 --> who knows
        let pagesLength = Math.ceil(data_json.length/12)
        setPagesLength(pagesLength)
        let arr = []
        if(pagesLength <= 5 ){
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

    
    // useEffect(()=>{
    //     let startNews = (activePage-1)*12
    //     let lastNews = (activePage * 12 )-1
    //     for(let i = startNews; i <= lastNews; i++){
    //         newsData ? console.log(newsData[i]) : null
    //     }
    //     console.log("from: ", startNews)
    //     console.log("to: ", lastNews)
    // },[activePage,dataIsLoaded])
    

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

    if(dataError){
        return(
            <ErrorPage/>
        )
    }

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

        <div className='AllNewsContainer' ref={app}>
            <Menu pageNumber={2}/>
            <div className='allNewsContent'>
                <h1 className='AllNewsTitle'>Noutăți</h1>
                <Outlet activePage={activePage}  />
                <div className='paginationControlsContainer'>
                    <img className='paginationArrow' src='https://i.imgur.com/ZRB16z2.png' onClick={(e)=>goLeft(e)}></img>
                    <div className='paginationLinks'>
                        {pages.map((page,index)=><NavLink className="paginationLink" key={index} onClick = {(e)=>checkPageIndex(e)} to={"/toate-noutățile/"+page}>{page}</NavLink>)}
                    </div>
                    <img className='paginationArrow' src='https://i.imgur.com/N9QKfNx.png' onClick={goRight}></img>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AllNews