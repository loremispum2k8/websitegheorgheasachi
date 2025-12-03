import { useState, useEffect, NavLink, useRef, useParams } from 'react'
import Menu from './components/Menu'
import Header from './components/Header'

function App() {
    return(
        <div className='appContainer'>

            <Menu pageNumber={1}/>
            <Header></Header>
        </div>
    )
}

export default App
