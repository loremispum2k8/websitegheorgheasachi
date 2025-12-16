import { useState, useEffect, NavLink, useRef, useParams, use } from 'react'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Colaborations from './administrationComponents/Colaborations'
import Aqcuisitions from './administrationComponents/Aqcuisitions'
import {useInView} from 'react-intersection-observer'

function Administration(){
    useEffect(()=>{
        document.title = 'Administrație - I.P.L.T Gheorghe Asachi'
    },[])

    const app = useRef()
    useEffect(()=>{
        app.current.classList.add('appearDocument')
    },[])


    const { ref: colaborationsRef, inView: colaborationsIsVisible} = useInView({triggerOnce:true});
    const { ref: aqcuisitonsRef, inView: aqcuisitonsIsVisible} = useInView({triggerOnce:true});
    return(
        <div ref={app}  className='administrationContainer'>
            <Menu pageNumber={3}/>
            <Colaborations elementStyles={` ${colaborationsIsVisible ? 'showSection': ''}`} elementRef={colaborationsRef} id="colaborations"/>
            <Aqcuisitions elementStyles={` ${aqcuisitonsIsVisible ? 'showSection': ''}`} elementRef={aqcuisitonsRef} id="aqcuisitons"/>
            <Footer parentLink = '/' />
        </div>
    )

}

export default Administration