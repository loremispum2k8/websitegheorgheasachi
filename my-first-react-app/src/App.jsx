import { useState, useEffect, NavLink, useRef, useParams } from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import Community from './components/Community'
import PrincipleMessage from './components/PrincipleMessage'
import EducationLevels from './components/EducationLevels'

function App() {
    const app = useRef()

    useEffect(()=>{
        app.current.classList.add('appearDocument')
    },[])

    return(
        <div ref={app} className='appContainer'>

            <Menu pageNumber={1}/>
            <Header/>
            <Community/>
            <PrincipleMessage/>
            <EducationLevels/>

        </div>
    )
}

export default App
