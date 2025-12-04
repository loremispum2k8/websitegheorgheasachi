import { useState, useEffect, NavLink, useRef, useParams } from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import Community from './components/Community'

function App() {
    return(
        <div className='appContainer'>

            <Menu pageNumber={1}/>
            <Header/>
            <Community/>
            
        </div>
    )
}

export default App
