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

import {useInView} from 'react-intersection-observer'

function App() {
    const { ref: communityRef, inView: communityIsVisible} = useInView({triggerOnce:true});
    const { ref: principleRef, inView: principleIsVisible} = useInView({triggerOnce:true});
    const { ref: educationRef, inView: educationIsVisible} = useInView({triggerOnce:true});
    const { ref: clubsRef, inView: clubsIsVisible} = useInView({triggerOnce:true});
    const { ref: historyRef, inView: historyIsVisible} = useInView({triggerOnce:true});
    const { ref: galleryRef, inView: galleryIsVisible} = useInView({triggerOnce:true});
    const { ref: testimoniesRef, inView: testimoniesIsVisible} = useInView({triggerOnce:true});
    
    
    
    const app = useRef()
    useEffect(()=>{
        app.current.classList.add('appearDocument')
    },[])

    return(
        <div ref={app} className='appContainer'>

            <Menu pageNumber={1}/>
            <Header id="id" />
            <Community elementStyles={` ${communityIsVisible ? 'showSection': ''}`} elementRef={communityRef} id='community'/>
            <PrincipleMessage elementStyles={` ${principleIsVisible ? 'showSection': ''}`} elementRef={principleRef} id='principle'/>
            <EducationLevels elementStyles={` ${educationIsVisible ? 'showSection': ''}`} elementRef={educationRef} id='education'/>
            <Clubs elementStyles={` ${clubsIsVisible ? 'showSection': ''}`} elementRef={clubsRef} id='clubs'/>
            <History elementStyles={` ${historyIsVisible ? 'showSection': ''}`} elementRef={historyRef} id='hitory'/>
            <Gallery elementStyles={` ${galleryIsVisible ? 'showSection': ''}`} elementRef={galleryRef} id='gallery'/>
            <Testimonies elementStyles={` ${testimoniesIsVisible ? 'showSection': ''}`} elementRef={testimoniesRef} id='testimonies'/>
            <Footer/>

        </div>
    )
}

export default App