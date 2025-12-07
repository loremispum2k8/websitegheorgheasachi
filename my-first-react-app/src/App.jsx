import { useState, useEffect, NavLink, useRef, useParams } from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import Community from './components/Community'
import PrincipleMessage from './components/PrincipleMessage'
import EducationLevels from './components/EducationLevels'
import Clubs from './components/Clubs'
import History from './components/History'
import Gallery from './components/Gallery'
import Testimonies from './components/Testimonies'
import Footer from './components/Footer'

function App() {
    const app = useRef()

    useEffect(()=>{
        app.current.classList.add('appearDocument')
    },[])

    return(
        <div ref={app} className='appContainer'>

            <Menu pageNumber={1}/>
            <Header id="id" />
            <Community id='community'/>
            <PrincipleMessage id='principle'/>
            <EducationLevels id='education'/>
            <Clubs id='clubs'/>
            <History id='history'/>
            <Gallery id='gallery'/>
            <Testimonies id='testimonies'/>
            <Footer/>

        </div>
    )
}

export default App
